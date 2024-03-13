import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import TrendingVideos from './components/TrendingVideos'
import NotFound from './components/NotFound'
import VideoDetailsView from './components/VideoDetailsView'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], activeTab: 'Home'}

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(eachVideo => eachVideo.id !== id)
    this.setState({savedVideos: updatedVideos})
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path='/login' component={LoginForm} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute
            exact
            path='/videos/:id'
            component={VideoDetailsView}
          />
          <ProtectedRoute exact path='/trending' component={TrendingVideos} />
          <ProtectedRoute exact path='/gaming' component={GamingVideos} />
          <ProtectedRoute exact path='/saved-videos' component={SavedVideos} />
          <Route path='/not-found' component={NotFound} />
          <Redirect to='not-found' />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
