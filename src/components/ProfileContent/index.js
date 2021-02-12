import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection } from './style'

export default ({ data }) => {
  const { events, mentions, } = data
  
  return (
      <ContentWrapper>
        <Head 
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection 
          content={() =>
            <>            
              <p>I focus on building, fixing and implementing websites.{' '}</p>
              <p>Yes, I am currently looking for new work.{' '}</p>
              <p> <a href="https://github.com/evanszymkowicz" target="_blank" rel="noopener noreferrer">See what I am working on</a> <a href = "https://evan.szymkowicz@evanwolf.tech" target = "_blank" rel = "noopener noreferrer" > or contact me to learn more</a>.
              </p>
	<
  />
  }
  />
      
        <ListsSection>
          {events.edges.length > 0 && 
            <ProfileList 
              title='Background'
              list={() => events.edges.map(({ event }, i) => (
                <EventListItem 
                  key={i}
                  {...event}
                />
              ))}
            />}
          
          {mentions.edges.length > 0 && 
            <ProfileList 
              title='Featured on'
              list={() => mentions.edges.map(({ mention }, i) => (
                <ProfileListItem 
                  key={i}
                  {...mention}
                />
              ))}
            />}
        </ListsSection>
      </ContentWrapper>
  )
}
