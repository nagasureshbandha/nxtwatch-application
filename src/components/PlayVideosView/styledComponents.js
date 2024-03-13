import styled from 'styled-components'

export const VideoPlayer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const PlayerVideoTitle = styled.h1`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${props => props.color};
`

export const PlayerVideoStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const PlayerVideoStatus = styled.p`
  font-size: 0.9rem;
  color: #64748b;
`

export const PlayVideoDot = styled.span`
  margin: 0 5px;
`

export const PlaySocialButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const BtnContainer = styled.div`
  margin-right: 10px;
`

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const ButtonText = styled.span`
  margin-left: 5px;
`

export const HrLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`

export const ChannelInfo = styled.div`
  flex: 1;
`

export const ChannelName = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
  color: ${props => props.color};
`

export const ChannelSubscription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.color};
`

export const ChannelDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.color};
`
