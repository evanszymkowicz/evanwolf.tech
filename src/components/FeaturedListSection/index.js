import React from 'react'
import FeaturedListItem from '../FeaturedListItem'
import {
	Wrapper,
	FeaturedTitle,
	ButtonsWrapper,
	FilterButton,
	NDAWrapper,
	StyledDivider,
	StyledEmailMe
} from './style'

const FeaturedListSection = ({works, category, setCategory}) => <Wrapper>
	<header>

		<FeaturedTitle>Other work</FeaturedTitle>
		<ButtonsWrapper>
			<FilterButton active={category === 'website'} onClick={() => setCategory('website')}>website</FilterButton>
			<FilterButton active={category === 'code'} onClick={() => setCategory('code')}>code</FilterButton>
			<FilterButton active={category === 'email'} onClick={() => setCategory('email')}>marketing</FilterButton>
			{category && <FilterButton onClick={() => setCategory(null)}>all</FilterButton>}
		</ButtonsWrapper>
	</header>

	<main>
		{
			works.map(({
				work
			}, i) => <FeaturedListItem key={i} work={work}/>)
		}
	</main>
	<NDAWrapper>
		<StyledDivider height={6} width={43}/>
		<h2>Interested to Know More?</h2>
		<StyledEmailMe text='Email Me'/>
	</NDAWrapper>
</Wrapper>

export default FeaturedListSection
