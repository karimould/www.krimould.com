import React from 'react'
import { Link } from 'gatsby'
import CTA from './CTA'
import Menu from './Menu'
import './navigation.scss'
import { useScrollDirection } from '../../../hooks/hooks'

interface NavigationProps {
  locale: string
  path?: string
}

const Navigation = ({ locale, path }: NavigationProps): JSX.Element => {
  const scrollDirection: string = useScrollDirection()

  return (
    <nav
      className="fixed w-full pt-5 z-10 bg-white"
      style={scrollDirection === 'UP' || scrollDirection === 'NONE' ? { top: 0 } : { top: '-150px' }}
    >
      <div className="nav-wrapper flex justify-between p-0 container-normal relative">
        <div className="w-1/3">
          <CTA locale={locale} />
        </div>
        <div className="w-1/3 text-center">
          <Link to="/">EN</Link> / <Link to="/de">DE</Link>
        </div>
        <div className="w-1/3">
          <div className="float-right">
            <Menu locale={locale} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
