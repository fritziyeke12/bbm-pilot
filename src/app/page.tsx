import Bio from "./components/home/Bio";
import Gallery from "./components/home/Gallery";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Bio />
      <Gallery />
    </div>
  );
}
