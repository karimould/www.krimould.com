import React, { useState } from 'react'
import Project from './Project'
import './projects.scss'

interface ProjectProps {
  locale: string
}

const ProjectsContainer = ({ locale }: ProjectProps): JSX.Element => {
  const [activeProject, changeActiveProject] = useState(0)

  const elems = []

  for (var i = 0; i < 6; i++) {
    elems.push(<Project locale={locale} index={i} />)
  }

  const getActiveItemCSS = (key: number): string => {
    return key === activeProject ? 'p-5 bg-black text-white mr-20 tracking-widest' : 'p-5 mr-20 tracking-widest'
  }

  return (
    <div className="container-normal">
      <div className="relative">
        <div className="projects-nav overflow-x-auto flex">
          <button onClick={(): void => changeActiveProject(0)} className={getActiveItemCSS(0)}>
            OTHER
          </button>
          <button onClick={(): void => changeActiveProject(1)} className={getActiveItemCSS(1)}>
            HALBERG
          </button>
          <button onClick={(): void => changeActiveProject(2)} className={getActiveItemCSS(2)}>
            SELVII
          </button>
          <button onClick={(): void => changeActiveProject(3)} className={getActiveItemCSS(3)}>
            FABER
          </button>
          <button onClick={(): void => changeActiveProject(4)} className={getActiveItemCSS(4)}>
            IMMAJUNG
          </button>
          <button onClick={(): void => changeActiveProject(5)} className={getActiveItemCSS(5)}>
            IKS-HANNOVER
          </button>
        </div>
        {elems[activeProject]}
      </div>
    </div>
  )
}

export default ProjectsContainer
