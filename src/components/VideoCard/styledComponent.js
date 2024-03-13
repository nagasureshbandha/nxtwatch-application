import styled from 'styled-components'

export const ItemLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const TrendingListItem = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const TrendingThumbnailImg = styled.img`
  width: 120px;
  height: 90px;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrendingProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-bottom: 5px;
`

export const TrendingTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${props => props.color};
`

export const TrendingChannelName = styled.div`
  font-size: 14px;
  color: ${props => props.color};
  margin-bottom: 5px;
`

export const TrendingContentSection = styled.div`
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

export const TrendingViewsAndDate = styled.div`
  font-size: 12px;
  color: #777;
`

export const TrendingDot = styled.span`
  margin: 0 5px;
`
