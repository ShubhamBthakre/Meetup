import {Component} from 'react'
import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'
import {
  RegisterContainer,
  ContentContainer,
  Image,
  FormData,
  FormHeading,
  InputContainer,
  Label,
  Input,
  Select,
  Option,
  RegisterButton,
  ErrorText,
} from './styledComponents'

class Register extends Component {
  state = {isShowError: false}

  render() {
    const {isShowError} = this.state
    return (
      <MeetupContext.Consumer>
        {value => {
          const {
            userName,
            selectedTopicId,
            changeName,
            selectTopicId,
            toggleUserLogin,
            topicsListDetails,
          } = value

          const onSubmitForm = event => {
            event.preventDefault()

            if (userName === '') {
              this.setState({
                isShowError: true,
              })
            } else {
              toggleUserLogin()
              const {history} = this.props
              history.replace('/')
            }
          }

          const onChangeName = event => {
            changeName(event)
          }

          const onSelectTopicId = event => {
            selectTopicId(event)
          }

          return (
            <>
              <Header />
              <RegisterContainer>
                <ContentContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                    alt="website register"
                  />
                  <FormData onSubmit={onSubmitForm}>
                    <FormHeading>Let us join</FormHeading>
                    <InputContainer>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Name"
                        value={userName}
                        onChange={onChangeName}
                      />
                    </InputContainer>

                    <InputContainer>
                      <Label htmlFor="option">Topics</Label>
                      <Select
                        id="option"
                        value={selectedTopicId}
                        onChange={onSelectTopicId}
                      >
                        {topicsListDetails.map(topic => (
                          <Option id={topic.id} key={topic.id} value={topic.id}>
                            {topic.displayText}
                          </Option>
                        ))}
                      </Select>
                    </InputContainer>
                    <RegisterButton type="submit">Register Now</RegisterButton>
                    {isShowError && (
                      <ErrorText>Please enter your name</ErrorText>
                    )}
                  </FormData>
                </ContentContainer>
              </RegisterContainer>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
