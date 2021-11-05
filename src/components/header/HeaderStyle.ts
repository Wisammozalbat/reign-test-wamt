import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0;
  padding: 4.4rem 15rem 4.2rem;
  font-size: 2.8rem;
  font-family: Baskerville;
  line-height: 2.8rem;
  color: #3b3b3b;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  z-index: 20;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 5rem 10rem;
  }

  @media (max-width: 550px) {
    padding: 4rem 6rem;
  }

  @media (max-width: 420px) {
    padding: 3rem 3rem;
  }
`;
