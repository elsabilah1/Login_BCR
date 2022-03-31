import React from 'react'
import { Alert } from '@mui/material'

const AlertBox = ({ type, message }) => {
  return (
    <Alert sx={{ mb: '1rem' }} severity={type}>
      {message}
    </Alert>
  )
}

export default AlertBox
