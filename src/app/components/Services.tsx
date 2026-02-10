"use client";

import styles from "../styles/Services.module.css";
import { motion } from "framer-motion";

const generalServices = [
  {
    title: "Recuperación de cartera en Cali",
    description:
      "Apoyamos a empresas, comerciantes y personas naturales en Cali en la recuperación de cartera vencida mediante estrategias de negociación estructuradas, éticas y orientadas a resultados. Nuestro objetivo es normalizar obligaciones sin deteriorar la relación comercial con los deudores.",
  },
  {
    title: "Gestión integral de cartera empresarial en Cali",
    description:
      "Administramos procesos completos de gestión de cartera para empresas en Cali y el Valle del Cauca, realizando seguimiento por etapas, control de mora y reportes estratégicos que permiten reducir índices de morosidad y mejorar el flujo de caja.",
  },
  {
    title: "Recaudo de cartera para empresas",
    description:
      "Diseñamos estrategias de recaudo de cartera adaptadas a la realidad financiera de cada empresa en Cali, facilitando acuerdos de pago efectivos y promoviendo el cumplimiento oportuno de obligaciones pendientes.",
  },
  {
    title: "Cobro de cartera prejurídico y jurídico en Cali",
    description:
      "Ejecutamos procesos de cobro de cartera bajo la normatividad colombiana vigente, actuando de forma ética y profesional tanto en la etapa prejurídica como en procesos ejecutivos ante juzgados de Cali.",
  },
];

const healthServices = [
  {
    title: "Recaudo de cartera para el sector salud en Cali",
    description:
      "Ofrecemos servicios especializados de recuperación de cartera para clínicas, hospitales, IPS y profesionales del sector salud en Cali, gestionando cuentas derivadas de servicios médicos y asistenciales.",
  },
  {
    title: "Recuperación de cartera EPS e IPS",
    description:
      "Acompañamos a IPS y prestadores de servicios de salud en la recuperación de cartera frente a EPS y demás pagadores, gestionando conciliaciones, seguimiento técnico y normalización de cuentas conforme a la regulación del sistema de salud colombiano.",
  },
  {
    title: "Gestión de cartera por servicios médicos",
    description:
      "Administramos cartera derivada de consultas, procedimientos, hospitalizaciones y servicios especializados, garantizando trazabilidad documental y recaudo estructurado que fortalece la estabilidad financiera de las entidades de salud.",
  },
  {
    title: "Cobro prejurídico y jurídico en el sector salud",
    description:
      "Desarrollamos procesos de cobro en salud bajo un enfoque técnico y legal, respetando los marcos regulatorios vigentes y buscando soluciones efectivas para la recuperación de recursos.",
  },
];

export default function Services() {
  return (
    <motion.section
      className={styles.services}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        id="servicios-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Servicios de gestión y recuperación de cartera en Cali
      </motion.h2>

      {/* Cartera general */}
      <motion.h3 className={styles.subTitle}>
        Recaudo y recuperación de cartera para empresas y personas naturales
      </motion.h3>

      <motion.div className={styles.grid}>
        {generalServices.map((service, index) => (
          <motion.div key={index} className={styles.card}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Sector salud */}
      <motion.h3 className={styles.subTitle}>
        Recaudo de cartera para el sector salud en Colombia
      </motion.h3>

      <motion.div className={styles.grid}>
        {healthServices.map((service, index) => (
          <motion.div key={index} className={styles.card}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
