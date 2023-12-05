import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import flower from "../../images/flower.png";
import Link from "next/link";

export default function navbar() {
  return (
    <div
      className={`${styles.navbar} flex flex-row justify-between items-center gap-8`}
    >
      <Image src={flower} alt="Vercel Logo" width={50} priority />
      <div className="flex flex-row justify-center items-center gap-8 mr-[20px]">
        <p className={`${styles.option} text-[20px]`}>About</p>
        <p className={`${styles.option} text-[20px]`}>Price</p>
        <p className={`${styles.option} text-[20px]`}>Contact</p>
      </div>
    </div>
  );
}
