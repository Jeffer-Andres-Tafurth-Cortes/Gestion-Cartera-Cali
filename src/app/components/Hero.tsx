"use client";

import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";

function handleClick() {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
}

export default function Hero() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <motion.h1
          id="inicio-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Recuperación de cartera en Bucaramanga para empresas y personas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Ofrecemos servicios profesionales de{" "}
          <strong>gestión y recuperación de cartera en Bucaramanga</strong>,
          ayudando a empresas, comerciantes y personas naturales a recuperar
          obligaciones pendientes mediante procesos de cobranza
          <strong> prejurídica y jurídica</strong>, siempre bajo un marco legal,
          ético y transparente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          Analizamos cada caso de forma individual para diseñar estrategias de
          cobro adaptadas al contexto empresarial y comercial de{" "}
          <strong>Bucaramanga y Santander</strong>, priorizando la recuperación
          efectiva de cartera sin afectar la relación con clientes ni la
          reputación del negocio.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          onClick={handleClick}
        >
          Solicitar asesoría en recuperación de cartera
        </motion.button>
      </motion.div>

      <motion.div
        className={styles.imagePlaceholder}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <Image
          src="/recuperacion-cartera.webp"
          alt="Recuperación de cartera en Bucaramanga para empresas y comerciantes"
          width={520}
          height={340}
          sizes="(max-width: 768px) 100vw, 520px"
          className={styles.image}
          priority
        />
      </motion.div>
    </motion.section>
  );
}
