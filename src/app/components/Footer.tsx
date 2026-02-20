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
                href="mailto:info.pravice@abogadosespecialistas.com.co"
                title="Correo de contacto Pravice gestión de cartera"
              >
                info.pravice@abogadosespecialistas.com.co
              </a>
            </p>

            <p>
              <strong>Teléfono:</strong>{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                title="Teléfono de contacto gestión de cartera"
              >
                +57 311 465 9315
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
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
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
