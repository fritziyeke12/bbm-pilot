import Image from "next/image";
import styles from "../../styles/bio.module.css";
import { Button } from "@chakra-ui/react";

export default function Bio() {
  return (
    <div className={styles.bio}>
      <Image
        className={styles.logo}
        src="/hero-mason.png"
        alt="BBM logo"
        width={320}
        height={200}
      />
      <div className={styles["hero-items"]}>
        <h1 className={styles.heading}>FULFIL YOUR POTENTIAL</h1>
        <div>
          <p>
            My coaching isn’t just a body transformation. It’s a mindset shift.
          </p>
          <p>Ready to level up both?</p>
        </div>
        <Button
          rounded={"full"}
          bg={"#EDDEC2"}
          color={"black"}
          _hover={{ bg: "#E3CEA6" }}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}
