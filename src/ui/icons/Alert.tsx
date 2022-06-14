import React from 'react'
import { styled } from '@mui/material/styles'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const AlertIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '1.5rem'
}))

export default AlertIcon
