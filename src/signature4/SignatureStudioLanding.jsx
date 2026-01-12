import React, { useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

import "./styles/theme.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/component.css";
import "./styles/background.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import BackgroundFX from "./components/BackgroundFX";

const easeOut = [0.16, 1, 0.3, 1];

const SignatureStudioLanding = () => {
  const pageRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: undefined });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    mass: 0.35,
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 0.25], [0, 85]);
  const heroGlow = useTransform(scrollYProgress, [0, 0.22], [1, 0.65]);

  const CTA_LINK = "/signature-cart-four";
  const CTA_TEXT = "Buy Now";

  const IMAGES = useMemo(
    () => ({
      // Local (put in /public if you want)
      heroLocal: "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0",
      logoLocal: "/logo.png",
      sig1Local: "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp",
      sig2Local: "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp",
      sig3Local: "/sig3.jpg",
      sig4Local: "/sig4.jpg",
      sig5Local: "/sig5.jpg",

      // Fallbacks
      heroFallback:
        "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp",

      handsFallback:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80",
      deskFallback:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=80",
      penFallback:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=2000&q=80",
      sigFallback:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=2000&q=80",

      // Used in a couple places in your original code but missing:
      bgFallback:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=80",
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

  return (
    <div ref={pageRef} className="wrap">
      <Header
        active={active}
        logoSrc={logoSrc}
        setLogoSrc={setLogoSrc}
        CTA_LINK={CTA_LINK}
        CTA_TEXT={CTA_TEXT}
        progress={progress}
      />

      <BackgroundFX />

      <Hero
        easeOut={easeOut}
        CTA_LINK={CTA_LINK}
        CTA_TEXT={CTA_TEXT}
        heroParallaxY={heroParallaxY}
        heroGlow={heroGlow}
        heroSrc={heroSrc}
        setHeroSrc={setHeroSrc}
        IMAGES={IMAGES}
      />

      <Sections
        easeOut={easeOut}
        CTA_LINK={CTA_LINK}
        CTA_TEXT={CTA_TEXT}
        sigSrcs={sigSrcs}
        IMAGES={IMAGES}
      />
    </div>
  );
};

export default SignatureStudioLanding;
