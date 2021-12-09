import styled from 'styled-components'

const redColor = '#d22f27'

export const ButtonStyled = styled.button`

  width: 100px;
  border-radius: 6px;
  background-color: ${redColor};
  color: white;
  border-color: transparent;
  cursor: pointer;
  transition: .4s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
