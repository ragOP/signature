import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * SIGNATURE STUDIO — ULTRA PREMIUM LANDING (Mobile-first)
 * ✅ Full single-file React JSX
 * ✅ Premium visuals + smooth motion
 * ✅ Your provided content converted into sections
 * ✅ CTA text: "Buy Now"
 * ✅ CTA link: "/signature-cart" (change if you want)
 *
 * Install:
 *   npm i framer-motion
 *
 * Images:
 * - Put these in /public (optional):
 *   /logo.png (optional), /sig1.jpg..../sig5.jpg (optional), /hero.jpg (optional)
 * - If missing, it falls back to internet images.
 */

const easeOut = [0.16, 1, 0.3, 1];

const SignatureStudioLanding = () => {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: undefined });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    mass: 0.35,
  });

  const CTA_LINK = "/signature-cart";
  const CTA_TEXT = "Buy Now";

  const IMAGES = useMemo(
    () => ({
      // Try local first (put in /public)
      heroLocal: "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0",
      logoLocal: "/logo.png",
      sig1Local: "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp",
      sig2Local: "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp",
      sig3Local: "/sig3.jpg",
      sig4Local: "/sig4.jpg",
      sig5Local: "/sig5.jpg",

      // Fallbacks
      heroFallback: "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp",

      handsFallback:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80",
      deskFallback:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=80",
      penFallback:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=2000&q=80",
      sigFallback:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=2000&q=80",
    }),
    []
  );

  const [active, setActive] = useState("home");
  const [heroSrc, setHeroSrc] = useState(IMAGES.heroLocal);
  const [logoSrc, setLogoSrc] = useState(IMAGES.logoLocal);

  const [sigSrcs, setSigSrcs] = useState([
    IMAGES.sig1Local,
    IMAGES.sig2Local,
    IMAGES.sig3Local,
    IMAGES.sig4Local,
    IMAGES.sig5Local,
  ]);

  useEffect(() => {
    setHeroSrc(IMAGES.heroLocal || IMAGES.heroFallback);
    setLogoSrc(IMAGES.logoLocal || "");
    setSigSrcs([
      IMAGES.sig1Local || IMAGES.sigFallback,
      IMAGES.sig2Local || IMAGES.sigFallback,
      IMAGES.sig3Local || IMAGES.sigFallback,
      IMAGES.sig4Local || IMAGES.sigFallback,
      IMAGES.sig5Local || IMAGES.sigFallback,
    ]);
  }, [IMAGES]);

  useEffect(() => {
    const ids = ["home", "work", "why", "how", "for", "reviews", "limited"];
    const elMap = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x) => x.el);

    const onScroll = () => {
      const y = window.scrollY || 0;
      let best = "home";
      let bestDist = Infinity;

      elMap.forEach(({ id, el }) => {
        const rect = el.getBoundingClientRect();
        const top = rect.top + y;
        const dist = Math.abs(top - y - 140);
        if (dist < bestDist) {
          bestDist = dist;
          best = id;
        }
      });

      setActive(best);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroParallaxY = useTransform(scrollYProgress, [0, 0.25], [0, 85]);
  const heroGlow = useTransform(scrollYProgress, [0, 0.22], [1, 0.65]);

  return (
    <div ref={pageRef} className="wrap">
      {/* ===== Top Progress Bar ===== */}
      <motion.div className="topProgress" style={{ scaleX: progress }} />

      {/* ===== Sticky Header ===== */}
      <header className="header">
        <div className="headerInner">
          <a className="brand" href="#home" aria-label="Go to top">
            <span className="brandMark">
              {logoSrc ? (
                <img
                  className="brandLogo"
                  src={logoSrc}
                  alt="Signature Studio logo"
                  onError={() => setLogoSrc("")}
                />
              ) : (
                <span className="brandGlyph">SS</span>
              )}
            </span>

            <span className="brandText">
              <span className="brandName">Signature Studio</span>
              <span className="brandSub">Premium Designer Signatures</span>
            </span>
          </a>

          <nav className="nav">
            <a className={active === "work" ? "navLink active" : "navLink"} href="#work">
              Work
            </a>
            <a className={active === "why" ? "navLink active" : "navLink"} href="#why">
              Why
            </a>
            <a className={active === "how" ? "navLink active" : "navLink"} href="#how">
              How
            </a>
            <a className={active === "for" ? "navLink active" : "navLink"} href="#for">
              For Who
            </a>
            <a
              className={active === "reviews" ? "navLink active" : "navLink"}
              href="#reviews"
            >
              Reviews
            </a>
            <a
              className={active === "limited" ? "navLink active" : "navLink"}
              href="#limited"
            >
              Slots
            </a>
          </nav>

          <a className="headerCta" href={CTA_LINK}>
            {CTA_TEXT}
            <span className="headerCtaGlow" />
          </a>
        </div>
      </header>

      {/* ===== Background FX ===== */}
      <Stars />
      <Aurora />

      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <motion.div className="heroMedia" style={{ y: heroParallaxY }}>
          <img
            className="heroImg"
            src={heroSrc}
            alt="Signature Studio hero"
            onError={() => setHeroSrc(IMAGES.heroFallback)}
          />
          <div className="heroOverlay" />
          <motion.div className="heroBloom" style={{ opacity: heroGlow }} />
          <div className="heroBottomPlate" aria-hidden="true" />
        </motion.div>

        <div className="heroContent">
          <motion.div
            className="heroCard"
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            <div className="pillRow">
              <span className="pill">Handcrafted (Not AI)</span>
              <span className="pill">24–48 hrs Delivery</span>
              <span className="pill">3 Design Options</span>
              <span className="pill hot">Only 7 Slots / Week</span>
            </div>

            <h1 className="h1">
              🎯 Your signature isn’t just <span className="accent">ink</span> —
              <br />
              it’s <span className="accent2">identity.</span>
            </h1>

            <p className="sub">
              Make your name unforgettable with a designer signature crafted to match your style,
              ambition, and profession.
            </p>

            <div className="heroActions">
              <a className="cta" href={CTA_LINK}>
                {CTA_TEXT}
                <span className="ctaShine" />
              </a>

              <a className="cta ghost" href="#why">
                See What You Get
              </a>
            </div>

            <div className="priceBar">
              <div className="priceLeft">
                <div className="priceNow">₹489</div>
                <div className="priceMeta">
                  <span className="priceWas">₹4,999</span>
                  <span className="priceOff">51% OFF</span>
                </div>
              </div>

              <div className="priceRight">
                <div className="miniBadge">🚨 Last 2 slots left</div>
                <div className="miniSubText">Secure yours today</div>
              </div>
            </div>

            <div className="trustRow">
              <TrustItem title="3 Unique Options" desc="Pick your best style" />
              <TrustItem title="Tutorial Included" desc="Write it confidently" />
              <TrustItem title="Practice Sheet (PDF)" desc="Improve fast" />
              <TrustItem title="Delivery" desc="Email in 24–48 hrs" />
            </div>

            <div className="micro">
              <span className="microDot" />
              <span>One-time payment • lifetime impact • private delivery</span>
            </div>
          </motion.div>

          <motion.div
            className="heroSide"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
          >
            <div className="miniFrame">
              <img
                src={IMAGES.penFallback}
                alt="Signature preview"
                onError={(e) => (e.currentTarget.src = IMAGES.bgFallback)}
              />
              <div className="miniShade" />
              <div className="miniText">
                <div className="miniTitle">Sample Signature</div>
                <div className="miniSub">Raghib Najmi • example preview</div>
              </div>
            </div>

            <div className="miniGrid">
              <MiniStat k="Happy Clients" v="2,500+" />
              <MiniStat k="Rating" v="4.9/5" />
              <MiniStat k="Delivery" v="24–48 hrs" />
              <MiniStat k="Design Options" v="3" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== WORK / TRANSFORM ===== */}
      <section id="work" className="section">
        <SectionHead
          eyebrow="✍ Our Work"
          title="From average to unforgettable"
          desc="Real transformation vibes — bold, clean, and professional."
        />

        <div className="transformGrid">
          <TransformCard
            left="Basic"
            right="Bold"
            desc="From simple scribbles to confident, professional signatures"
          />
          <TransformCard
            left="Cluttered"
            right="Clean"
            desc="Transform messy handwriting into elegant, readable signatures"
          />
          <TransformCard
            left="Forgettable"
            right="Flawless"
            desc="Make your signature memorable and distinctive"
          />
        </div>

        <div className="galleryGrid">
          {sigSrcs.map((src, i) => (
            <motion.div
              key={i}
              className="galleryTile"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: easeOut }}
            >
              <img
                src={src}
                alt={`Signature Transformation ${i + 1}`}
                onError={(e) => (e.currentTarget.src = IMAGES.sigFallback)}
              />
              <div className="tileShade" />
              <div className="tileText">
                <div className="tileTitle">Signature Transformation {i + 1}</div>
                <div className="tileSub">Premium designer-style option</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="centerCta">
          <a className="cta" href={CTA_LINK}>
            {CTA_TEXT}
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="why" className="section sectionDark">
        <SectionHead
          eyebrow="Why Choose Us"
          title="Professional signature design that elevates your personal brand"
          desc="Designed for real-world documents: readable, elegant, and confident."
        />

        <div className="featureGrid">
          <Feature
            icon="🧑‍🎨"
            title="Expert Designers"
            desc="Handcrafted by professional signature designers, not AI-generated."
          />
          <Feature
            icon="🎯"
            title="Career-Focused"
            desc="Built to enhance your professional image across all documents."
          />
          <Feature
            icon="✨"
            title="Elegant & Readable"
            desc="Perfect balance of aesthetics and readability for maximum impact."
          />
          <Feature
            icon="📩"
            title="Digital Delivery"
            desc="Instant-ready delivery to use on all your devices."
          />
          <Feature
            icon="🤝"
            title="Personal Attention"
            desc="One-on-one attention ensuring your signature reflects your personality."
          />
          <Feature
            icon="⚡"
            title="Simple Process"
            desc="A quick flow that gets you a premium result without headache."
          />
        </div>

        <div className="centerCta">
          <a className="cta" href={CTA_LINK}>
            {CTA_TEXT}
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="section">
        <SectionHead
          eyebrow="How It Works"
          title="Get your custom signature in 4 simple steps"
          desc="Fast, guided, and premium from start to finish."
        />

        <div className="stepsGrid">
          <Step
            n="1"
            title="Place your order & share your name"
            desc="Simple form with your name and preferences"
          />
          <Step
            n="2"
            title="We study your name, vibe & goals"
            desc="Expert analysis of your personality and professional needs"
          />
          <Step
            n="3"
            title="We craft 3 designer-style signatures"
            desc="Three unique options tailored to your style"
          />
          <Step
            n="4"
            title="Receive full package within 24–48 hours"
            desc="Tutorial + practice sheet + final designs via email"
          />
        </div>

        <div className="centerCta">
          <a className="cta" href={CTA_LINK}>
            {CTA_TEXT}
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== PERFECT FOR ===== */}
      <section id="for" className="section sectionDark">
        <SectionHead
          eyebrow="Perfect For"
          title="💼 Who is this for?"
          desc="Professional signature design for everyone who wants to make their mark."
        />

        <div className="audienceGrid">
          <Audience
            title="Students & Freshers"
            sub="starting their career"
            desc="Make a strong first impression with a professional signature that sets you apart."
          />
          <Audience
            title="Business Owners"
            sub="who want to stand out"
            desc="Elevate your brand with a signature that reflects your business values."
          />
          <Audience
            title="Working Professionals"
            sub="upgrading their image"
            desc="Transform your presence with a signature that commands respect."
          />
          <Audience
            title="Creatives"
            sub="who value aesthetics"
            desc="Express your artistic vision through a signature that’s unique and beautiful."
          />
          <Audience
            title="Anyone tired of basic"
            sub="or inconsistent signatures"
            desc="Upgrade from messy handwriting to a signature that represents your best self."
          />
        </div>

        <div className="centerCta">
          <a className="cta" href={CTA_LINK}>
            {CTA_TEXT}
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="section">
        <SectionHead
          eyebrow="What Our Customers Say"
          title="Confidence upgrade — instantly"
          desc="Short, real, high-signal feedback."
        />

        <div className="reviewGrid">
          <Review
            quote="From messy to magnetic. My new signature gets compliments every time!"
            name="Priya"
            role="CA"
          />
          <Review
            quote="Didn't realize how weak my signature looked until now. Total upgrade!"
            name="Rahul"
            role="Founder"
          />
          <Review quote="Best ₹500 I've spent on myself in 2024." name="Aisha" role="MBA Grad" />
          <Review
            quote="Professional signature that matches my brand perfectly!"
            name="Sarah"
            role="Marketing Director"
          />
          <Review quote="Worth every penny. My confidence has skyrocketed!" name="Michael" role="Software Engineer" />
        </div>

        <div className="centerCta">
          <a className="cta" href={CTA_LINK}>
            {CTA_TEXT}
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== LIMITED AVAILABILITY ===== */}
      <section id="limited" className="section sectionDark">
        <SectionHead
          eyebrow="Limited Availability"
          title="⚠️ Only 7 signature slots per week"
          desc="We keep it premium — quality over quantity."
        />

        <div className="limitedWrap">
          <motion.div
            className="limitedMedia"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <img
              src={IMAGES.handsFallback}
              alt="Premium craftsmanship"
              onError={(e) => (e.currentTarget.src = IMAGES.deskFallback)}
            />
            <div className="limitedShade" />
            <div className="limitedText">
              <div className="limitedTitle">Act Now</div>
              <div className="limitedSub">Once full, orders shift to next week</div>
            </div>
          </motion.div>

          <motion.div
            className="limitedCard"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="statsRow">
              <StatBox k="Weekly Slots" v="7" />
              <StatBox k="Hours Delivery" v="24–48" />
              <StatBox k="Design Options" v="3" />
            </div>

            <div className="pricingBlock">
              <div className="pbLeft">
                <div className="pbTitle">Signature Package</div>
                <div className="pbSub">No monthly subscription • one-time payment</div>
              </div>
              <div className="pbRight">
                <div className="pbNow">₹489</div>
                <div className="pbWas">₹4,999</div>
              </div>
            </div>

            <div className="checkList">
              <Check>3 unique designer signature options</Check>
              <Check>Signature writing tutorial</Check>
              <Check>Practice sheet (PDF format)</Check>
              <Check>Delivered within 24–48 hours via email</Check>
              <Check>Private handling — your name stays yours</Check>
            </div>

            <a className="cta ctaFull" href={CTA_LINK}>
              {CTA_TEXT}
              <span className="ctaShine" />
            </a>

            <div className="finePrint">
              Tip: Add your preferred style (minimal / bold / premium) while ordering for best results.
            </div>
          </motion.div>
        </div>

        <div className="footerNote">
          <div className="footerImg">
            <img
              src={IMAGES.bgFallback}
              alt="Premium background"
              onError={(e) => (e.currentTarget.src = IMAGES.deskFallback)}
            />
            <div className="footerShade" />
          </div>

          <div className="footerText">
            <div className="footerTitle">One signature. Stronger identity.</div>
            <div className="footerSub">
              Make a clean, confident mark on every document — from bank forms to business deals.
            </div>

            <div className="centerCta" style={{ marginTop: 14 }}>
              <a className="cta" href={CTA_LINK}>
                {CTA_TEXT}
                <span className="ctaShine" />
              </a>
            </div>

            <div className="legalRow">
              <a className="legalLink" href="#home">
                Privacy Policy
              </a>
              <span className="dotSep">•</span>
              <a className="legalLink" href="#home">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{css}</style>
    </div>
  );
};

