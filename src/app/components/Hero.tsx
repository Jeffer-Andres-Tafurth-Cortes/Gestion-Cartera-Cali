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
          Gestión y Cobro de Cartera en Cali - Recuperación Efectiva de Deudas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Somos especialistas en gestión y recuperación de cartera en Cali.
          Apoyamos a empresas, pymes y comerciantes del Valle del Cauca en la
          recuperación de cartera vencida mediante procesos prejurídicos y
          jurídicos estructurados.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          onClick={handleClick}
        >
          Solicitar asesoría en Cali
        </motion.button>
      </motion.div>

      <motion.div
        className={styles.imagePlaceholder}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <Image
          src="/hero.jpg"
          alt="Recuperación de cartera en Cali para empresas y comerciantes"
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
