import React from 'react'
import './vim.scss'

interface VimProps {
  locale: string
  black?: boolean
}

const Vim = ({ locale, black }: VimProps): JSX.Element => {
  return (
    <div className="container-normal">
      <div className={`p-3 ${black ? 'text-white bg-black' : ''} font-mono rounded-lg`}>
        <div className="flex flex-row">
          <div className="w-4 h-4 bg-red-600 mr-2 rounded-full" />
          <div className="w-4 h-4 bg-gray-600 mr-2 rounded-full" />
          <div className="w-4 h-4 bg-green-600 mr-2 rounded-full" />
        </div>
        <div className="terminal mt-5">
          HI IAM KARIM OULD MAHIEDDINE.
          <br />
          IAM A FULLSTACK DEVELOPER, CURRENTLY BASED IN BERLIN.
          <br />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          <br />
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          <br />
          At vero eos et accusam et justo duo dolores et ea rebum.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          “about.txt” 7L, 229C
        </div>
      </div>
    </div>
  )
}

export default Vim
