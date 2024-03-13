import styled from 'styled-components'

export const NavBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.bgColor};

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
`

export const LogOutButton = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoLink = styled.a`
  text-decoration: none;
`

export const HeaderLogo = styled.img`
  height: 40px;
`

export const ProfileImg = styled.img`
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`

export const LogOutIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ModelContainer = styled.div`
  padding: 1rem;
  text-align: center;
`

export const CloseButton = styled.button`
  background-color: #ccc;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-right: 0.5rem;
`

export const ConfirmButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  margin-top: 1rem;
`

export const ModalDesc = styled.p`
  margin-bottom: 1rem;
`

// Add any additional styled components you need here
