import styled from 'styled-components';

export const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 4rem;
  row-gap: 3rem;

  .no-data {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    color: #606060;
    text-transform: capitalize;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
