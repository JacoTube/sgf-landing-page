import Ambassadors from "@/components/Ambassadors/Ambassadors";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Program from "@/components/Program/Program";
import Partnership from "@/components/Partnership/Partnership";
import Sponsors from "@/components/Sponsors/Sponsors";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Program />
        <Ambassadors />
        <Sponsors />
        <Partnership />
        <Footer />
      </main>
    </>
  )
}