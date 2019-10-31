import React, { useState } from 'react'
import './projects.scss'
import Image from '../../util/image/Image'
import { i18n } from '../../../constants/i18n'

interface ProjectProps {
  locale: string
  index?: number
  project: {
    title: string
    order: number
    img?: string
    link?: string
    tags: string[]
  }
}

interface FirstProjectProps {
  locale: string
}

const ProjectContainer = ({ locale, index, project }: ProjectProps): JSX.Element => {
  return index === 0 ? <FirstProject locale={locale} /> : <Project locale={locale} project={project} />
}

const FirstProject = ({ locale }: FirstProjectProps): JSX.Element => {
  return (
    <div className="project w-64 mt-12 mx-auto">
      <p>{i18n[locale].firstProject}</p>
    </div>
  )
}

const Project = ({ project }: ProjectProps): JSX.Element => {
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
      {project.img ? <Image center className="mx-auto" imageName={project.img} maxWidth={1000} /> : null}
      <div
        style={{ opacity: opacityDesc }}
        className="md:absolute w-64 p-5 bg-white word-break top-0 left-0 md:mt-64 md:ml-14"
      >
        {project.tags.map(
          (tag: string): JSX.Element => (
            <p>{tag}</p>
          ),
        )}
      </div>
      <div className="flex justify-center">
        {/* <div style={{ opacity: opacityLink }} className="bg-black text-white text-center p-5 w-40">
          <p>MORE INFOS</p>
        </div> */}
        {project.link ? (
          <div style={{ opacity: opacityLink }} className="bg-black text-white text-center p-5 w-40">
            <a title="visit site" target="_blank" href={project.link}>
              VISIT SITE
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ProjectContainer
