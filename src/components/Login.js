import CarBg from '../assets/images/carBg.jpg'
import Logo from '../assets/images/logo.png'
import { Box, Grid } from '@mui/material'
import FormLogin from './FormLogin'

const Login = () => {
  const styles = {
    backgroundContainer: {
      backgroundImage: `url(${CarBg})`,
      backgroundSize: 'cover',
      height: '100vh',
    },
    layerBg: {
      width: '100%',
      height: '100%',
      background: 'rgba(121, 85, 72, .3)',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginInline: 'auto',
      height: '100%',
      width: '80%',
    },
    formLogo: {
      width: '100px',
      height: '40px',
      backgroundImage: `url(${Logo})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      mb: '1rem',
    },
    formTitle: {
      fontWeight: 700,
      fontSize: 'h5.fontSize',
      mb: '1.5rem',
    },
  }

  return (
    <Grid container>
      <Grid item sm={8} sx={styles.backgroundContainer}>
        <Box sx={styles.layerBg} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={styles.formContainer}>
          <Box sx={styles.formLogo}></Box>
          <Box sx={styles.formTitle}>Welcome, Admin BCR</Box>
          <FormLogin />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login

// Photo bg by Alex Suprun on "https://unsplash.com/s/photos/cars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
