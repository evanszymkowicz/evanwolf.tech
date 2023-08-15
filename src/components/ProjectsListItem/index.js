import React from 'react'
import { Wrapper, ProjectTitle, ProjectInfos, ProjectYear } from './style'

const ProjectsListItem = props =>  {
  const { title, year, url } = props.project

  return (
    <Wrapper hasLink={url !== null}>
      <header>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectInfos>
         
        </ProjectInfos>
      </header>
      <ProjectInfos>
        <ProjectYear>{year}</ProjectYear>
      </ProjectInfos>
      {url && <a href={url} target="_blank" rel="noopener noreferrer">More Information</a>}
    </Wrapper>
  )
}

export default ProjectsListItem
