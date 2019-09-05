import React from 'react'
import Image from '../../util/image/Image'

interface ProjectProps {
  title: string
  link: string
  tags: string[]
}

const Project = ({ title, link, tags }: ProjectPros): JSX.Element => {
  return (
    <div className="w-2/6 bg-black text-white p-5 mr-5">
      <div className="float-right os-img">
        <a title="code on github" href={link} rel="noopener noreferrer" target="_blank">
          <Image alt="github logo" imageName="github.png" maxWidth={25} />
        </a>
      </div>
      <div className="word-break mt-16 min-height">
        <h4>{title}</h4>
      </div>
      <div className="flex mt-10">
        {tags.map(
          (tag, index): JSX.Element => (
            <p key={index} className="mr-5">
              {tag}
            </p>
          ),
        )}
      </div>
    </div>
  )
}

export default Project
