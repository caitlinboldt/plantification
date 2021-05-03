import headerStyles from "../styles/Header.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  function toggle() {
    setIsOpenDropdown(!isOpenDropdown);
  }

  return (
    <nav
      className={
        isOpenDropdown
          ? `${headerStyles.nav} ${headerStyles.responsive}`
          : headerStyles.nav
      }
      id="navbar"
    >
      <Link href="/">
        <img src="flower-icon.svg" alt="Flower icon"></img>
      </Link>
      <div className={headerStyles.dropdown}>
        <button className={headerStyles.dropbtn}>
          Indoor <img src="chervon-down.svg" alt="Chevron down" />
        </button>
        <div className={headerStyles.dropdownContent}>
          <Link href="/indirect-light">Indirect light</Link>
          <Link href="/partial-light">Partial light</Link>
          <Link href="/direct-light">Direct light</Link>
        </div>
      </div>
      <div className={headerStyles.dropdown}>
        <button className={headerStyles.dropbtn}>
          Outdoor <img src="chervon-down.svg" alt="Chevron down" />
        </button>
        <div className={headerStyles.dropdownContent}>
          <Link href="/fruits-and-veggies">Fruits and veggies</Link>
          <Link href="/flowers">Flowers</Link>
          <Link href="/patio-plants">Patio plants</Link>
        </div>
      </div>
      <a
        style={{ fontSize: "15px" }}
        className={headerStyles.icon}
        onClick={toggle}
      >
        &#9776;
      </a>
    </nav>
  );
}
