import React from 'react'
import WorksListItem from '../WorksListItem'
import { Wrapper, WorksTitle, ButtonsWrapper, FilterButton, NDAWrapper, StyledDivider, StyledEmailMe } from './style'

const WorksListSection = ({ 
  works, 
  category, 
  setCategory 
}) => 
  <Wrapper>
    <header>
      <WorksTitle>Other works</WorksTitle>
      <ButtonsWrapper>
        <FilterButton active={category === 'design'} onClick={() => setCategory('design')}>design</FilterButton>
        <FilterButton active={category === 'code'} onClick={() => setCategory('code')}>code</FilterButton>
        {category && <FilterButton onClick={() => setCategory(null)}>all</FilterButton>}
      </ButtonsWrapper>
    </header>
    <main>
      {works.map(({ work }, i) => <WorksListItem key={i} work={work} />)}
    </main>
    <NDAWrapper>
      <StyledDivider height={6} width={43} />
      <h2>Interested in knowing more?</h2>
      <StyledEmailMe text='Email me' />
    </NDAWrapper>
  </Wrapper>

export default WorksListSection
