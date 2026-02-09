"use client";

import Link from "next/link";
import styles from "../styles/Blog.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

/* ======================
   ANIMATION VARIANTS
====================== */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Blog() {
  return (
    <section className={styles.section} aria-labelledby="blog-title">
      <div className={styles.container}>
        {/* ======================
            HEADER
        ====================== */}
        <motion.header
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 id="blog-title">
            Actualidad en gestión y cobro de cartera en Colombia
          </h2>
          <p>
            Información especializada sobre recuperación de cartera, cobranza
            administrativa y procesos de cobro en Colombia, orientada a empresas
            y personas naturales.
          </p>
        </motion.header>

        {/* ======================
            ARTÍCULO DESTACADO
        ====================== */}
        <motion.article
          className={styles.featured}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className={styles.featuredImage}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/dineroColombia.jpg"
              fill
              alt="Cobro y recuperación de cartera vencida en Colombia"
              className={styles.image}
              loading="eager"
            />
          </motion.div>

          <div className={styles.featuredContent}>
            <span className={styles.tag}>Cobranza</span>
            <span className={styles.date}>Agosto 2025</span>

            <h3>
              Estrategias efectivas para el cobro de cartera vencida en Colombia
            </h3>

            <p>
              En 2025, distintas entidades públicas y privadas fortalecieron sus
              mecanismos de cobro de cartera vencida con el objetivo de reducir
              la morosidad y mejorar la liquidez. Estas acciones reflejan la
              importancia de aplicar procesos estructurados de cobranza.
            </p>

            <p>
              Una gestión de cartera adecuada permite recuperar obligaciones
              pendientes respetando el marco legal colombiano y protegiendo los
              intereses del acreedor.
            </p>

            <Link
              href="https://incp.org.co/publicaciones/infoincp-publicaciones/impuestos/2025/08/dian-busca-recuperar-mas-de-22-billones-de-su-cartera-vencida"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMore}
            >
              Leer análisis completo →
            </Link>
          </div>
        </motion.article>

        {/* ======================
            LISTADO EDITORIAL
        ====================== */}
        <motion.div
          className={styles.list}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.article className={styles.item} variants={fadeUp}>
            <span className={styles.date}>Colombia · Enero 2026</span>

            <h4>
              Medidas para depurar y cobrar cartera vencida en el sector salud
            </h4>

            <p>
              Autoridades ordenaron fortalecer los procesos de cobro de cartera
              vencida en el sector salud, destacando la necesidad de una gestión
              eficiente para garantizar la sostenibilidad financiera.
            </p>

            <Link
              href="https://www.noticiasrcn.com/salud-y-bienestar/corte-constitucional-le-ordena-al-ministerio-de-salud-depurar-cartera-vencida-941875"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer artículo →
            </Link>
          </motion.article>

          <motion.article className={styles.item} variants={fadeUp}>
            <span className={styles.date}>Colombia · Diciembre 2025</span>

            <h4>
              Comportamiento de la cartera vencida en Colombia durante 2025
            </h4>

            <p>
              Los indicadores de mora mostraron variaciones durante 2025,
              evidenciando la necesidad de optimizar las estrategias de cobranza
              y control de cartera.
            </p>

            <Link
              href="https://cicloderiesgo.com/colombia/viviendo-el-credito/contenida-arranco-la-cartera-vencida-en-colombia-este-2025-con-el-47"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer artículo →
            </Link>
          </motion.article>

          <motion.article className={styles.item} variants={fadeUp}>
            <span className={styles.date}>Colombia · Noviembre 2025</span>

            <h4>Recuperación del crédito y gestión de cartera en Colombia</h4>

            <p>
              Analistas destacaron avances en la recuperación del crédito,
              acompañados de mejores prácticas en el cobro de obligaciones
              vencidas.
            </p>

            <Link
              href="https://www.eltiempo.com/economia/sector-financiero/en-2025-se-consolidara-la-recuperacion-del-sector-con-crecimiento-de-2-5-en-la-cartera-crediticia-dice-presidente-de-asobancaria-3382747"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer artículo →
            </Link>
          </motion.article>
        </motion.div>

        {/* ======================
            PREGUNTAS FRECUENTES
        ====================== */}
        <motion.section
          className={styles.faq}
          aria-labelledby="faq-title"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 id="faq-title" variants={fadeUp}>
            Preguntas frecuentes sobre gestión y cobro de cartera
          </motion.h3>

          <motion.div className={styles.faqItem} variants={fadeUp}>
            <h4>¿Qué es la gestión de cartera vencida?</h4>
            <p>
              Es el conjunto de acciones orientadas a recuperar obligaciones
              pendientes de pago, mediante procesos de cobranza administrativa o
              jurídica, conforme a la normatividad colombiana.
            </p>
          </motion.div>

          <motion.div className={styles.faqItem} variants={fadeUp}>
            <h4>¿Cuándo se considera una cartera como vencida?</h4>
            <p>
              Una cartera se considera vencida cuando el deudor incumple el
              plazo de pago establecido en la obligación, generando mora.
            </p>
          </motion.div>

          <motion.div className={styles.faqItem} variants={fadeUp}>
            <h4>¿Qué beneficios tiene una buena gestión de cobranza?</h4>
            <p>
              Permite mejorar el flujo de caja, reducir el riesgo financiero y
              mantener un control adecuado sobre las obligaciones pendientes.
            </p>
          </motion.div>

          <motion.div className={styles.faqItem} variants={fadeUp}>
            <h4>¿La gestión de cartera debe cumplir normas legales?</h4>
            <p>
              Sí. Todo proceso de cobro debe respetar la ley colombiana,
              garantizando un trato adecuado al deudor y evitando prácticas
              indebidas.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}
