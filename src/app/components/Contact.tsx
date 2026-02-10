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
      aria-labelledby="contacto-cartera-cali"
      className={styles.contact}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ======================
          CTA PRINCIPAL
      ====================== */}
      <motion.div
        className={styles.ctaBox}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          id="contacto-cartera-cali"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Asesoría en gestión y recuperación de cartera en Cali
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Brindamos{" "}
          <strong>
            servicios de gestión, recaudo y cobro de cartera en Cali
          </strong>
          para empresas, comerciantes y entidades del sector salud. Nuestro
          enfoque combina estrategias de negociación profesional y
          acompañamiento jurídico conforme a la normativa colombiana vigente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Analizamos cada caso de manera personalizada para definir la mejor
          estrategia de <strong>cobro prejurídico o jurídico en Cali</strong>,
          buscando recuperar cartera vencida de forma efectiva, ética y
          respetuosa con la relación comercial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Si su empresa presenta altos índices de mora o dificultades en el
          recaudo de obligaciones, podemos apoyarlo con un diagnóstico
          estratégico y un plan de recuperación adaptado a su sector.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          onClick={handleClick}
          aria-label="Solicitar asesoría en recuperación de cartera en Cali por WhatsApp"
        >
          Solicitar asesoría en recuperación de cartera en Cali
        </motion.button>
      </motion.div>

      {/* ======================
          UBICACIÓN
      ====================== */}
      <motion.div
        className={styles.mapBox}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>Oficina de atención en Cali, Valle del Cauca</h3>

        <p>
          Atendemos empresas y personas en Cali y municipios cercanos del Valle
          del Cauca. Puede agendar una asesoría virtual o presencial según sus
          necesidades.
        </p>

        <div className={styles.mapWrapper}>
          <iframe
            title="Ubicación oficina gestión de cartera en Cali"
            src="https://www.google.com/maps?q=Cali,+Valle+del+Cauca,+Colombia&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
