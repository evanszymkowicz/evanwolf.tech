import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import ProfileContent from '../components/ProfileContent'

const profileQuery = graphql`
  query ProfileQuery {
    jobs: allJobsJson {
      edges {
        job: node {
          company,
          position,
          year
        }
      }
    }
    projects: allProjectsJson {
      edges {
        project: node {
          title,
          year,
          url
        }
      }
    }
  }
`

export default ({ location }) =>
  <StaticQuery 
    query={profileQuery}
    render={data => 
      <Layout location={location}>
        <ProfileContent data={data}/>
      </Layout>
    }
  />
