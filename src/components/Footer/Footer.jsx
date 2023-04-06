// import Container from 'react-bootstrap/Container';
import Container from 'components/Container/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import payments from '../../img/payments.png';
import SocialLinks from 'components/SocialLinks/SocialLinks';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container style={{ maxWidth: 1440 }}>
        <Row>
          <Col className={styles.footerContacts} sm={3}>
            <Link className={styles.footerLogo} to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className={styles.contactsContent}>
              <p>
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </p>
              <a href="mailto:sale@uomo.com">sale@uomo.com</a>
              <a href="tel:+1 246-345-0695">+1 246-345-0695</a>
            </div>
            <SocialLinks isVertical={false} />
          </Col>
          <Col className={styles.footerNavBox} sm={2}>
            <h2 className={styles.footerNavTitle}>Company</h2>
            <ul className={styles.footerNavList}>
              <li>
                <Link to="about" className={styles.footerNavLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Careers</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Affiliates</Link>
              </li>
              <li>
                <Link to="blog" className={styles.footerNavLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col className={styles.footerNavBox} sm={2}>
            <h2 className={styles.footerNavTitle}>Shop</h2>
            <ul className={styles.footerNavList}>
              <li>
                <Link className={styles.footerNavLink}>New Arrivals</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Kids</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Men</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Women</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Shop All</Link>
              </li>
            </ul>
          </Col>
          <Col sm={2}>
            <h2 className={styles.footerNavTitle}>Help</h2>
            <ul className={styles.footerNavList}>
              <li>
                <Link className={styles.footerNavLink}>Customer Service</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>My Account</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Find a Store</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Legal & Privacy</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Contact</Link>
              </li>
              <li>
                <Link className={styles.footerNavLink}>Gift Card</Link>
              </li>
            </ul>
          </Col>
          <Col className={styles.subscribeBox} sm={3}>
            <h2 className={styles.footerNavTitle}>SUBSCRIBE</h2>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form className={styles.footerForm}>
              <input
                className={styles.footerInput}
                placeholder="Your email address"
                type="text"
              />
              <button className={styles.joinBtn} type="button">
                JOIN
              </button>
            </form>
            <p className={styles.paymentsText}>Secure payments</p>
            <img className={styles.paymentMethodsImg} src={payments} alt="" />
          </Col>
        </Row>
        <div className={styles.bottomMenu}>
          <p>©2023 Uomo</p>
        </div>
      </Container>
    </footer>
  );
}
