"use client";

import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";

function handleClick() {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
}

export default function Contact() {
  return (
    <motion.section
      aria-labelledby="contacto-title"
      className={styles.contact}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ======================
          CTA
      ====================== */}
      <motion.div
        className={styles.ctaBox}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          id="contacto-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Asesoría en gestión y recuperación de cartera en Bucaramanga
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Nuestro equipo brinda{" "}
          <strong>
            asesoría especializada en gestión, recaudo y recuperación de cartera
          </strong>{" "}
          para empresas y personas naturales en{" "}
          <strong>Bucaramanga y Santander</strong>, actuando siempre bajo la
          normativa legal vigente en Colombia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Analizamos su caso de manera personalizada y le orientamos sobre la
          mejor estrategia de cobro prejurídico o jurídico, buscando resultados
          efectivos sin afectar la relación comercial.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          onClick={handleClick}
        >
          Solicitar asesoría en recuperación de cartera
        </motion.button>
      </motion.div>

      {/* ======================
          MAPA
      ====================== */}
      <motion.div
        className={styles.mapBox}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3>Oficina y atención en Bucaramanga, Santander</h3>

        <div className={styles.mapWrapper}>
          <iframe
            title="Ubicación Bucaramanga"
            src="https://www.google.com/maps?q=Cali,+Valledelcauca,+Colombia&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
