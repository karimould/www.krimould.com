import React, { ReactNode } from 'react'
import './layout.scss'
import Navigation from '../../shared/navigation/navigation'

interface Props {
  children: ReactNode
  locale: string
}

const Layout = ({ children, locale }: Props): JSX.Element => {
  return (
    <>
      <Navigation locale={locale} />
      <main>{children}</main>
    </>
  )
}

export default Layout
