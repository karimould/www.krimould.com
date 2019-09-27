import React from 'react'

interface ListProps {
  heading: string
  techList: string[]
}

const List = ({ heading, techList }: ListProps): JSX.Element => {
  return (
    <div className="mt-5 w-6/12 md:w-1/5">
      <h3 className="font-extrabold tracking-widest">{heading}</h3>
      <ul>
        {techList.map(
          (tech, index): JSX.Element => (
            <li className="mt-2" key={index}>
              {tech}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

export default List
