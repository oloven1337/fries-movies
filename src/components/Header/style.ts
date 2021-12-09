import styled from 'styled-components'

export const HeaderStyled = styled.header`
  img {
    width: 50px;
    height: 50px;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;

    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      span {
        margin-left: 10px;
      }
    }
  }

  a {
    text-decoration: none;
  }
`
