import styles from "./AdvancedStatistics.module.css";
import Statistics from "./Statistics";

function AdvancedStatistics() {
  return (
    <section className={styles.statistics}>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className={styles.statisticsContent}>
        <Statistics
          title="Brand Recognition"
          image="./images/icon-brand-recognition.svg"
        >
          Boost your brand recognition with each click. Generic links don&apos;t
          mean a thing. Branded links help instil confidence in your content.
        </Statistics>

        <Statistics
          title="Detailed Records"
          image="./images/icon-detailed-records.svg"
          additionalClass="top-2"

        >
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </Statistics>

        <Statistics
          title="Fully Customizable"
          image="./images/icon-fully-customizable.svg"
          additionalClass="top-4"
        >
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </Statistics>
      </div>
    </section>
  );
}

export default AdvancedStatistics;
