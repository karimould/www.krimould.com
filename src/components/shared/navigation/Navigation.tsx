import React from 'react'
import CTA from './CTA'
import './navigation.scss'

interface NavigationProps {
  locale: string
  path?: string
}

const Navigation = ({ locale, path }: NavigationProps): JSX.Element => {
  return (
    <nav className="fixed w-full pt-10 z-10 top-0">
      <div className="nav-wrapper flex justify-between p-0 container-normal relative">
        <div className="w-1/3">
          <CTA locale={locale} />
        </div>
        <div className="w-1/3 text-center">
          <h1>EN / DE</h1>
        </div>
        <div className="w-1/3">
          <div className="float-right">
            <h1>MENU</h1>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
