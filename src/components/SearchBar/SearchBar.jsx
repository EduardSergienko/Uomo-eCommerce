import styles from './SearchBar.module.scss';
import Container from 'components/Container/Container';
import { BsSearch } from 'react-icons/bs';
export default function SearchBar({ searchBarToggle }) {
  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      searchBarToggle();
    }
  };

  return (
    <div onClick={handleOverlayClick} className={styles.searchBarOverlay}>
      <div className={styles.searchBar}>
        <Container>
          <p>WHAT ARE YOU LOOKING FOR?</p>
          <form>
            <input
              className={styles.searchInput}
              placeholder="SEARCH PRODUCTS"
              type="text"
            />
            <button className={styles.searchBtn}>
              <BsSearch />
            </button>
          </form>
        </Container>
      </div>
    </div>
  );
}
