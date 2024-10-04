import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="./images/logo.svg" alt="" className={styles.logo} />

      <div className={styles.footerContent}>
      <div className={styles.linkBlock}>
        <h4>Features</h4>
        <div>Link Shortening </div>
        <div>Branded Links</div>
        <div>Analytics</div>
      </div>

      <div className={styles.linkBlock}>
        <h4>Resources</h4>
        <div>Blog </div>
        <div>Developers</div>
        <div>Support</div>
      </div>

      <div className={styles.linkBlock}>
        <h4>Company</h4>
        <div>About</div>
        <div>Our Team</div>
        <div>Careers</div>
        <div>Contact</div>
      </div>

      <div className={styles.socials}>
        <img src="./images/icon-facebook.svg" alt="" />
        <img src="./images/icon-twitter.svg" alt="" />
        <img src="./images/icon-pinterest.svg" alt="" />
        <img src="./images/icon-instagram.svg" alt="" />
      </div>
      </div>
    </footer>
  );
}

export default Footer;
