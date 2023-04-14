import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ShopList.module.scss';
import { shopData } from 'data/shopData';
import Container from 'components/Container/Container';
import { CiHeart } from 'react-icons/ci';
export default function ShopList() {
  const { category } = useParams();
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (category === 'all') {
      setCurrentData(shopData);
    } else {
      const filteredData = shopData.filter(item =>
        item.categories.map(item => item.toLowerCase()).includes(category)
      );
      setCurrentData(filteredData);
    }
  }, [category]);

  return (
    <section className={styles.shopSection}>
      <Container>
        <ul className={styles.mainShopList}>
          {currentData &&
            currentData.map(item => (
              <Link
                to={`/shop/${category}/${item.id}`}
                className={styles.shopItem}
                key={item.id}
              >
                <img src={item.img} alt={item.name} />
                <div className={styles.itemInfoWrap}>
                  <div>
                    <p className={styles.itemCategory}>
                      {item.categories.join(', ')}
                    </p>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>${item.price}</p>
                  </div>
                  <CiHeart />
                </div>
              </Link>
            ))}
        </ul>
      </Container>
    </section>
  );
}
