import React from 'react'
import { styled } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check'

const NormalIcon = styled(CheckIcon)(({ theme }) => ({
  color: theme.palette.success.main,
  fontSize: '1.5rem',
}))

export default NormalIcon
