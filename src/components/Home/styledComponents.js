import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeImage = styled.img`
  width: 100%;
  max-width: 700px;
  margin-top: 50px;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginHeading = styled.h1`
  font-size: 32px;
  color: #7b8794;
  margin: 0px;
  padding: 0px;
`

export const LoginDescription = styled.p`
  font-size: 24px;
  color: #7b8794;
  margin: 0px;
  padding: 0px;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
`

export const RegisterHeading = styled.h1`
  font-size: 32px;
  color: #7b8794;
  margin: 10px;
  padding: 0px;
`
export const RegisterDescription = styled.p`
  font-size: 24px;
  color: #7b8794;
  margin: 10px;
  padding: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