/* ------------------ Small Components ------------------ */

const TrustItem = ({ title, desc }) => (
  <div className="trustItem">
    <div className="trustTitle">{title}</div>
    <div className="trustDesc">{desc}</div>
  </div>
);

const MiniStat = ({ k, v }) => (
  <div className="miniStat">
    <div className="miniK">{k}</div>
    <div className="miniV">{v}</div>
  </div>
);

const SectionHead = ({ eyebrow, title, desc }) => (
  <div className="sectionHead">
    <div className="eyebrow">{eyebrow}</div>
    <h2 className="h2">{title}</h2>
    <p className="desc">{desc}</p>
  </div>
);

const TransformCard = ({ left, right, desc }) => (
  <motion.div
    className="transformCard"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: easeOut }}
  >
    <div className="trTop">
      <div className="trLeft">{left}</div>
      <div className="trArrow">→</div>
      <div className="trRight">{right}</div>
    </div>
    <div className="trDesc">{desc}</div>
  </motion.div>
);

const Feature = ({ icon, title, desc }) => (
  <motion.div
    className="feature"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: easeOut }}
  >
    <div className="featureIcon">{icon}</div>
    <div className="featureTitle">{title}</div>
    <div className="featureDesc">{desc}</div>
  </motion.div>
);

const Step = ({ n, title, desc }) => (
  <motion.div
    className="step"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: easeOut }}
  >
    <div className="stepNum">{n}</div>
    <div className="stepTitle">{title}</div>
    <div className="stepDesc">{desc}</div>
  </motion.div>
);

