import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  ItemLink,
  TrendingListItem,
  TrendingThumbnailImg,
  TrendingVideoDetails,
  TrendingProfileImg,
  TrendingTitle,
  TrendingContentSection,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponent'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    publishedAt,
    viewCount,
    name,
    thumbnailUrl,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoDetails>
                <TrendingProfileImg src={profileImageUrl} alt="channel logo" />

                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName color={textColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewsAndDate>
                    {viewCount} views <TrendingDot> &8226; </TrendingDot>
                    {publishedAt}
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
