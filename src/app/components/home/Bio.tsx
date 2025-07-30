import Image from "next/image";
import styles from "../../styles/bio.module.css";

export default function Bio() {
  return (
    <div className={styles.bio}>
      <Image
        className={styles.logo}
        src="/bbm-logo.PNG"
        alt="BBM logo"
        width={400}
        height={400}
      />
      <h1 className={styles.text}>
        Let me help you achieve your goals. Get to where you want to be 💪
      </h1>
    </div>
  );
}
