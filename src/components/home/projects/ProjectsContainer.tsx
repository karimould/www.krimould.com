import React, { useState } from 'react'
import Project from './Project'
import handleXScroll from '../../../hooks/xScroll'
import './projects.scss'

interface ProjectProps {
  locale: string
  projects: {
    edges: {
      project: Project[]
    }
  }
}

interface Project {
  node: {
    frontmatter: {
      title: string
      order: number
      img?: string
      link?: string
      tags: string[]
    }
  }
}

const ProjectsContainer = ({ locale, projects }: ProjectProps): JSX.Element => {
  const [activeProject, changeActiveProject] = useState(0)
  const elems: JSX.Element[] = []

  projects.edges.sort((a: Project, b: Project): number => {
    return a.node.frontmatter.order - b.node.frontmatter.order
  })

  projects.edges.map((p: Project, index: number): void => {
    const { frontmatter: project } = p.node
    elems.push(<Project locale={locale} index={index} project={project} />)
  })

  const getActiveItemCSS = (key: number): string => {
    return key === activeProject
      ? 'p-5 bg-black text-white mr-20 tracking-widest uppercase'
      : 'p-5 mr-20 tracking-widest uppercase'
  }

  return (
    <div className="container-normal">
      <div className="relative">
        <div id="projects-scroll" className="projects-nav overflow-x-auto flex">
          {projects.edges.map(
            (item: Project, index: number): JSX.Element => (
              <button onClick={(): void => changeActiveProject(index)} className={getActiveItemCSS(index)}>
                {item.node.frontmatter.title}
              </button>
            ),
          )}
        </div>
        <button onClick={(): void => handleXScroll('projects-scroll')} className="float-right text-3xl md:hidden">
          →
        </button>
        {elems[activeProject]}
      </div>
    </div>
  )
}

export default ProjectsContainer
