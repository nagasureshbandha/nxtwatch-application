import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  HomeNavbar,
  FooterIconsContainer,
  FooterSection,
  FooterTitle,
  FooterDescription,
  SocialMediaImage,
  NavButton,
  HomeOption,
  GamingOption,
  SavedVideosOption,
  TrendingOption,
  HomeOptionText,
  GamingOptionText,
  PlaylistOptionText,
  TrendingOptionText,
} from './styledComponents'

const NavigationBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, selectedTab, onChangeTab} = value
      const IconColor = isDarkTheme ? '#f9f9f9' : '#181818'
      return (
        <HomeNavbar darkTheme={isDarkTheme}>
          <Link to="/" className="nav-link">
            <NavButton
              onClick={() => {
                onChangeTab('HOME')
              }}
              type="button"
            >
              <HomeOption selectedTab={selectedTab} darkTheme={isDarkTheme}>
                <AiFillHome
                  fontSize={30}
                  color={selectedTab === 'HOME' ? '#ff0000' : IconColor}
                />
                <HomeOptionText
                  selectedTab={selectedTab}
                  darkTheme={isDarkTheme}
                >
                  Home
                </HomeOptionText>
              </HomeOption>
            </NavButton>
          </Link>
          <Link to="/trending" className="nav-link">
            <NavButton
              onClick={() => {
                onChangeTab('TRENDING')
              }}
              type="button"
            >
              <TrendingOption selectedTab={selectedTab} darkTheme={isDarkTheme}>
                <HiFire
                  color={selectedTab === 'TRENDING' ? '#ff0000' : IconColor}
                  fontSize={30}
                />
                <TrendingOptionText
                  selectedTab={selectedTab}
                  darkTheme={isDarkTheme}
                >
                  Trending
                </TrendingOptionText>
              </TrendingOption>
            </NavButton>
          </Link>
          <Link to="/gaming" className="nav-link">
            <NavButton
              onClick={() => {
                onChangeTab('GAMING')
              }}
              type="button"
            >
              <GamingOption selectedTab={selectedTab} darkTheme={isDarkTheme}>
                <SiYoutubegaming
                  color={selectedTab === 'GAMING' ? '#ff0000' : IconColor}
                  fontSize={30}
                />
                <GamingOptionText
                  selectedTab={selectedTab}
                  darkTheme={isDarkTheme}
                >
                  Gaming
                </GamingOptionText>
              </GamingOption>
            </NavButton>
          </Link>
          <Link to="/saved-videos" className="nav-link">
            <NavButton
              onClick={() => {
                onChangeTab('PLAYLIST')
              }}
              type="button"
            >
              <SavedVideosOption
                selectedTab={selectedTab}
                darkTheme={isDarkTheme}
              >
                <MdPlaylistAdd
                  color={selectedTab === 'PLAYLIST' ? '#ff0000' : IconColor}
                  fontSize={30}
                />
                <PlaylistOptionText
                  selectedTab={selectedTab}
                  darkTheme={isDarkTheme}
                >
                  Saved Videos
                </PlaylistOptionText>
              </SavedVideosOption>
            </NavButton>
          </Link>

          <FooterSection>
            <FooterTitle darkTheme={isDarkTheme}>CONTACT US</FooterTitle>
            <FooterIconsContainer>
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FooterIconsContainer>
            <FooterDescription darkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </FooterSection>
        </HomeNavbar>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NavigationBar
