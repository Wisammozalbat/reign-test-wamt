import styled from 'styled-components';

export const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 4rem;
  row-gap: 3rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
