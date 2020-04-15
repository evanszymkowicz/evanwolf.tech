import React from 'react'
import {ListItem} from '../../style/shared'
import {Wrapper, Title} from './style'

const JobListItem = ({year, title, company}) => <ListItem>
	<Wrapper>
		<div className="title">
			<Title>{title}</Title>
			at
			<span>{company}</span>
		</div>
		<div className="year">{year}</div>
	</Wrapper>
</ListItem>

export default JobListItem

// const JobListItem = ({year, title, company}) => <ListItem>
// 	<Wrapper>
// 		<div className="position">
// 			<Position>{title}</Position>at<span>{company}</span>
// 		</div>
// 		<div className="year">{year}</div>
// 	</Wrapper>
// </ListItem>
//
// export default JobListItem