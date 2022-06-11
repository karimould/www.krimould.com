import React from 'react'
import { Link } from 'gatsby'

const Footer = (): JSX.Element => {
  return (
    <footer className="container-normal border-t-2 border-black">
      <div className="flex flex-wrap mt-6 mb-6">
        <div className="w-full mt-3 md:w-2/6">
          <ul>
            <li>
              <a href="https://github.com/karimould" title="to github page" rel="noopener noreferrer" target="_blank">
                GITHUB
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/krimould"
                title="to twitter profil"
                rel="noopener noreferrer"
                target="_blank"
              >
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
        </div>
        <div className="w-full mt-3 md:w-2/6">
          <ul>
            <li>
              <a href="https://blog.karimould.dev" 
                title="link to my blog" 
                rel="noopener noreferrer"
                target="_blank">
                BLOG
              </a>
            </li>
            <li>
              <a href="https://wiki.karimould.dev" 
                title="link to my wiki"
                rel="noopener noreferrer"
                target="_blank">
                KNOWLEDGE BASE
              </a>
            </li>
            <li>
              <Link to="/" title="to home page" rel="noopener noreferrer" target="_blank">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/imprint" title="to imprint page" rel="noopener noreferrer" target="_blank">
                IMPRINT
              </Link>
            </li>
            <li>
              <Link to="/privacy" title="to pricacy page" rel="noopener noreferrer" target="_blank">
                PRIVACY
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full mt-3 md:w-2/6">
          <ul>
            <li>
              <a
                href="https://github.com/karimould"
                title="to portfolio code"
                rel="noopener noreferrer"
                target="_blank"
              >
                FORK PORTFOLIO
              </a>
            </li>
            <br />
            <li>
              <a href="https://www.immajung.com" title="to immajung page" rel="noopener noreferrer" target="_blank">
                WWW.IMMAJUNG.COM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
