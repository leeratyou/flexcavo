import React, { FC } from 'react'
import { Global, css } from '@emotion/react'

const global = css`
  #root {}
  :root {
    --appbar-height: 64px;
  }
`

interface Props {}

const GlobalStyles: FC<Props> = () => {
  return (
    <Global styles={global} />
  )
}

export default GlobalStyles
