import React, { Component } from 'react'
import idx from 'idx'
import { ContentWrapper } from '../../style/shared'
import ProjectsListSection from '../ProjectsListSection'
import ProjectsFeaturedSection from '../ProjectsFeaturedSection'
import Head from '../Head'
import { META } from '../../utils/constants'

export default class extends Component {
  constructor() {
    super()
    this.state = { category: null }
    this.setCategory = this.setCategory.bind(this)
  }

  setCategory(category) {
    this.setState({ category })
  }

  getData() {
    const { data } = this.props
    return idx(data, _ => _.projects.edges) 
  }

  getProjects() {  
    const { category } = this.state
    const projects = this.getData()
    
    return projects && 
      projects.filter(({ project }) =>
        category 
          ? !project.featured && project.category.includes(category)
          : !project.featured
      )
  }
  
  getFeaturedProjects() {
    const projects = this.getData()
    return projects && projects.filter(({ project }) => project.featured)
  }

  render() {
    const { category } = this.state

    return (
      <ContentWrapper>
        <Head 
          {...META.projects}
          image={META.common.image}
        />
        <ProjectsFeaturedSection projects={this.getFeaturedProjects()} />
        <ProjectsListSection 
          projects={this.getProjects()} 
          category={category}
          setCategory={this.setCategory} 
        />
      </ContentWrapper> 
    )
  }
}
