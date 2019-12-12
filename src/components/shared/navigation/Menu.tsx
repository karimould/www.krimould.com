import React, { useState } from 'react'
import { Link } from 'gatsby'

interface MenuProps {
  locale: string
}

interface MenuState {
  isMenuOpen: boolean
  menuText: string
}

const Menu = ({ locale }: MenuProps): JSX.Element => {
  const [isOpen, setOpen] = useState<MenuState>({ isMenuOpen: false, menuText: 'MENU' })
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
        <Link to={locale === 'en' ? '/' : '/de'}>
          <li>
            <span className="term" />
            HOME
          </li>
        </Link>
        <ul>
          <li>
            <a href="https://github.com/karimould" title="to github page" rel="noopener noreferrer" target="_blank">
              GITHUB
            </a>
          </li>
          <li>
            <a href="https://twitter.com/krimould" title="to twitter profil" rel="noopener noreferrer" target="_blank">
              TWITTER
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/karim-ould-mahieddine-08aa02149"
              title="to linkedin profil"
              rel="noopener noreferrer"
              target="_blank"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              href="https://www.xing.com/profile/Karim_OuldMahieddine/cv"
              title="to xing profil"
              rel="noopener noreferrer"
              target="_blank"
            >
              XING
            </a>
          </li>
        </ul>
        {/* <Link to="/">
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
        </Link> */}
      </ul>
    </div>
  )
}

export default Menu
