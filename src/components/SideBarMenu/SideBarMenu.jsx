import styles from './SideBarMenu.module.scss';
import LogInForm from 'components/LogInForm/LogInForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
export default function SideBarMenu({ handleActiveMenuChange, menuToRender }) {
  return (
    <div className={styles.sideBarMenu}>
      {menuToRender === 'login' && (
        <LogInForm menuChange={handleActiveMenuChange} />
      )}
      {menuToRender === 'register' && (
        <RegisterForm menuChange={handleActiveMenuChange} />
      )}
    </div>
  );
}
