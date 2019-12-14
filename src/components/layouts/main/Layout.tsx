import React, { ReactNode } from 'react'
import './layout.scss'
import Navigation from '../../shared/navigation/Navigation'
import Footer from '../../shared/footer/Footer'

interface Props {
  children: ReactNode
  locale: string
  legalpage?: boolean
}

const Layout = ({ children, locale, legalpage }: Props): JSX.Element => {
  return (
    <>
      <Navigation locale={locale} />
      <main className={`container-normal ${legalpage ? '' : 'uppercase'}`}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
