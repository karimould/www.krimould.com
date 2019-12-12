import React from 'react'

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
            {/* <li>
              <a href="www.krimould.com" title="to github page">
                BLOG
              </a>
            </li>
            <li>
              <a href="www.krimould.com" title="to github page">
                DIGITAL-GARDEN
              </a>
            </li> */}
            <li>
              <a href="www.krimould.com" title="to imprint page" rel="noopener noreferrer" target="_blank">
                IMPRINT
              </a>
            </li>
            <li>
              <a href="www.krimould.com" title="to pricacy page" rel="noopener noreferrer" target="_blank">
                PRIVACY
              </a>
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
