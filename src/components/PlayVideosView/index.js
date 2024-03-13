import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayerVideoTitle,
  PlayerVideoStatus,
  PlayerVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonContainer,
  ButtonText,
  SocialButton,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscription,
  BtnContainer,
  ChannelDescription,
} from './styledComponents'

const PlayVideosView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props
  const onClickLike = () => {
    clickLiked()
  }

  const onClickDisLiked = () => {
    clickDisLiked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor
        const onClickSave = () => {
          addVideo(videoDetails)
        }
        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayerVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayerVideoTitle>
            <PlayerVideoStatusContainer>
              <PlayerVideoStatus>
                {videoDetails.viewCount} views{' '}
                <PlayVideoDot> $#8226; </PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayerVideoStatus>
              <PlaySocialButtonContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>

                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDisLiked}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText>DisLike</ButtonText>
                  </SocialButton>
                </BtnContainer>

                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonContainer>
            </PlayerVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscription color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscription>
                <ChannelDescription color={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideosView
