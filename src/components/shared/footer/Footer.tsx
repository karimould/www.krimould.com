import React from 'react'

interface FooterProps {
  locale: string
  path?: string
}

const Footer = ({ locale, path }: FooterProps): JSX.Element => {
  return (
    <footer className="container-normal border-t-2 border-black">
      <div className="flex mt-6">
        <div className="w-2/6">
          <ul>
            <li>
              <a href="www.krimould.com" title="to github page">
                GITHUB
              </a>
            </li>
            <li>
              <a href="www.krimould.com" title="to github page">
                TWITTER
              </a>
            </li>
            <li>
              <a href="www.krimould.com" title="to github page">
                INSTAGRAM
              </a>
            </li>
            <li>
              <a href="www.krimould.com" title="to github page">
                EMAIL
              </a>
            </li>
          </ul>
        </div>
        <div className="w-2/6">
          <h1>KARIM</h1>
        </div>
        <div className="w-2/6">
          <h1>KARIM</h1>
        </div>
        <div className="w-2/6">
          <h1>KARIM</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
