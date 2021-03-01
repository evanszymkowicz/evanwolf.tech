import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      Evan Szymkowicz <a></a>{getCurrentYear()}
    </Item>
  </Wrapper>

export default Footer
