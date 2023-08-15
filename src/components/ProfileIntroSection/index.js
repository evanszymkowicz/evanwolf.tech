import React from 'react'
import Intro from '../Intro'
import { Wrapper, InfoWrapper, Content, StyledImage } from './style'
import { Loader } from '../../style/shared'

const ProfileIntroSection = ({ content }) => 
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledImage 
      src="/images/profile/evan-szymkowicz.jpeg"
      alt="Evan Szymkowicz - Application Developer"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/evan-szymkowicz.jpeg'
        ]
      },{
        srcset: [
          '/images/profile/evan-szymkowicz.jpeg',
          '/images/profile/evan-szymkowicz.jpeg',
          '/images/profile/evan-szymkowicz.jpeg'
        ]       
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
