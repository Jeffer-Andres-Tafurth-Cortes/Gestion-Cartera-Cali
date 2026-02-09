"use client";

import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { useState } from "react";

function handleClick() {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar} aria-label="Navegación principal">
      {/* Logo */}
      <div className={styles.left}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/logo_pravice.png"
              alt="Pravice - Gestión y cobro de cartera en Colombia"
              fill
              priority
              sizes="(max-width: 768px) 120px, 160px"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>

      {/* Menú desktop */}
      <ul className={styles.center}>
        <li>
          <Link href="#inicio">Inicio</Link>
        </li>
        <li>
          <Link href="#servicios">Servicios</Link>
        </li>
        <li>
          <Link href="#nosotros">Nosotros</Link>
        </li>
        <li>
          <Link href="#blog">Blog</Link>
        </li>
        <li>
          <Link href="#contacto">Contacto</Link>
        </li>
      </ul>

      {/* CTA + Hamburger */}
      <div className={styles.right}>
        <button className={styles.cta} onClick={handleClick}>
          Asesoría en cobro de cartera
        </button>

        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="#inicio" onClick={() => setOpen(false)}>
            Inicio
          </Link>
          <Link href="#servicios" onClick={() => setOpen(false)}>
            Servicios
          </Link>
          <Link href="#nosotros" onClick={() => setOpen(false)}>
            Nosotros
          </Link>
          <Link href="#contacto" onClick={() => setOpen(false)}>
            Contacto
          </Link>

          <button onClick={handleClick}>Solicitar asesoría</button>
        </div>
      )}
    </nav>
  );
}
