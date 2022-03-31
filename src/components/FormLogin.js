import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import AlertBox from './AlertBox'
import InputField from './InputField'

const FormLogin = () => {
  const [error, setError] = useState(false)

  const message = 'This is an error alert'

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {error && <AlertBox type='error' message={message} />}

      <InputField id='Email' placeholder='input your email..' error={error} />
      <InputField
        id='Password'
        placeholder='+6 character'
        secure={true}
        error={error}
      />

      <Button
        sx={{
          textTransform: 'capitalize',
          fontWeight: 700,
          mt: '1.5rem',
        }}
        size='large'
        variant='contained'
        children='Sign In'
        color='secondary'
        onClick={() => setError(true)}
      />
    </Box>
  )
}

export default FormLogin
