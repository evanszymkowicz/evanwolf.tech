import styled from 'styled-components'
import { colors } from '../../style/constants'

export const ListTitle = styled.h2`
  color: #E4E6EC;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;

  &::after {
    content: '';
    width: 1rem;
    height: 1px;
    background: ${colors.darkBlue};
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
  }
`
