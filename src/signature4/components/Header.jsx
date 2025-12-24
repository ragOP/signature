import React from "react";
import { motion } from "framer-motion";

export default function Header({
  active,
  logoSrc,
  setLogoSrc,
  CTA_LINK,
  CTA_TEXT,
  progress,
}) {
  return (
    <>
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
    </>
  );
}
