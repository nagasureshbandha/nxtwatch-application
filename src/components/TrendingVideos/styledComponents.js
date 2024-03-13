import styled from 'styled-components'

export const TrendingContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
  min-width: 768px; /* Minimum width of 768px */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const TitleIconContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const TrendingtText = styled.h2`
  margin-left: 10px;
  color: ${props => props.color};
`

export const TrendingVideosList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

// Additional styled components can be added here as needed
