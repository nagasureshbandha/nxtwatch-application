import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
`

export const FailureImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailureNote = styled.p`
  margin: 20px 0;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`

export const FailureHeading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 24px;
  margin-bottom: 10px;
`

export const RetryButton = styled.button`
  padding: 10px 20px;
  background-color: #1e293b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: '#4f46e5';
  transition: background-color 0.3s;

  &:hover {
    background-color: #3e4c59;
  }
`
