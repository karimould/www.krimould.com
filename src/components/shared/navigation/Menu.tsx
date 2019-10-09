import React, { useState } from 'react'
import { Link } from 'gatsby'

interface MenuProps {
  locale: string
}

const Menu = ({ locale }: MenuProps): JSX.Element => {
  const [isOpen, setOpen] = useState({ isMenuOpen: false, menuText: 'MENU' })
  //for the useOnClickOutside hook

  const checkMenu = (): void => {
    !isOpen.isMenuOpen
      ? setOpen({ isMenuOpen: true, menuText: 'CLOSE' })
      : setOpen({ isMenuOpen: false, menuText: 'MENU' })
  }

  return (
    <div className="navContainer">
      <button onClick={checkMenu}>{isOpen.menuText}</button>
      <ul className={`p-5 navMenu${isOpen.isMenuOpen ? ' openMenu' : ''}`}>
        <Link to="/">
          <li>
            <span className="term" />
            HOME
          </li>
        </Link>
        <Link to="/">
          <li>
            <span className="term" />
            BLOG
          </li>
        </Link>
        <Link to="/">
          <li>
            <span className="term" />
            DIGITAL-GARDEN
          </li>
        </Link>
        <Link to="/">
          <li>
            <span className="term" />
            IMPRINT
          </li>
        </Link>
        <Link to="/">
          <li>
            <span className="term" />
            PRIVACY
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Menu
