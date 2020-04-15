import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import FeaturedContent from '../components/FeaturedContent'

const featuredQuery = graphql `
  query allWorksJson {
    works: allWorksJson {
    edges {
      work: node {
        title,
        category,
        client,
        year,
        url,
        featured,
        image {
          src
          sources {
            media
            srcset
         }
          }
        }
      }
    }
  }
`
export default({location}) => <Layout location={location}>
	<StaticQuery query={featuredQuery} render={data => <FeaturedContent data={data}/>}/>
</Layout>