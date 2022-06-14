import React, { FC } from 'react'
import { styled, keyframes } from '@mui/material/styles'

const fadeInLeft = keyframes`
  0% {
    opacity: 0.01;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledPage = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  animation: `${fadeInLeft} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both`,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - var(--appbar-height))'
}))

interface Props {}

const Page: FC<Props> = props => <StyledPage {...props} />

export default Page
