import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Wrapper, ProjectFeatured, StyledCarousel, StyledImage } from './style'
import { Loader } from '../../style/shared'

class ProjectsFeaturedSection extends Component {
  constructor() {
    super()
    this.state =  { widthLoaded: false, isMobile: false }
    this.setMobile = this.setMobile.bind(this)
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setMobile()
      window.addEventListener('resize', this.setMobile)
    }
  }

  componentWillUnmount() {
    typeof window !== 'undefined' &&
    window.removeEventListener('resize', this.setMobile);
  }

  setWidthLoaded() {
    this.setState({ widthLoaded: true })
  }

  setMobile() {
    this.setState({ 
      isMobile: window.innerWidth < 480 
    }, () => this.setWidthLoaded())
  }

  renderProjectsList({ project }) {
    const { title, image, url } = project
    return (
      <ProjectFeatured key={title}>
        <StyledImage 
          alt={title} 
          loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
          {...image} 
        />
        {url && <a href={url} target="_blank" rel="noopener noreferrer">More Info</a>}
      </ProjectFeatured>
    )
  }

  renderProjectsWrapper() {
    const { projects } = this.props
    const { isMobile } = this.state
    const projectsList = projects.map(this.renderProjectsList)
    return (
      isMobile 
      ? <StyledCarousel 
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          interval={10000}
          autoPlay
        >
          {projectsList}
        </StyledCarousel>
      : <Wrapper>{projectsList}</Wrapper>
    )
  }

  render() {
    const { widthLoaded } = this.state
    return widthLoaded && this.renderProjectsWrapper()
  }
}

export default ProjectsFeaturedSection