import styled from 'styled-components'

export const VideoDetailsViewContainer = styled.div`
  background-color: ${({bgColor}) => bgColor};
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Adjust height as needed */

  @media screen and (min-width: 768px) {
    height: 300px; /* Adjust height as needed */
  }
`
