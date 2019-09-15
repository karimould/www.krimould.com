import React, { ReactNode } from 'react'
import './layout.scss'
import Navigation from '../../shared/navigation/navigation'
import Footer from '../../shared/footer/Footer'

interface Props {
  children: ReactNode
  locale: string
}

const Layout = ({ children, locale }: Props): JSX.Element => {
  return (
    <>
      <Navigation locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  )
}

export default Layout
