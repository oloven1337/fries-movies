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
    align-items: center;

    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px;

      a {
        text-decoration: none;
        color: ${props => props.theme.color};
      }

      span {
        margin-left: 10px;
      }
    }
  }


`
