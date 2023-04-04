import styles from './Collections.module.scss';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import menColl from '../../../img/home/collections/collection_img_2.jpg';
import menCollMobile from '../../../img/home/collections/collection_img_2_mob.jpg';

export default function Collections() {
  return (
    <section className={styles.collectionSection}>
      <Container style={{ maxWidth: 1440 }}>
        <Row>
          <Col sm={6}>
            <div className={styles.womenCollection}>
              <div className={styles.aboutCollection}>
                <p>HOT LIST</p>
                <h2>
                  <span>WOMEN</span> COLLECTION
                </h2>
                <Link>SHOP NOW</Link>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.menCollection}>
              <div className={styles.aboutCollection}>
                <p>HOT LIST</p>
                <h2>
                  <span>MEN</span> COLLECTION
                </h2>
                <Link>SHOP NOW</Link>
              </div>
              <picture className={styles.collectionImg}>
                <source
                  type="image/jpeg"
                  media="(min-width: 1410px)"
                  srcSet={menColl}
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 1409px)"
                  srcSet={menCollMobile}
                />
                <img src={menColl} alt="" />
              </picture>
            </div>
            <Row style={{ marginTop: 31 }}>
              <Col sm={6}>
                <div className={styles.kidsCollection}>
                  <div className={styles.aboutCollection}>
                    <p>HOT LIST</p>
                    <h2>
                      <span>KIDS</span> COLLECTION
                    </h2>
                    <Link>SHOP NOW</Link>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className={styles.eGift}>
                  <h2>
                    <span>E-GIFT</span> CARDS
                  </h2>
                  <p>Surprise someone with the gift they really want.</p>
                  <Link>DISCOVER MORE</Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
