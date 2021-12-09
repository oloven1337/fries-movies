import styled from 'styled-components'

export const HeaderStyled = styled.header`
  margin-top: 10px;

  img {
    width: 50px;
    height: 50px;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style-type: none;
      display: flex;
      align-items: center;

      button {
        //background-color: #d22f27;
      }

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        width: 140px;
        justify-content: space-between;

        h1 {
          font-weight: bold;
          color: ${props => props.theme.color};
          font-size: 15px;
        }
      }

      span {
      }
    }
  }
`
