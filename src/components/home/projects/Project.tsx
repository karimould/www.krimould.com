import React, { useState } from 'react'
import './projects.scss'
import Image from '../../util/image/Image'

interface ProjectProps {
  locale: string
  index?: number
}

const ProjectContainer = ({ locale, index }: ProjectProps): JSX.Element => {
  return index === 0 ? <FirstProject locale={locale} /> : <Project locale={locale} />
}

const FirstProject = ({ locale }: ProjectProps): JSX.Element => {
  return (
    <div className="project w-64 mt-12 mx-auto">
      <p>
        DUE TO CLIENT NDA’S, I’M NOT ABLE TO PUBLICLY DISPLAY ALL OF MY WORK. IF YOU WOULD LIKE TO SEE ALL PROJECTS I
        WORKED ON, FEEL FREE TO CONTACT ME.
      </p>
    </div>
  )
}

const Project = ({ locale }: ProjectProps): JSX.Element => {
  const [opacityDesc, setOpacityDesc] = useState(0)
  const [opacityLink, setOpacityLink] = useState(0)

  setTimeout(function(): void {
    setOpacityDesc(1)
  }, 500)
  setTimeout(function(): void {
    setOpacityLink(1)
  }, 1000)

  return (
    <div className="project mt-12 w-10/12 mx-auto">
      <Image center className="mx-auto" imageName="test.png" maxWidth={1000} />
      <div
        style={{ opacity: opacityDesc }}
        className="md:absolute w-64 p-5 bg-white word-break top-0 left-0 md:mt-64 md:ml-14"
      >
        <p>TECHNOLOGIES: REACT GATSBYJS NETLIFYCMS SNIPCART SERVERLESS FUNCTIONS</p>
      </div>
      <div className="flex justify-center">
        {/* <div style={{ opacity: opacityLink }} className="bg-black text-white text-center p-5 w-40">
          <p>MORE INFOS</p>
        </div> */}
        <div style={{ opacity: opacityLink }} className="bg-black text-white text-center p-5 w-40">
          <p>VISIT SITE</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
