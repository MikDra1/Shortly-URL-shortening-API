/* eslint-disable react/prop-types */
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./Link.module.css";
import { useState } from "react";

function Link({ link }) {
  const [shortLink, longLink] = link;
  const [copied, setCopied] = useState(false);

  return (
    <div className={styles.link}>
      <p className={styles.longLink}>{longLink}</p>
      <p className={styles.shortLink}>{shortLink}</p>

      <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
        <button className={`${styles.btnCopy} ${copied ? styles.btnCopied : '' }`}>{copied ? 'Copied!' : 'Copy'}</button>
      </CopyToClipboard>
    </div>
  );
}

export default Link;
