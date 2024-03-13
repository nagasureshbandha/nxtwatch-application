import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ModalDesc,
  LogoLink,
  NavBarHeader,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  LogOutIconButton,
  LogOutButton,
  ProfileImg,
  ModelContainer,
  CloseButton,
  ConfirmButton,
  ButtonContainer,
} from './styledComponent'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#fff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogOut = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavBarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionsContainer>
            <ThemeButton
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#fff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>

            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogOutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogOutButton>
              }
            >
              {close => (
                <ModelContainer>
                  <ModalDesc> Are you sure, you want to logout</ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogOut}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ModelContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogOutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogOutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModelContainer>
                  <ModalDesc> Are you sure, you want to logout</ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogOut}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ModelContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavBarHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
