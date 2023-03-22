import styles from './SocialLinks.module.scss';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
export default function SocialLinks() {
  return (
    <div className={styles.socialBox}>
      <p>FOLLOW US</p>
      <ul>
        <Link target="_blank" to="https://m.facebook.com/">
          <FaFacebookF color="#767676" />
        </Link>
        <Link target="_blank" to="https://twitter.com/">
          <FaTwitter color="#767676" />
        </Link>
        <Link target="_blank" to="https://www.instagram.com/">
          <FaInstagram color="#767676" />
        </Link>
        <Link target="_blank" to="https://www.pinterest.com/">
          <FaPinterest color="#767676" />
        </Link>
      </ul>
    </div>
  );
}
