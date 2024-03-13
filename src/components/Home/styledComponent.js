import styled from 'styled-components'

const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 24px;
`

const BannerContainer = styled.div`
  display: ${props => props.display};
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 4px;
  background-color: #f0f0f0;
`

const BannerImage = styled.img`
  width: 100px;
  height: 100px;
`

const BannerText = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
`

const BannerButton = styled.button`
  background-color: #0b69ff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const BannerLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const BannerRightPart = styled.div`
  display: flex;
  align-items: center;
`

const BannerColseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const SearchIconContainer = styled.div`
  padding: 8px;
  background-color: #0b69ff;
  color: #fff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

export {
  HomeContainer,
  BannerContainer,
  BannerImage,
  BannerText,
  BannerButton,
  BannerLeftPart,
  BannerRightPart,
  BannerColseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
}
