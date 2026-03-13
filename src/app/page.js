import Ambassadors from "@/components/Ambassadors/Ambassadors";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Program from "@/components/Program/Program";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Program />
        <Ambassadors />
      </main>
    </>
  )
}