import styles from './SideBarMenu.module.scss';
// import LogInForm from 'components/LogInForm/LogInForm';
// import RegisterForm from 'components/RegisterForm/RegisterForm';
export default function SideBarMenu({ children }) {
  return <div className={styles.sideBarMenu}>{children}</div>;
}
