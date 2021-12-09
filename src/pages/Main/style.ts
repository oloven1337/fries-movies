import styled from 'styled-components'

const greyColor = '#839BB1'

export const CardStyled = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;

  div {
    margin: 10px;
    cursor: pointer;
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

  input {
    width: 250px;
    padding: 10px;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid ${greyColor};

    &:focus {
      box-shadow: 4px 4px 4px 4px rgba(246, 40, 40, 0.2);
    }
  }
`
