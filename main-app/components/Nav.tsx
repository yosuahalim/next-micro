import React from "react";
import styles from "../styles/Home.module.css";

type Props = {
  children: React.ReactNode;
};

export const Nav = ({ children }: Props) => {
  return <nav className={styles.nav}>{children}</nav>;
};

export default Nav;
