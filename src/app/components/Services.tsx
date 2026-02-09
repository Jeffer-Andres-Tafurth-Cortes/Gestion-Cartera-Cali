"use client";

import styles from "../styles/Services.module.css";
import { motion } from "framer-motion";

const generalServices = [
  {
    title: "Recuperación de cartera en Bucaramanga",
    description:
      "Apoyamos a empresas, comerciantes y personas naturales en Bucaramanga en la recuperación de cartera vencida, mediante estrategias de negociación responsables que buscan normalizar las obligaciones sin deteriorar la relación comercial con los deudores.",
  },
  {
    title: "Gestión integral de cartera",
    description:
      "Administramos de forma integral los procesos de cartera de empresas en Bucaramanga y Santander, realizando seguimiento permanente, control por etapas y reportes claros que permiten tomar decisiones oportunas y reducir los índices de morosidad.",
  },
  {
    title: "Recaudo de cartera empresarial",
    description:
      "Diseñamos e implementamos estrategias de recaudo de cartera adaptadas a la realidad financiera de cada empresa, facilitando acuerdos de pago y promoviendo el cumplimiento oportuno de las obligaciones pendientes.",
  },
  {
    title: "Cobro de cartera prejurídico y jurídico",
    description:
      "Desarrollamos procesos de cobro de cartera bajo los lineamientos legales vigentes en Colombia, actuando de manera ética, transparente y respetuosa, tanto en etapas prejurídicas como en procesos jurídicos formales.",
  },
];

const healthServices = [
  {
    title: "Recaudo de cartera para el sector salud",
    description:
      "Ofrecemos servicios especializados de recaudo de cartera para el sector salud en Colombia, apoyando a clínicas, hospitales, IPS y profesionales de la salud en la recuperación de cuentas pendientes provenientes de servicios médicos y asistenciales.",
  },
  {
    title: "Recuperación de cartera EPS e IPS",
    description:
      "Acompañamos a IPS y prestadores de servicios de salud en la recuperación de cartera frente a EPS y otros pagadores, gestionando procesos de conciliación, seguimiento y normalización de cuentas conforme a la normatividad del sistema de salud colombiano.",
  },
  {
    title: "Gestión de cartera por servicios médicos",
    description:
      "Administramos cartera derivada de consultas, procedimientos, hospitalizaciones y servicios especializados, garantizando trazabilidad, control documental y un recaudo estructurado que mejora el flujo de caja de las entidades de salud.",
  },
  {
    title: "Cobro prejurídico y jurídico en salud",
    description:
      "Ejecutamos procesos de cobro de cartera en el sector salud bajo un enfoque legal y técnico, respetando los marcos regulatorios vigentes y buscando soluciones efectivas que permitan la recuperación de recursos sin afectar la operación de las entidades.",
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
        Servicios de gestión y recuperación de cartera en Bucaramanga
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
