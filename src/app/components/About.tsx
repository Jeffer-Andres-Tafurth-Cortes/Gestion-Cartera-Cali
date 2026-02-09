"use client";

import Image from "next/image";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className={styles.about}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          id="nosotros-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Sobre Pravice
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          En <strong>Pravice</strong> somos una firma especializada en la
          <strong>
            {" "}
            gestión, administración y recuperación de cartera en Colombia
          </strong>
          , orientada a ofrecer soluciones responsables, transparentes y
          alineadas con la normativa legal vigente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Nuestro equipo combina experiencia jurídica, análisis estratégico y
          una comunicación clara, permitiendo acompañar a empresas y personas
          naturales en procesos de{" "}
          <strong>cartera prejurídica y jurídica</strong>, optimizando el
          recaudo de obligaciones financieras y comerciales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Trabajamos con un enfoque preventivo y correctivo, brindando control,
          seguimiento y asesoría continua, con el objetivo de mejorar los
          procesos de recaudo, reducir la morosidad y fortalecer la relación
          entre las partes involucradas.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.imagePlaceholder}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/logo_pravice.png"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          alt="Gestión de cartera y obligaciones financieras en Colombia"
          className={styles.image}
          priority
        />
      </motion.div>
    </motion.section>
  );
}
