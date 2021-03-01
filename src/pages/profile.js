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
    skills: allSkillsJson {
      edges {
        skill: node {
          name,
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
