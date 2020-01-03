import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'
import Tag from 'carbon-components-react/lib/components/Tag'

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`

export const StyledTag = styled(Tag)`
  cursor: pointer;
`
