import {Component} from 'react'
import Header from '../Header'
import {
  HomeContainer,
  HomeImage,
  HomeContent,
  LoginHeading,
  LoginDescription,
  RegisterButton,
  RegisterHeading,
  RegisterDescription,
  NavLink,
} from './styledComponents'
import MeetupContext from '../../context/MeetupContext'

class Home extends Component {
  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {
            isUserLogin,
            topicsListDetails,
            userName,
            selectedTopicId,
          } = value

          const topic =
            topicsListDetails[
              topicsListDetails.findIndex(
                eachTopic => eachTopic.id === selectedTopicId,
              )
            ].displayText

          return (
            <>
              <Header />
              <HomeContainer>
                {isUserLogin ? (
                  <HomeContent>
                    <LoginHeading>Hello {userName}</LoginHeading>
                    <LoginDescription>{topic}</LoginDescription>
                  </HomeContent>
                ) : (
                  <HomeContent>
                    <RegisterHeading>Welcome to Meetup</RegisterHeading>
                    <RegisterDescription>
                      Please register for the topic
                    </RegisterDescription>
                    <NavLink to="/register">
                      <RegisterButton type="button">Register</RegisterButton>
                    </NavLink>
                  </HomeContent>
                )}
                <HomeImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Home
