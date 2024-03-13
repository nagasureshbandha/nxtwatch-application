import styled from 'styled-components'

const ListItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${props => props.theme.cardBackground};
`

const ThumbnailImg = styled.img`
  width: 160px;
  height: 90px;
  border-radius: 4px;
  margin-right: 10px;
`

const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`

const ChannelName = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  margin-bottom: 5px;
`

const Dot = styled.span`
  color: ${props => props.color};
`

const ViewsAndDate = styled.p`
  color: ${props => props.color};
  font-size: 12px;
`

export {
  ListItem,
  ThumbnailImg,
  VideoDetails,
  ProfileImg,
  ContentSection,
  Title,
  ChannelName,
  Dot,
  ViewsAndDate,
}
