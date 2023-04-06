import styles from './AboutContent.module.scss';
import Container from 'components/Container/Container';
import aboutHeroImg from '../../img/about/about_hero_img.jpg';
import aboutCompanyImg from '../../img/about/about_company_img.jpg';
import AboutService from 'components/HomePageMainContent/AboutService/AboutService';
import mangoLogo from '../../img/about/brands/mango.png';
import zaraLogo from '../../img/about/brands/zara.png';
import reebokLogo from '../../img/about/brands/reebok.png';
import asosLogo from '../../img/about/brands/asos.png';
import stradivariusLogo from '../../img/about/brands/stradivarius.png';
import adidasLogo from '../../img/about/brands/adidas.png';
import bershkaLogo from '../../img/about/brands/bershka.png';
import { useEffect } from 'react';

export default function AboutContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="about" className={styles.aboutSection}>
      <Container>
        <h1 className={styles.aboutTitle}>about uomo</h1>
        <img src={aboutHeroImg} alt="" />
        <div className={styles.ourStory}>
          <h2 className={styles.storyTitle}>OUR STORY</h2>
          <p className={styles.storyText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className={styles.storySubText}>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepers own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
          <div className={styles.ourPrinciples}>
            <div>
              <h2>Our Mission</h2>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div>
              <h2>Our Vision</h2>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.aboutCompanyWrap}>
          <img src={aboutCompanyImg} alt="" />
          <div className={styles.aboutCompany}>
            <h2>THE COMPANY</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt
              leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit
              sapien. Tempor lectus ornare quis mi vel.
            </p>
            <p>
              Nibh euismod donec elit posuere lobortis consequat faucibus
              aliquam metus. Ornare consequat, vulputate sit maecenas mauris
              urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui
              nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus,
              justo placerat.
            </p>
          </div>
        </div>
        <AboutService />
        <ul className={styles.brands}>
          <li>
            <img src={mangoLogo} alt="" />
          </li>
          <li>
            <img src={zaraLogo} alt="" />
          </li>
          <li>
            <img src={reebokLogo} alt="" />
          </li>
          <li>
            <img src={asosLogo} alt="" />
          </li>
          <li>
            <img src={stradivariusLogo} alt="" />
          </li>
          <li>
            <img src={adidasLogo} alt="" />
          </li>
          <li>
            <img src={bershkaLogo} alt="" />
          </li>
        </ul>
      </Container>
    </section>
  );
}
