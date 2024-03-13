import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const GamingTitleIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const GamingText = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const GamingVideosList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  @media (max-width: 768px) {
    height: 50px;
  }
`
