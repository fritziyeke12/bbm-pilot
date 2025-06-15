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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ab
        laboriosam sapiente magni, eos provident assumenda maiores similique eum
        eaque porro magnam molestias pariatur nesciunt doloribus. Optio ut
        officiis ipsa!
      </h1>
    </div>
  );
}
