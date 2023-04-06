import styles from './Collections.module.scss';
import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';

export default function Collections() {
  return (
    <section className={styles.collectionSection}>
      <Container>
        <div className={styles.collectionsWrap}>
          <div className={styles.womenCollection}>
            <div className={styles.aboutCollection}>
              <p>HOT LIST</p>
              <h2>
                <span>WOMEN</span> COLLECTION
              </h2>
              <Link>SHOP NOW</Link>
            </div>
          </div>

          <div className={styles.rightBox}>
            <div className={styles.menCollection}>
              <div className={styles.aboutCollection}>
                <p>HOT LIST</p>
                <h2>
                  <span>MEN</span> COLLECTION
                </h2>
                <Link>SHOP NOW</Link>
              </div>
            </div>
            <div className={styles.kidsCollection}>
              <div className={styles.aboutCollection}>
                <p>HOT LIST</p>
                <h2>
                  <span>KIDS</span> COLLECTION
                </h2>
                <Link>SHOP NOW</Link>
              </div>
            </div>
            <div className={styles.eGift}>
              <h2>
                <span>E-GIFT</span> CARDS
              </h2>
              <p>Surprise someone with the gift they really want.</p>
              <Link>DISCOVER MORE</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
