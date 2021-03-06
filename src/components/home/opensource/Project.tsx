import React from 'react'
import Image from '../../util/image/Image'

interface ProjectProps {
  title: string
  link: string
  tags: string[]
}

const Project = ({ title, link, tags }: ProjectProps): JSX.Element => {
  return (
    <div className="md:w-2/6 bg-black text-white p-5 md:mr-5 mt-5">
      <div className="float-right os-img">
        <a title="code on github" href={link} rel="noopener noreferrer" target="_blank">
          <Image imageName="github.png" maxWidth={25} />
        </a>
      </div>
      <div className="word-break mt-16 min-height">
        <h4>{title}</h4>
      </div>
      <div className="flex flex-wrap mt-10">
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
