import styles from "../styles/Footer.module.css";
import {
  faWhatsapp,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer
        className={styles.footer}
        aria-label="Información corporativa y contacto"
      >
        <div className={styles.footerContent}>
          {/* Marca */}
          <div className={styles.brand}>
            <h4>Pravice - Gestión y Cobro de Cartera</h4>
            <p>
              Firma especializada en gestión, administración y cobro de cartera
              en Colombia. Acompañamos a empresas y organizaciones en
              Bucaramanga y el área metropolitana mediante procesos
              responsables, legales y orientados a la recuperación efectiva de
              obligaciones vencidas.
            </p>
          </div>

          {/* Contacto */}
          <address className={styles.contactInfo}>
            <p>
              <strong>Ubicación:</strong> Cali, Valle del cauca, Colombia
            </p>

            <p>
              <strong>Correo:</strong>{" "}
              <a
                href="mailto:contacto@praviceabogados.com"
                title="Correo de contacto Pravice gestión de cartera"
              >
                contacto@praviceabogados.com
              </a>
            </p>

            <p>
              <strong>Teléfono:</strong>{" "}
              <a
                href="tel:+573000000000"
                title="Teléfono de contacto gestión de cartera"
              >
                +57 300 000 0000
              </a>
            </p>
          </address>
        </div>

        <div className={styles.copy}>
          <p>© 2026 Pravice. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Redes sociales flotantes */}
      <div className={styles.socialFloating}>
        <a
          href="https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0"
          aria-label="WhatsApp Pravice gestión de cartera"
          className={`${styles.social} ${styles.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
        </a>

        <a
          href="https://www.instagram.com/pravice_abogados/"
          aria-label="Instagram Pravice gestión de cartera"
          className={`${styles.social} ${styles.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/company/praviceabogadosespecializados/"
          aria-label="LinkedIn Pravice gestión de cartera"
          className={`${styles.social} ${styles.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
        </a>
      </div>
    </>
  );
}