const Audience = ({ title, sub, desc }) => (
  <motion.div
    className="audience"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: easeOut }}
  >
    <div className="audTop">
      <div className="audTitle">{title}</div>
      <div className="audSub">{sub}</div>
    </div>
    <div className="audDesc">{desc}</div>
  </motion.div>
);

const Review = ({ quote, name, role }) => (
  <motion.div
    className="review"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: easeOut }}
  >
    <div className="reviewQuote">“{quote}”</div>
    <div className="reviewMeta">
      <div className="reviewName">{name}</div>
      <div className="reviewRole">{role}</div>
    </div>
  </motion.div>
);

const StatBox = ({ k, v }) => (
  <div className="statBox">
    <div className="statK">{k}</div>
    <div className="statV">{v}</div>
  </div>
);

const Check = ({ children }) => (
  <div className="check">
    <span className="checkDot" />
    <span>{children}</span>
  </div>
);

/* ------------------ Background Components ------------------ */

const Stars = () => {
  const dots = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 65; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        s: 1 + Math.random() * 2.4,
        o: 0.18 + Math.random() * 0.55,
        d: Math.random() * 6,
      });
    }
    return arr;
  }, []);

  return (
    <div className="stars" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.s}px`,
            height: `${d.s}px`,
            opacity: d.o,
            animationDelay: `${d.d}s`,
          }}
        />
      ))}
    </div>
  );
};

const Aurora = () => (
  <div className="aurora" aria-hidden="true">
    <span className="a a1" />
    <span className="a a2" />
    <span className="a a3" />
  </div>
);

/* ------------------ CSS ------------------ */

const css = `
  :root{
    --bg0:#050712;
    --bg1:#070a16;
    --stroke:rgba(255,255,255,.10);
    --stroke2:rgba(255,255,255,.14);
    --text:rgba(255,255,255,.92);
    --muted:rgba(255,255,255,.72);
    --muted2:rgba(255,255,255,.56);
    --gold:#F6D77D;
    --violet:#B88CFF;
    --aqua:#6DE4FF;
    --shadow: 0 18px 50px rgba(0,0,0,.55);
    --shadow2: 0 16px 45px rgba(0,0,0,.45);
    --radius: 22px;
  }

  *{box-sizing:border-box}
  html,body{height:100%}
  body{
    margin:0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
    background: radial-gradient(900px 700px at 20% 10%, rgba(184,140,255,.20), transparent 60%),
                radial-gradient(900px 700px at 80% 0%, rgba(109,228,255,.16), transparent 55%),
                radial-gradient(1200px 900px at 50% 110%, rgba(246,215,125,.10), transparent 55%),
                linear-gradient(180deg, var(--bg0), var(--bg1));
    color:var(--text);
    overflow-x:hidden;
  }

  .wrap{position:relative; min-height:100vh}

  /* Progress */
  .topProgress{
    position:fixed; left:0; top:0; height:3px; width:100%;
    transform-origin:left;
    background: linear-gradient(90deg, rgba(184,140,255,.95), rgba(246,215,125,.95), rgba(109,228,255,.95));
    z-index:9999;
  }

  /* Header */
  .header{
    position:sticky; top:0; z-index:50;
    backdrop-filter: blur(14px);
    background: linear-gradient(180deg, rgba(7,10,22,.72), rgba(7,10,22,.40));
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .headerInner{
    max-width:1120px;
    margin:0 auto;
    padding: 12px 14px;
    display:flex;
    align-items:center;
    gap:12px;
  }
  .brand{
    display:flex; align-items:center; gap:10px;
    text-decoration:none; color:inherit; min-width: 200px;
  }
  .brandMark{
    width:36px; height:36px; border-radius:12px;
    background:
      radial-gradient(10px 10px at 30% 30%, rgba(255,255,255,.85), transparent 60%),
      radial-gradient(12px 12px at 70% 60%, rgba(246,215,125,.85), transparent 60%),
      radial-gradient(16px 16px at 40% 80%, rgba(184,140,255,.80), transparent 60%),
      linear-gradient(135deg, rgba(109,228,255,.25), rgba(184,140,255,.18));
    border: 1px solid rgba(255,255,255,.14);
    box-shadow: 0 10px 28px rgba(0,0,0,.35);
    display:flex; align-items:center; justify-content:center;
    overflow:hidden;
    flex: 0 0 auto;
  }
  .brandLogo{width:100%; height:100%; object-fit:cover; display:block;}
  .brandGlyph{font-weight:1000; letter-spacing:.02em; font-size:12px; color: rgba(0,0,0,.85);}
  .brandText{display:flex; flex-direction:column; line-height:1.02}
  .brandName{font-weight:950; letter-spacing:.2px}
  .brandSub{font-size:12px; color:var(--muted2); margin-top:2px}

  .nav{
    display:none;
    gap:10px;
    margin-left:auto;
    margin-right: 6px;
  }
  .navLink{
    font-size:13px;
    color: var(--muted);
    text-decoration:none;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid transparent;
    transition: .2s ease;
  }
  .navLink:hover{color:var(--text); border-color: rgba(255,255,255,.12)}
  .navLink.active{
    color: var(--text);
    background: rgba(255,255,255,.06);
    border-color: rgba(255,255,255,.14);
  }

  .headerCta{
    margin-left:auto;
    position:relative;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    font-weight:950;
    font-size:13px;
    text-decoration:none;
    color:#0a0b10;
    padding: 10px 12px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.90));
    box-shadow: 0 14px 32px rgba(0,0,0,.35);
    overflow:hidden;
  }
  .headerCtaGlow{
    position:absolute; inset:-30px;
    background: radial-gradient(120px 60px at 20% 40%, rgba(255,255,255,.75), transparent 60%),
                radial-gradient(120px 60px at 70% 60%, rgba(255,255,255,.55), transparent 65%);
    opacity:.35;
    filter: blur(6px);
    animation: floatGlow 4.8s ease-in-out infinite;
    pointer-events:none;
  }
  @keyframes floatGlow { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(10px, -6px, 0)} }

  @media(min-width: 900px){
    .nav{display:flex}
    .headerCta{margin-left:0}
  }

  /* Background FX */
  .stars{ position:fixed; inset:0; pointer-events:none; z-index:0; }
  .star{
    position:absolute; border-radius:999px;
    background: rgba(255,255,255,.95);
    box-shadow: 0 0 14px rgba(255,255,255,.25);
    animation: tw 4.8s ease-in-out infinite;
  }
  @keyframes tw{
    0%,100%{transform:scale(1); opacity:var(--o, .3)}
    50%{transform:scale(1.7); opacity:1}
  }

  .aurora{ position:fixed; inset:0; pointer-events:none; z-index:0; opacity:.9; }
  .aurora .a{
    position:absolute; width: 520px; height: 520px; border-radius: 999px;
    filter: blur(60px); opacity:.42;
    animation: drift 10s ease-in-out infinite;
  }
  .a1{ left:-140px; top: 140px; background: radial-gradient(circle at 30% 30%, rgba(184,140,255,.55), transparent 65%); }
  .a2{ right:-160px; top: 60px; background: radial-gradient(circle at 30% 30%, rgba(109,228,255,.50), transparent 65%); animation-delay: -3s; }
  .a3{ left: 20%; bottom: -260px; background: radial-gradient(circle at 30% 30%, rgba(246,215,125,.35), transparent 65%); animation-delay: -6s; }
  @keyframes drift{
    0%,100%{transform: translate3d(0,0,0) scale(1)}
    50%{transform: translate3d(40px,-26px,0) scale(1.06)}
  }

  /* HERO */
  .hero{
    position:relative; z-index:1;
    padding: 22px 14px 34px;
    max-width:1120px; margin: -40px auto;
  }
  .heroMedia{
    position:absolute; inset:0;
    height: 560px;
    overflow:hidden;
    border-radius: 26px;
    border: 1px solid rgba(255,255,255,.08);
    box-shadow: var(--shadow);
  }
  .heroImg{
    width:100%; height:100%;
    object-fit: cover;
    transform: scale(1.02);
    filter: saturate(1.15) contrast(1.05);
  }
  .heroOverlay{
    position:absolute; inset:0;
    background:
      radial-gradient(600px 360px at 20% 20%, rgba(184,140,255,.22), transparent 62%),
      radial-gradient(700px 420px at 80% 15%, rgba(109,228,255,.18), transparent 65%),
      linear-gradient(180deg, rgba(0,0,0,.62), rgba(0,0,0,.45), rgba(5,7,18,.92));
  }
  .heroBloom{
    position:absolute; inset:-40px;
    background:
      radial-gradient(260px 160px at 20% 30%, rgba(246,215,125,.20), transparent 70%),
      radial-gradient(240px 160px at 75% 35%, rgba(184,140,255,.20), transparent 70%);
    filter: blur(8px);
    pointer-events:none;
  }

  .heroBottomPlate{
    position:absolute;
    left: 14px; right: 14px;
    bottom: 1px;
    height: 86px;
    border-radius: 28px;
    border: 1px solid rgba(255,255,255,.10);
    background: radial-gradient(600px 120px at 50% 0%, rgba(255,255,255,.10), rgba(255,255,255,.03));
    opacity:.55;
  }

  .heroContent{
    position:relative; z-index:2;
    padding-top: 0px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .heroCard{
    margin-top: 80px;
    background: linear-gradient(180deg, rgba(12,16,34,.78), rgba(10,14,31,.62));
    border: 1px solid rgba(255,255,255,.12);
    border-radius: var(--radius);
    padding: 16px 14px;
    backdrop-filter: blur(16px);
  }

  .pillRow{ display:flex; flex-wrap:wrap; gap:8px; margin-bottom: 10px; }
  .pill{
    font-size:12px; color: rgba(255,255,255,.88);
    padding: 7px 10px;
    border-radius:999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.05);
  }
  .pill.hot{
    border-color: rgba(246,215,125,.35);
    background: rgba(246,215,125,.10);
  }

  .h1{
    margin: 0;
    font-size: 28px;
    line-height: 1.08;
    letter-spacing: -.4px;
    font-weight: 950;
  }
  .accent{
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.95));
    -webkit-background-clip: text;
    background-clip:text;
    color: transparent;
  }
  .accent2{
    background: linear-gradient(90deg, rgba(109,228,255,.95), rgba(184,140,255,.95));
    -webkit-background-clip: text;
    background-clip:text;
    color: transparent;
  }

  .sub{
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 14.5px;
    line-height: 1.55;
  }

  .heroActions{ display:flex; flex-direction: column; gap:10px; margin-top: 14px; }

  .cta{
    position:relative;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    font-weight: 950;
    letter-spacing:.2px;
    font-size: 14.5px;
    padding: 14px 14px;
    border-radius: 999px;
    text-decoration:none;
    color: #0a0b10;
    background: linear-gradient(90deg, rgba(246,215,125,.96), rgba(184,140,255,.92));
    border: 1px solid rgba(255,255,255,.10);
    box-shadow: 0 16px 40px rgba(0,0,0,.36);
    overflow:hidden;
    transform: translateZ(0);
  }
  .cta:hover{filter:brightness(1.03)}
  .cta:active{transform: translateY(1px)}

  .cta.ghost{
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.92);
    border: 1px solid rgba(255,255,255,.14);
    box-shadow: none;
  }

  .ctaShine{
    position:absolute;
    inset:-60px -80px;
    background: radial-gradient(180px 80px at 20% 50%, rgba(255,255,255,.55), transparent 60%);
    transform: translate3d(-20px,0,0);
    opacity:.45;
    filter: blur(8px);
    animation: shine 3.6s ease-in-out infinite;
    pointer-events:none;
  }
  @keyframes shine{
    0%,100%{transform: translate3d(-30px,0,0)}
    50%{transform: translate3d(40px,-10px,0)}
  }

  .priceBar{
    margin-top: 14px;
    display:flex;
    gap:12px;
    align-items:stretch;
    flex-wrap:wrap;
    padding: 12px 12px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .priceLeft{display:flex; align-items:center; gap:12px}
  .priceNow{
    font-weight: 1000;
    font-size: 28px;
    letter-spacing: -.3px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.95));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }
  .priceMeta{display:flex; flex-direction:column; gap:6px}
  .priceWas{color: rgba(255,255,255,.55); text-decoration: line-through; font-weight:900}
  .priceOff{
    display:inline-flex;
    width:max-content;
    font-size:12px;
    font-weight:950;
    padding: 6px 10px;
    border-radius: 999px;
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(109,228,255,.85), rgba(246,215,125,.95));
  }
  .priceRight{margin-left:auto; display:flex; flex-direction:column; justify-content:center; gap:6px}
  .miniBadge{
    width:max-content;
    padding: 7px 10px;
    border-radius: 999px;
    border: 1px solid rgba(246,215,125,.25);
    background: rgba(246,215,125,.10);
    font-weight: 950;
    font-size: 12px;
  }
  .miniSubText{color: rgba(255,255,255,.72); font-size: 12px}

  .trustRow{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:10px;
    margin-top: 14px;
  }
  .trustItem{
    padding: 10px 10px;
    border-radius: 16px;
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.10);
  }
  .trustTitle{font-size:12.5px; font-weight:950}
  .trustDesc{font-size:12px; color: rgba(255,255,255,.56); margin-top:3px}

  .micro{
    margin-top: 12px;
    display:flex;
    align-items:center;
    gap:10px;
    font-size:12px;
    color: rgba(255,255,255,.56);
  }
  .microDot{
    width:7px; height:7px; border-radius:999px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(109,228,255,.95));
    box-shadow: 0 0 18px rgba(246,215,125,.25);
  }

  .heroSide{ display:none; }
  .miniFrame{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    box-shadow: var(--shadow2);
    height: 210px;
  }
  .miniFrame img{width:100%; height:100%; object-fit:cover; filter:saturate(1.1)}
  .miniShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.78)); }
  .miniText{ position:absolute; left:12px; bottom:12px; }
  .miniTitle{font-weight:950}
  .miniSub{font-size:12px; color: rgba(255,255,255,.72); margin-top:2px}

  .miniGrid{ margin-top: 10px; display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
  .miniStat{
    padding: 12px 12px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .miniK{font-size:12px; color: rgba(255,255,255,.72)}
  .miniV{font-size:16px; font-weight:950; margin-top:4px}

  @media(min-width: 980px){
    .hero{padding: 28px 16px 40px}
    .heroMedia{height: 600px}
    .heroContent{
      grid-template-columns: 1.1fr .9fr;
      align-items: start;
      gap: 16px;
    }
    .heroCard{margin-top: 360px; padding: 18px 16px}
    .h1{font-size: 44px}
    .sub{font-size: 15.5px}
    .heroActions{flex-direction: row}
    .heroSide{display:block; margin-top: 360px}
  }

  /* Sections */
  .section{
    position:relative;
    z-index:1;
    padding: 70px 14px;
    max-width:1120px;
    margin: -19px auto;
  }
  .sectionDark{
    background:
      radial-gradient(700px 460px at 15% 10%, rgba(184,140,255,.12), transparent 65%),
      radial-gradient(700px 460px at 85% 0%, rgba(109,228,255,.10), transparent 65%),
      linear-gradient(180deg, rgba(4,6,14,.82), rgba(4,6,14,.58));
    border-top: 1px solid rgba(255,255,255,.06);
    border-bottom: 1px solid rgba(255,255,255,.06);
  }
  .sectionHead{ margin-bottom: 18px; }
  .eyebrow{
    display:inline-flex;
    align-items:center;
    gap:8px;
    font-size:12px;
    letter-spacing:.22em;
    text-transform:uppercase;
    color: rgba(246,215,125,.9);
  }
  .h2{
    margin: 10px 0 0;
    font-size: 26px;
    line-height:1.12;
    letter-spacing: -.35px;
    font-weight: 950;
  }
  .desc{
    margin: 10px 0 0;
    color: rgba(255,255,255,.72);
    font-size: 14.5px;
    line-height: 1.6;
    max-width: 70ch;
  }
  @media(min-width: 980px){
    .h2{font-size: 36px}
    .desc{font-size: 15.5px}
  }

  /* Transform */
  .transformGrid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 16px;
  }
  .transformCard{
    padding: 14px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .trTop{display:flex; align-items:center; justify-content:center; gap:10px}
  .trLeft,.trRight{
    font-weight: 1000;
    letter-spacing:-.2px;
    font-size: 16px;
  }
  .trRight{
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.95));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }
  .trArrow{opacity:.7}
  .trDesc{margin-top: 8px; color: rgba(255,255,255,.72); font-size: 13.8px; line-height: 1.55; text-align:center}
  @media(min-width: 980px){
    .transformGrid{grid-template-columns: 1fr 1fr 1fr; gap: 12px}
  }

  /* Gallery */
  .galleryGrid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 14px;
  }
  .galleryTile{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    box-shadow: var(--shadow2);
    height: 230px;
  }
  .galleryTile img{width:100%; height:100%; object-fit:cover; filter:saturate(1.12) contrast(1.05)}
  .tileShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.78)); }
  .tileText{ position:absolute; left:12px; right:12px; bottom:12px; }
  .tileTitle{font-weight:950; font-size: 15px}
  .tileSub{margin-top:4px; font-size: 12.5px; color: rgba(255,255,255,.72)}
  @media(min-width: 980px){
    .galleryGrid{grid-template-columns: 1fr 1fr 1fr; gap: 14px}
    .galleryTile{height: 260px}
  }

  .centerCta{ margin-top: 18px; display:flex; justify-content:center; }

  /* Features */
  .featureGrid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 16px;
  }
  .feature{
    padding: 14px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .featureIcon{
    width: 40px; height: 40px; border-radius: 16px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.10);
    font-size: 18px;
  }
  .featureTitle{margin-top: 10px; font-weight: 950;}
  .featureDesc{margin-top: 6px; color: rgba(255,255,255,.72); font-size: 13.8px; line-height: 1.55;}
  @media(min-width: 980px){
    .featureGrid{grid-template-columns: 1fr 1fr 1fr; gap: 12px}
  }

  /* Steps */
  .stepsGrid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 16px;
  }
  .step{
    padding: 14px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .stepNum{
    width: 36px; height: 36px; border-radius: 14px;
    display:flex; align-items:center; justify-content:center;
    font-weight: 1000;
    color: rgba(0,0,0,.9);
    background: linear-gradient(90deg, rgba(246,215,125,.96), rgba(109,228,255,.85));
  }
  .stepTitle{margin-top: 10px; font-weight: 950;}
  .stepDesc{margin-top: 6px; color: rgba(255,255,255,.72); font-size: 13.8px; line-height: 1.55;}
  @media(min-width: 980px){
    .stepsGrid{grid-template-columns: 1fr 1fr; gap: 12px}
  }

  /* Audience */
  .audienceGrid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 16px;
  }
  .audience{
    padding: 14px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .audTop{display:flex; flex-direction:column; gap:4px}
  .audTitle{font-weight: 950;}
  .audSub{font-size: 12.5px; color: rgba(246,215,125,.9); letter-spacing:.02em}
  .audDesc{margin-top: 8px; color: rgba(255,255,255,.72); font-size: 13.8px; line-height: 1.55;}
  @media(min-width: 980px){
    .audienceGrid{grid-template-columns: 1fr 1fr 1fr; gap: 12px}
  }

  /* Reviews */
  .reviewGrid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 16px;
  }
  .review{
    padding: 14px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .reviewQuote{color: rgba(255,255,255,.90); font-size: 14px; line-height: 1.6;}
  .reviewMeta{margin-top: 10px; display:flex; gap:10px; align-items:baseline}
  .reviewName{font-weight: 950;}
  .reviewRole{color: rgba(255,255,255,.62); font-size: 12.5px;}
  @media(min-width: 980px){
    .reviewGrid{grid-template-columns: 1fr 1fr; gap: 12px}
  }

  /* Limited */
  .limitedWrap{
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 14px;
  }
  .limitedMedia{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    height: 240px;
  }
  .limitedMedia img{width:100%; height:100%; object-fit:cover; filter:saturate(1.1)}
  .limitedShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.78)); }
  .limitedText{ position:absolute; left:12px; bottom:12px; right:12px; }
  .limitedTitle{font-weight:950; font-size:16px}
  .limitedSub{margin-top:4px; color: rgba(255,255,255,.72); font-size:12.5px}

  .limitedCard{
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .statsRow{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .statBox{
    padding: 12px 12px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .statK{font-size:12px; color: rgba(255,255,255,.72)}
  .statV{font-size:16px; font-weight:950; margin-top:4px}
  @media(min-width: 980px){
    .statsRow{grid-template-columns: 1fr 1fr 1fr}
  }

  .pricingBlock{
    margin-top: 12px;
    display:flex; gap:12px; align-items:center; justify-content:space-between;
    padding: 12px 12px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
  }
  .pbTitle{font-weight: 950;}
  .pbSub{margin-top:4px; color: rgba(255,255,255,.72); font-size: 12.5px}
  .pbRight{display:flex; align-items:baseline; gap:10px}
  .pbNow{
    font-weight: 1000;
    font-size: 26px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.95));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }
  .pbWas{ color: rgba(255,255,255,.55); text-decoration: line-through; font-weight:900; }

  .checkList{
    margin-top: 12px;
    display:flex;
    flex-direction:column;
    gap: 10px;
  }
  .check{
    display:flex; gap:10px; align-items:flex-start;
    padding: 10px 12px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    color: rgba(255,255,255,.78);
    font-size: 13.4px;
    line-height: 1.5;
  }
  .checkDot{
    width:8px; height:8px; border-radius:999px;
    background: rgba(246,215,125,.95);
    box-shadow: 0 0 16px rgba(246,215,125,.20);
    flex: 0 0 auto;
    margin-top: 6px;
  }

  .ctaFull{width:100%; margin-top: 12px}
  .finePrint{ margin-top: 10px; color: rgba(255,255,255,.56); font-size: 12.5px; line-height: 1.55; }

  @media(min-width: 980px){
    .limitedWrap{grid-template-columns: .9fr 1.1fr; gap: 16px}
    .limitedMedia{height: 100%}
  }

  /* Footer */
  .footerNote{
    margin-top: 18px;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    overflow:hidden;
    background: rgba(255,255,255,.03);
    display:grid;
    grid-template-columns: 1fr;
  }
  .footerImg{ position:relative; height: 160px; }
  .footerImg img{width:100%; height:100%; object-fit:cover; filter:saturate(1.08)}
  .footerShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.82)); }
  .footerText{ padding: 14px 14px; }
  .footerTitle{ font-weight: 950; font-size: 16px; }
  .footerSub{ margin-top: 6px; color: rgba(255,255,255,.72); font-size: 13.8px; line-height: 1.55; }

  .legalRow{margin-top: 12px; display:flex; align-items:center; gap:10px; flex-wrap:wrap}
  .legalLink{color: rgba(255,255,255,.72); text-decoration:none; font-weight:900; font-size: 12.5px}
  .legalLink:hover{color: rgba(255,255,255,.92)}
  .dotSep{color: rgba(255,255,255,.40)}
  @media(min-width: 980px){
    .footerNote{grid-template-columns: .7fr 1.3fr}
    .footerImg{height: 100%}
  }
`;

export default SignatureStudioLanding;
