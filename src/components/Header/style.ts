import styled from 'styled-components'

const greyColor = '#839BB1'

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
      color: ${greyColor};

      span {
        margin-left: 10px;
      }
    }
  }

  a {
    text-decoration: none;
  }
`
