import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import JobListItem from '../JobListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection, SkillsList } from './style'

export default ({ data }) => {
  const { jobs, skills } = data
  
  return (
      <ContentWrapper>
        <Head 
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection 
          content={() => (
            <>            
              <p>I focus on building, launching and fixing web applications.{' '}</p>
              <p>Yes, I am currently looking for new work.{' '}</p>
              <p> <a href="https://github.com/evanszymkowicz" target="_blank" rel="noopener noreferrer">See what I am working on </a>or contact me to learn more.
            </p>
          </>
        )}
        />
        <ListsSection>
          {jobs.edges.length > 0 && (
            <ProfileList 
              title='Experience' 
              list={() => jobs.edges.map(({ job }, i) => ( 
                <JobListItem
                  key={i} 
                  {...job}
                />
                  ))}
            />
          )}
          { skills.edges.length > 0 && (
            <SkillsList 
              title='Technology' 
              list={() => skills.edges.map(({ skill }, i) => (
                <ProfileListItem 
                  key={i} 
                  {...skill}
                />
                )
                )}
            />
          )}
        </ListsSection>
      </ContentWrapper>
      )
    }