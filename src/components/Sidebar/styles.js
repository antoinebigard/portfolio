import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'
import { Link } from 'react-router-dom';

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`

export const StyledLink = styled(Link)`
background-color: #e5e0df;
color: #171414;
font-size: 0.60rem !important;
font-weight: 400 !important;
line-height: 1rem;
letter-spacing: 0.32px;
display: inline-flex !important;
align-items: center !important;
padding: 0 0.5rem;
height: 1.2rem;
max-width: 100%;
margin: 0.25rem;
border-radius: 0.9375rem;


&:hover {
  background-color: #e5e0df !important;
}

& > span {
  color: #171414 !important;
}
`