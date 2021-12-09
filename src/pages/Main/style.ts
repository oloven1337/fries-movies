import styled from "styled-components";

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
  width: 300px;
  margin: 10px 0;

  input {
    width: 90%;
    padding: 6px;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid #839BB1;
  }
  
  button {
    
  }

`
