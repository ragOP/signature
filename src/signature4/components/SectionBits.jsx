import React from "react";
import { motion } from "framer-motion";

export const TrustItem = ({ title, desc }) => (
  <div className="trustItem">
    <div className="trustTitle">{title}</div>
    <div className="trustDesc">{desc}</div>
  </div>
);

export const MiniStat = ({ k, v }) => (
  <div className="miniStat">
    <div className="miniK">{k}</div>
    <div className="miniV">{v}</div>
  </div>
);

export const SectionHead = ({ eyebrow, title, desc }) => (
  <div className="sectionHead">
    <div className="eyebrow">{eyebrow}</div>
    <h2 className="h2">{title}</h2>
    <p className="desc">{desc}</p>
  </div>
);

export const TransformCard = ({ easeOut, left, right, desc }) => (
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

export const Feature = ({ easeOut, icon, title, desc }) => (
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

export const Step = ({ easeOut, n, title, desc }) => (
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

export const Audience = ({ easeOut, title, sub, desc }) => (
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

export const Review = ({ easeOut, quote, name, role }) => (
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

export const StatBox = ({ k, v }) => (
  <div className="statBox">
    <div className="statK">{k}</div>
    <div className="statV">{v}</div>
  </div>
);

export const Check = ({ children }) => (
  <div className="check">
    <span className="checkDot" />
    <span>{children}</span>
  </div>
);
