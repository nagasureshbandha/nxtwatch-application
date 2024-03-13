import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
`

export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const SavedTitleIconContainer = styled.div`
  margin-right: 10px;
`

export const SavedText = styled.div`
  font-size: 24px;
  color: ${props => props.color};
`

export const SavedVideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`

export const NoSavedVideoView = styled.div`
  text-align: center;
  margin-top: 50px;
`

export const NoSavedVideosImg = styled.img`
  max-width: 100%;
`

export const NoVideosHeading = styled.h2`
  color: ${props => props.headingColor};
`

export const NoSavedVideoNote = styled.p`
  color: ${props => props.noteColor};
`
