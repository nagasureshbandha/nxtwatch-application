import Header from '../Header'
import NavigationBar from '../NavigationBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NotFoundContainer,
  NotFoundVideosViewContainer,
  NotFoundVideosImage,
  NotFoundVideosTitle,
  NotFoundVideosDescription,
} from './styledComponent'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <NotFoundContainer>
            <Header />
            <NavigationBar />
            <NotFoundVideosViewContainer darkTheme={isDarkTheme}>
              <NotFoundVideosImage src={notFoundImgUrl} alt="not found" />
              <NotFoundVideosTitle darkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundVideosTitle>
              <NotFoundVideosDescription darkTheme={isDarkTheme}>
                we are sorry, the page you requested could not be found
              </NotFoundVideosDescription>
            </NotFoundVideosViewContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
