import {Navbar, WebsiteLogo, PathLink} from './styledComponents'

const Header = () => (
  <Navbar>
    <PathLink to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </PathLink>
  </Navbar>
)

export default Header
