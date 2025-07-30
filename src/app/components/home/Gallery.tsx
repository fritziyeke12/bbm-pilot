"use client";

// import Slider from "react-slick";
import dynamic from "next/dynamic";
// import Image from "next/image";
import styles from "../../styles/gallery.module.css";

// Dynamically import to prevent SSR issues
const ReactCompareImage = dynamic(() => import("react-compare-image"), {
  ssr: false,
});

const images = [
  ["/gsd-pup.jpg", "/gsd-dog.jpg"],
  ["/gsd-pup.jpg", "/gsd-dog.jpg"],
  ["/gsd-pup.jpg", "/gsd-dog.jpg"],
  ["/gsd-pup.jpg", "/gsd-dog.jpg"],
  ["/gsd-pup.jpg", "/gsd-dog.jpg"],
  ["/gsd-pup.jpg", "/gsd-dog.jpg"],
];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((set, index) => (
        <div className={`slider slider-${index + 1}`} key={index}>
          <ReactCompareImage
            leftImage={set[0]}
            rightImage={set[1]}
            sliderPositionPercentage={0.5}
          />
        </div>
      ))}
    </div>
  );
}
