import styles from './RegisterForm.module.scss';
import Container from 'components/Container/Container';
import TextField from '@mui/material/TextField';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export default function RegisterForm({ handleActiveMenuChange, menuToggle }) {
  return (
    <>
      <div className={styles.loginHeader}>
        <h2>CREATE AN ACCOUNT</h2>
        <button onClick={() => handleActiveMenuChange('logIn')}>
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
            id="username"
            label="Username"
            variant="outlined"
          />
          <TextField
            sx={{
              mt: 4,
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
            label="Email address"
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
          <p className={styles.formInfo}>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <button
            onClick={menuToggle}
            className={styles.logInBtn}
            type="submit"
          >
            REGISTER
          </button>
        </form>
      </Container>
    </>
  );
}
