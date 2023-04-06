import styles from './AboutService.module.scss';
import Container from 'components/Container/Container';
import { RiCustomerService2Line } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsShieldCheck } from 'react-icons/bs';
export default function AboutService() {
  return (
    <section className={styles.serviceSection}>
      <Container>
        <ul className={styles.serviceList}>
          <li>
            <RiCustomerService2Line size={53} />
            <h2>24/7 CUSTOMER SUPPORT</h2>
            <p>Friendly 24/7 customer support</p>
          </li>
          <li>
            <TbTruckDelivery size={53} />
            <h2>FAST AND FREE DELIVERY</h2>
            <p>Free delivery for all orders over $140</p>
          </li>
          <li>
            <BsShieldCheck size={53} />
            <h2>MONEY BACK GUARANTEE</h2>
            <p>We return money within 30 days</p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
