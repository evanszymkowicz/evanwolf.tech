import React from 'react'
import {ListItem} from '../../style/shared'

const SkillsListItem = ({name, url}) => <ListItem>
	{
		name
			? <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
			: url
	}
</ListItem>

export default SkillsListItem
