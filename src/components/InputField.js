import React from 'react'
import { InputLabel, TextField } from '@mui/material'

const InputField = ({ id, placeholder, error, secure = false }) => {
  return (
    <>
      <InputLabel
        htmlFor={id}
        sx={{
          marginBottom: '.5rem',
          fontWeight: 300,
          fontSize: 14,
        }}
      >
        {id}
      </InputLabel>
      <TextField
        id={id}
        size='small'
        error={error}
        variant='outlined'
        placeholder={placeholder}
        type={secure ? 'password' : 'text'}
        sx={{
          mb: '1rem',
          bgcolor: '#FFFFFF',
        }}
      />
    </>
  )
}

export default InputField
