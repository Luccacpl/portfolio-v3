import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo-xl.png"
          alt="Next.js logo"
          width={180}
          height={130}
          priority
        />
       <span className={styles.loader}></span>
       <div className={styles.center}>
          <p className={styles.text}>Coming soon.</p>
        </div>
      </main>
    </div>
  );
}
