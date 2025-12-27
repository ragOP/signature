/**
 * meta-capi-local-server.cjs
 * One-file local server that:
 *  - Serves a simple HTML page at /
 *  - Accepts POST /capi and forwards to Meta Conversions API
 *
 * Run:
 *   npm i express dotenv
 *   node meta-capi-local-server.cjs
 *
 * Open:
 *   http://localhost:5055
 *
 * Notes:
 * - Keep META_ACCESS_TOKEN in .env.local (never in frontend code).
 * - For production, convert /capi into a serverless function (Vercel/Netlify/CF Worker).
 */

const express = require("express");
const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" }); // keep your secrets here

const app = express();
app.use(express.json({ limit: "1mb" }));

const PORT = Number(process.env.PORT || 5055);
const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const TEST_EVENT_CODE = (process.env.META_TEST_EVENT_CODE || "").trim();

if (!PIXEL_ID || !ACCESS_TOKEN) {
  console.error(
    "\n❌ Missing env.\nSet META_PIXEL_ID and META_ACCESS_TOKEN in .env.local\n"
  );
  process.exit(1);
}

function sha256(value) {
  if (!value) return undefined;
  const v = String(value).trim().toLowerCase();
  if (!v) return undefined;
  return crypto.createHash("sha256").update(v).digest("hex");
}

function safeIp(req) {
  // In local dev this will likely be ::1 or 127.0.0.1
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.length) return xf.split(",")[0].trim();
  return req.socket?.remoteAddress || undefined;
}

function safeUA(req) {
  return req.headers["user-agent"] || undefined;
}

// Simple page (acts like “index.html style single file”)
app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.end(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Meta CAPI Local (One File)</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; margin: 24px; }
    .card { max-width: 780px; padding: 16px; border: 1px solid #e5e7eb; border-radius: 14px; }
    .row { display: flex; gap: 12px; flex-wrap: wrap; }
    input, button { padding: 10px 12px; border-radius: 10px; border: 1px solid #d1d5db; }
    button { cursor: pointer; border: 0; background: #111827; color: #fff; }
    button:disabled { opacity: .6; cursor: not-allowed; }
    pre { background: #0b1020; color: #e5e7eb; padding: 12px; border-radius: 12px; overflow: auto; }
    .muted { color: #6b7280; font-size: 13px; }
    .ok { color: #16a34a; }
    .bad { color: #ef4444; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Meta Conversions API — Local One-File Setup</h2>
    <p class="muted">
      This page calls <code>/capi</code> on this same server, and the server forwards to Meta CAPI using your secret token from <code>.env.local</code>.
    </p>

    <div class="row" style="margin:12px 0;">
      <input id="email" placeholder="email (optional)" style="flex:1; min-width: 220px;" />
      <input id="phone" placeholder="phone (optional)" style="flex:1; min-width: 220px;" />
    </div>

    <div class="row" style="margin:12px 0;">
      <button id="btnPV">Send PageView</button>
      <button id="btnLead">Send Lead</button>
      <button id="btnPurchase">Send Purchase</button>
    </div>

    <p class="muted">
      If you set <code>META_TEST_EVENT_CODE</code> in <code>.env.local</code>, events appear in Events Manager → Test Events.
    </p>

    <div id="status" class="muted"></div>
    <pre id="out"></pre>
  </div>

<script>
  const out = document.getElementById("out");
  const statusEl = document.getElementById("status");
  const emailEl = document.getElementById("email");
  const phoneEl = document.getElementById("phone");

  function log(obj) {
    out.textContent = JSON.stringify(obj, null, 2);
  }

  async function sendEvent(event_name, extra = {}) {
    statusEl.textContent = "Sending...";
    try {
      const payload = {
        event_name,
        event_source_url: location.href,
        email: emailEl.value || undefined,
        phone: phoneEl.value || undefined,
        custom_data: extra.custom_data || undefined
      };

      const r = await fetch("/capi", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await r.json();
      statusEl.innerHTML = r.ok
        ? '<span class="ok">✅ Sent</span>'
        : '<span class="bad">❌ Error</span>';
      log(data);
    } catch (e) {
      statusEl.innerHTML = '<span class="bad">❌ Error</span>';
      log({ error: String(e) });
    }
  }

  document.getElementById("btnPV").onclick = () => sendEvent("PageView");
  document.getElementById("btnLead").onclick = () => sendEvent("Lead");
  document.getElementById("btnPurchase").onclick = () =>
    sendEvent("Purchase", { custom_data: { currency: "USD", value: 25.0 } });
</script>
</body>
</html>`);
});

app.post("/capi", async (req, res) => {
  try {
    const {
      event_name,
      event_source_url,
      email,
      phone,
      custom_data,
      action_source,
    } = req.body || {};

    if (!event_name) {
      return res.status(400).json({ ok: false, error: "event_name is required" });
    }

    // You can also accept external_id, fn/ln, etc. (hash them the same way).
    const user_data = {
      em: sha256(email),
      ph: sha256(phone),
      client_ip_address: safeIp(req),
      client_user_agent: safeUA(req),
    };

    // remove undefined fields
    Object.keys(user_data).forEach((k) => user_data[k] == null && delete user_data[k]);

    const body = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: action_source || "website",
          event_source_url: event_source_url || undefined,
          user_data,
          custom_data: custom_data || undefined,
        },
      ],
    };

    // Optional test code
    if (TEST_EVENT_CODE) {
      body.test_event_code = TEST_EVENT_CODE;
    }

    const url = `https://graph.facebook.com/v20.0/${encodeURIComponent(
      PIXEL_ID
    )}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;

    const fbRes = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    const fbJson = await fbRes.json();

    res.status(fbRes.ok ? 200 : 400).json({
      ok: fbRes.ok,
      sent: body,
      meta: fbJson,
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`\n✅ Meta CAPI local server running:\n   http://localhost:${PORT}\n`);
});
