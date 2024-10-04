import { useState } from "react";
import styles from "./ShortLink.module.css";
import Link from "./Link";

function ShortLink() {
  const [longLink, setLongLink] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFetch(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    const apiKey =
      "PJCZp5WHvfoFXbzjc9C8Mszqxc3dD41eYt62WWZ8rOPbss1xQINCinILGIjT"; // Replace with your TinyURL API Key
    const longUrl = longLink; // Replace with the URL you want to shorten

    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: longUrl,
        domain: "tinyurl.com", // Optional: Specify the domain
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setShortLinks((array) => [...array, [data.data.tiny_url, longLink]]);
      setIsLoading(false);
    } else {
      console.log("Error:", data.errors); // Log any errors
      setIsLoading(false);
      setIsError(true);
      return;
    }
  }

  return (
    <section className={styles.longLink}>
      <div className={styles.longLinkContainer}>
      <form className={styles.form} onSubmit={(e) => handleFetch(e)}>
        <input
          value={longLink}
          onChange={(e) => setLongLink(e.target.value)}
          type="text"
          placeholder="Shorten a link here..."
          id="shortenInput"
          className={isError ? styles.fromErrorInput : ""}
        />
        {isError && (
          <label className={styles.labelFormError} htmlFor="shortenInput">
            Please add a link
          </label>
        )}
        {isLoading && (
          <label className={styles.labelFormLoading}>Loading...</label>
        )}
        <button type="submit">Shorten it!</button>
      </form>

      <div className={styles.links}>
        {shortLinks.map((link, id) => (
          <Link link={link} key={id} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default ShortLink;
