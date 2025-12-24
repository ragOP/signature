import React from "react";
import { motion } from "framer-motion";

import {
  SectionHead,
  TransformCard,
  Feature,
  Step,
  Audience,
  Review,
  StatBox,
  Check,
} from "./SectionBits";

export default function Sections({ easeOut, CTA_LINK, CTA_TEXT, sigSrcs, IMAGES }) {
  return (
    <>
      {/* ===== WORK / TRANSFORM ===== */}
      <section id="work" className="section">
        <SectionHead
          eyebrow="✍ Our Work"
          title="From average to unforgettable"
          desc="Real transformation vibes — bold, clean, and professional."
        />

        <div className="transformGrid">
          <TransformCard
            easeOut={easeOut}
            left="Basic"
            right="Bold"
            desc="From simple scribbles to confident, professional signatures"
          />
          <TransformCard
            easeOut={easeOut}
            left="Cluttered"
            right="Clean"
            desc="Transform messy handwriting into elegant, readable signatures"
          />
          <TransformCard
            easeOut={easeOut}
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
          <Feature easeOut={easeOut} icon="🧑‍🎨" title="Expert Designers" desc="Handcrafted by professional signature designers, not AI-generated." />
          <Feature easeOut={easeOut} icon="🎯" title="Career-Focused" desc="Built to enhance your professional image across all documents." />
          <Feature easeOut={easeOut} icon="✨" title="Elegant & Readable" desc="Perfect balance of aesthetics and readability for maximum impact." />
          <Feature easeOut={easeOut} icon="📩" title="Digital Delivery" desc="Instant-ready delivery to use on all your devices." />
          <Feature easeOut={easeOut} icon="🤝" title="Personal Attention" desc="One-on-one attention ensuring your signature reflects your personality." />
          <Feature easeOut={easeOut} icon="⚡" title="Simple Process" desc="A quick flow that gets you a premium result without headache." />
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
          <Step easeOut={easeOut} n="1" title="Place your order & share your name" desc="Simple form with your name and preferences" />
          <Step easeOut={easeOut} n="2" title="We study your name, vibe & goals" desc="Expert analysis of your personality and professional needs" />
          <Step easeOut={easeOut} n="3" title="We craft 3 designer-style signatures" desc="Three unique options tailored to your style" />
          <Step easeOut={easeOut} n="4" title="Receive full package within 24–48 hours" desc="Tutorial + practice sheet + final designs via email" />
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
            easeOut={easeOut}
            title="Students & Freshers"
            sub="starting their career"
            desc="Make a strong first impression with a professional signature that sets you apart."
          />
          <Audience
            easeOut={easeOut}
            title="Business Owners"
            sub="who want to stand out"
            desc="Elevate your brand with a signature that reflects your business values."
          />
          <Audience
            easeOut={easeOut}
            title="Working Professionals"
            sub="upgrading their image"
            desc="Transform your presence with a signature that commands respect."
          />
          <Audience
            easeOut={easeOut}
            title="Creatives"
            sub="who value aesthetics"
            desc="Express your artistic vision through a signature that’s unique and beautiful."
          />
          <Audience
            easeOut={easeOut}
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
          <Review easeOut={easeOut} quote="From messy to magnetic. My new signature gets compliments every time!" name="Priya" role="CA" />
          <Review easeOut={easeOut} quote="Didn't realize how weak my signature looked until now. Total upgrade!" name="Rahul" role="Founder" />
          <Review easeOut={easeOut} quote="Best ₹500 I've spent on myself in 2024." name="Aisha" role="MBA Grad" />
          <Review easeOut={easeOut} quote="Professional signature that matches my brand perfectly!" name="Sarah" role="Marketing Director" />
          <Review easeOut={easeOut} quote="Worth every penny. My confidence has skyrocketed!" name="Michael" role="Software Engineer" />
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
              <a className="legalLink" href="#home">Privacy Policy</a>
              <span className="dotSep">•</span>
              <a className="legalLink" href="#home">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
