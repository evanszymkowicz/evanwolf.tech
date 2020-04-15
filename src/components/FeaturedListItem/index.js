import React from 'react'
import {Wrapper, FeaturedTitle, FeaturedInfo, FeaturedYear} from './style'

const FeaturedListItem = props => {
	const {title, client, year, url} = props.work

	return (<Wrapper hasLink={url !== null}>
		<header>
			<FeaturedTitle>{title}</FeaturedTitle>
			<FeaturedInfo>
				<span>{client}
				</span>
			</FeaturedInfo>
		</header>

		<FeaturedInfo>
			<FeaturedYear>{year}</FeaturedYear>
		</FeaturedInfo>
		{url && <a href={url} target="_blank" rel="noopener noreferrer">See More</a>}
	</Wrapper>)
}

export default FeaturedListItem
