import React from "react";
import {StaticQuery, graphql} from "gatsby";
import Layout from "../components/layout";
import AboutContent from "../components/AboutContent";

const aboutQuery = graphql `
  query AboutQuery {
    skills: allSkillsJson {
      edges {
        skill: node {
          name,
          url
        }
      }
    }
    jobs: allJobsJson {
      edges {
        job: node {
          title,
          company,
          year
        }
      }
    }
  }
`;

export default({location}) => <StaticQuery query={aboutQuery} render={data => <Layout location={location}>
		<AboutContent data={data}/>
	</Layout>}/>