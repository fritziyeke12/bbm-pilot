import Image from "next/image";
// import headerText from "public/bbm-header";

export default function Header() {
  return (
    <header className="top-header">
      <span>Menu</span>
      <span>
        <Image
          src="/bbm-header.PNG"
          alt="Team BBM, Online Fitness Coaching"
          width={225}
          height={70}
        />
      </span>
      <span>Options</span>
    </header>
  );
}
