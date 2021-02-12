import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import ProfileContent from '../components/ProfileContent'

const profileQuery = graphql`
  query ProfileQuery {
    clients: allClientsJson {
      edges {
        client: node {
          name
        }
      }
    }
    events: allEventsJson {
      edges {
        event: node {
          year
          position
          company
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
