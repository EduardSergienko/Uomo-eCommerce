import styles from './LogInForm.module.scss';
import Container from 'components/Container/Container';
import TextField from '@mui/material/TextField';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function LogInForm({ handleActiveMenuChange, menuToggle }) {
  return (
    <>
      <div className={styles.loginHeader}>
        <h2>LOGIN</h2>
        <button onClick={() => handleActiveMenuChange('navigation')}>
          <MdOutlineKeyboardArrowLeft size={25} />
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
          <Link onClick={() => handleActiveMenuChange('registration')}>
            Create Account
          </Link>
        </div>
      </Container>
    </>
  );
}
