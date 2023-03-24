import WomenCategories from './WomenCategories/WomenCategories';
import MenCategories from './MenCategories/MenCategories';
import styles from './ShopNav.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function ShopNav({ menuToggle }) {
  const [currentCategory, setCurrentCategory] = useState('women');

  const handleCategoryChange = category => {
    setCurrentCategory(category);
  };

  return (
    <>
      <div className={styles.shopNavLinks}>
        <Link
          className={
            currentCategory === 'women' ? styles.active : styles.navLink
          }
          onClick={() => handleCategoryChange('women')}
        >
          WOMEN
        </Link>
        <Link
          className={currentCategory === 'men' ? styles.active : styles.navLink}
          onClick={() => handleCategoryChange('men')}
        >
          MEN
        </Link>
        <Link
          className={
            currentCategory === 'kids' ? styles.active : styles.navLink
          }
          onClick={() => handleCategoryChange('kids')}
        >
          KIDS
        </Link>
      </div>
      {currentCategory === 'women' && <WomenCategories />}
      {currentCategory === 'men' && <MenCategories />}
      <div className={styles.goBackLink}>
        <Link onClick={menuToggle} to="/">
          HOME
        </Link>
      </div>
    </>
  );
}
