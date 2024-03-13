import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`

export const NoVideosImg = styled.img`
  width: 260px;
  height: 180px;
`

export const NoVideosHeading = styled.h1`
  font-size: 24px;
  line-height: 1.33;
  color: ${props => props.headingColor};
  margin-top: 24px;
`

export const NoVideosNote = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.noteColor};
  margin-top: 16px;
`

export const RetryButton = styled.button`
  background-color: #f48c06;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.5;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e85d04;
  }
`

export const VideoCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
`
