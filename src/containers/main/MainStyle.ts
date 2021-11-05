import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  padding: 7rem 15rem 9.8rem;
  font-family: 'Roboto';
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 5rem 10rem 8rem;
  }

  @media (max-width: 550px) {
    padding: 4rem 6rem 5rem;
  }

  @media (max-width: 420px) {
    padding: 3rem 3rem;
  }
`;
