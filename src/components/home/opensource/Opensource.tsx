import React from 'react'
import Project from './Project'

import './opensource.scss'

interface OpensourceProps {
  projects: ProjectProps[]
}

interface ProjectProps {
  title: string
  link: string
  tags: string[]
}

const OpensourceContainer = ({ projects }: OpensourceProps): JSX.Element => {
  return (
    <div className="container-normal flex">
      {projects.map(
        (tag, index): JSX.Element => (
          <Project
            key={index}
            title={tag.node.frontmatter.title}
            link={tag.node.frontmatter.link}
            tags={tag.node.frontmatter.tags}
          />
        ),
      )}
    </div>
  )
}

export default OpensourceContainer
