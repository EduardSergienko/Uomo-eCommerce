import styles from './ShopHero.module.scss';

import { NavLink } from 'react-router-dom';

export default function ShopHero() {
  const isActive = ({ isActive }) =>
    isActive ? styles.active : styles.heroNavLink;
  return (
    <section className={styles.shopHero}>
      <div>
        <h2 className={styles.shopHeroTitle}>NEW IN</h2>
        <ul className={styles.shopHeroNavList}>
          <li>
            <NavLink to="/shop/all" className={isActive}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/men" className={isActive}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/women" className={isActive}>
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/jeans" className={isActive}>
              Jeans
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/dresses" className={isActive}>
              Dresses
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/shorts" className={isActive}>
              Shorts
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/jackets" className={isActive}>
              Jackets
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/shirts" className={isActive}>
              T-Shirts & Tops
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/shoes" className={isActive}>
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/kids" className={isActive}>
              Kids
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
