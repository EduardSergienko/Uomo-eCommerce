import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.socialBox}></div>
      <div className={styles.mainHeroContent}></div>
      <div className={styles.sideText}></div>
    </section>
  );
}
