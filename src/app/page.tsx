import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className={styles.main}>
        <section
          id="inicio"
          className={styles.section}
          aria-labelledby="inicio-title"
        >
          <Hero />
        </section>

        <section
          id="servicios"
          className={styles.section}
          aria-labelledby="servicios-title"
        >
          <Services />
        </section>

        <section
          id="nosotros"
          className={styles.section}
          aria-labelledby="nosotros-title"
        >
          <About />
        </section>

        <section
          id="blog"
          className={styles.section}
          aria-labelledby="blog-title"
        >
          <Blog />
        </section>

        <section
          id="contacto"
          className={styles.section}
          aria-labelledby="contacto-title"
        >
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
}
