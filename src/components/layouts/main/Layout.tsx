import React, { ReactNode } from 'react'
import './layout.scss'
import Navigation from '../../shared/navigation/Navigation'
import Footer from '../../shared/footer/Footer'

interface Props {
  children: ReactNode
  locale: string
}

const Layout = ({ children, locale }: Props): JSX.Element => {
  return (
    <>
      <Navigation locale={locale} />
      <main className="container-normal">{children}</main>
      <Footer locale={locale} />
    </>
  )
}

export default Layout
