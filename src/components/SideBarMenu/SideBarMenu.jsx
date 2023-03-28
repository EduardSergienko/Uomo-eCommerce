// import Container from 'components/Container/Container';
import styles from './SideBarMenu.module.scss';

export default function SideBarMenu({ children }) {
  return <div className={styles.sideBarMenu}>{children}</div>;
}
