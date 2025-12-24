import React from "react";
import { motion } from "framer-motion";
import { TrustItem, MiniStat } from "./SectionBits";

export default function Hero({
  easeOut,
  CTA_LINK,
  CTA_TEXT,
  heroParallaxY,
  heroGlow,
  heroSrc,
  setHeroSrc,
  IMAGES,
}) {
  return (
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
  );
}
