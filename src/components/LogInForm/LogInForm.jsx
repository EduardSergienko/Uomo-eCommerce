import styles from './LogInForm.module.scss';
import Container from 'components/Container/Container';
import TextField from '@mui/material/TextField';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
export default function LogInForm({ onShowModal, menuChange, menuToggle }) {
  return (
    <>
      <div className={styles.loginHeader}>
        <h2>LOGIN</h2>
        <button
          className={styles.goBackBtn}
          onClick={() => menuChange('navigation')}
        >
          <MdOutlineKeyboardArrowLeft size={25} />
        </button>
        <button onClick={onShowModal} className={styles.closeBtn}>
          <CgClose size={25} />
        </button>
      </div>
      <Container>
        <form className={styles.form}>
          <TextField
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: '2px solid black',
                },
              '& label.Mui-focused': {
                color: 'black',
              },
            }}
            id="outlined"
            required
            label="Username or email address"
            variant="outlined"
          />
          <TextField
            sx={{
              width: '100%',
              mt: 4,
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: '2px solid black',
                },
              '& label.Mui-focused': {
                color: 'black',
              },
            }}
            id="outlined-basic"
            required
            type="password"
            label="Password"
            variant="outlined"
          />
          <button
            onClick={menuToggle}
            className={styles.logInBtn}
            type="submit"
          >
            LOG IN
          </button>
        </form>
        <div className={styles.createAccLink}>
          <p>No account yet?</p>
          <Link onClick={() => menuChange('register')}>Create Account</Link>
        </div>
      </Container>
    </>
  );
}
