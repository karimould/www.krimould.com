import React, { ReactChild } from 'react'
import './vim.scss'

interface VimProps {
  black?: boolean
  children: ReactChild
}

const Vim = ({ black, children }: VimProps): JSX.Element => {
  /*ToDo
   * Fix interface to match the props
   */
  let chars: number = children.props.children.length
  let lines: number = (children.props.children.match(/\n/g) || []).length
  return (
    <div className="container-normal">
      <div className={`p-3 ${black ? 'text-white bg-black' : ''} font-mono rounded-lg`}>
        <div className="flex flex-row">
          <div className="w-4 h-4 bg-red-600 mr-2 rounded-full" />
          <div className="w-4 h-4 bg-gray-600 mr-2 rounded-full" />
          <div className="w-4 h-4 bg-green-600 mr-2 rounded-full" />
        </div>
        <div className="terminal mt-5 whitespace-pre-line">
          {children}
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          <p>~</p>
          “about.txt” {lines}L, {chars}C
        </div>
      </div>
    </div>
  )
}

export default Vim
