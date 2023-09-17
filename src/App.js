import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MeetupContext from './context/MeetupContext'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    isUserLogin: false,
    userName: '',
    selectedTopicId: topicsList[0].id,
    topicsListDetails: topicsList,
  }

  changeName = event => {
    this.setState({userName: event.target.value})
  }

  selectTopicId = event => {
    this.setState({selectedTopicId: event.target.value})
  }

  toggleUserLogin = () => {
    this.setState(prevState => ({isUserLogin: !prevState.isUserLogin}))
  }

  render() {
    const {
      isUserLogin,
      userName,
      selectedTopicId,
      topicsListDetails,
    } = this.state
    return (
      <MeetupContext.Provider
        value={{
          isUserLogin,
          userName,
          selectedTopicId,
          changeName: this.changeName,
          selectTopicId: this.selectTopicId,
          toggleUserLogin: this.toggleUserLogin,
          topicsListDetails,
        }}
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}
export default App
