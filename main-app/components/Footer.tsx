import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex bg-blue-200 flex-1 flex-col p-2 items-center justify-center ">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by main application
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
