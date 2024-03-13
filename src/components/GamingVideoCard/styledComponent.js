import styled from 'styled-components'

// Define styled components
export const ItemLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const GamingListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`

export const GamingThumbnailImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
`

export const GamingContentSection = styled.div`
  flex: 1;
`

export const GamingTitle = styled.h2`
  color: ${props => props.color};
  font-size: 1.2rem;
  margin-bottom: 5px;
`

export const GamingViewsAndDate = styled.p`
  color: ${props => props.color};
  font-size: 0.9rem;
`
