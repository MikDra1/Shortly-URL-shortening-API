import { useState } from "react";
import styles from "./Navigation.module.css";
import { useShortly } from "../contexts/ShortlyProvider";
import Button from "./Button";

function Navigation() {
  const { isMobile } = useShortly();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <img src="./images/logo.svg" alt="" />
          <img
            src="./images/hamburger.png"
            alt=""
            onClick={() => setIsOpen(!isOpen)}
            className={styles.hamburgerIcon}
          />
          <div
            className={`${isOpen ? styles.mobileUlOpen : ""} ${
              styles.headerMobileUl
            }`}
          >
            <div>features</div>
            <div>pricing</div>
            <div>resources</div>

            <div className={styles.headerMobileLoginDiv}>Login</div>

            <Button>Sign Up</Button>
          </div>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
          <div className={styles.headerDesktopFlex}>
            <img src="./images/logo.svg" alt="" />

            <div>
              <div className={styles.headerDesktopItem}>features</div>
              <div className={styles.headerDesktopItem}>pricing</div>
              <div className={styles.headerDesktopItem}>resources</div>
            </div>
          </div>
          <div className={styles.headerDesktopFlex}>
              <div className={styles.headerDesktopItem}>Login</div>
              <Button>Sign Up</Button>
          </div>
        </header>
      )}
    </>
  );
}

export default Navigation;
