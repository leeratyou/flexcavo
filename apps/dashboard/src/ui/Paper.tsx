import React, { FC } from 'react'
import MUIPaper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const StyledPaper = styled(MUIPaper)(({ theme }) => ({
   padding: theme.spacing(2),
}))

interface Props {}

const Paper: FC<Props & PaperProps> = props => <StyledPaper {...props} />

export default Paper
