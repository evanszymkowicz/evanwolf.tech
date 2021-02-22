import React from 'react'
import { ListItem } from '../../style/shared'
import { Wrapper, Position } from './style'

const JobListItem = ({ year, title, company }) =>
  <ListItem>
    <Wrapper>
      <div className="position"><Position>{title}</Position> at <span>{company}</span></div>
      <div className="year">{year}</div>
    </Wrapper>
  </ListItem>

export default JobListItem
