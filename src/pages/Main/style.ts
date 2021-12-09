import styled from 'styled-components'

export const MainStyled = styled.main`
`

interface Props {
    genre?: boolean
}

export const CardStyled = styled.div<Props>`
  display: flex;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  flex-wrap: ${props => props.genre ? 'no-wrap' : 'wrap'};
  overflow-x: auto;

  div {
    margin: 10px;
    cursor: pointer;
    text-align: center;
  }

  img {
    width: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 7px;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  h4 {
    margin: 0;
    text-align: center;
    text-transform: capitalize;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  @media (max-width: 768px) {
    display: block;
    margin: 0 50px;
  }
`

export const FormStyled = styled.form`
  display: flex;
  width: 100%;
  margin: 10px 0;
  align-items: center;

  input {
    width: 250px;
    padding: 10px;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.color};
    transition: .2s;

    &:focus {
      outline: 1px solid rgba(255, 0, 0, 0.29);
      box-shadow: 0 0 0 10px rgba(246, 40, 40, 0.2);
    }
  }
`
