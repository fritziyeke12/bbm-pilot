import Image from "next/image";
import { Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <header className="top-header">
      <span>
        <Image
          src="/bbm-header.PNG"
          alt="Team BBM, Online Fitness Coaching"
          width={200}
          height={60}
          className="logo"
        />
      </span>
      <Button
        rounded="full"
        bg="#EDDEC2"
        color="black"
        _hover={{ bg: "#E3CEA6" }}
      >
        APPLY
      </Button>
    </header>
  );
}
