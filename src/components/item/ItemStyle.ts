import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #606060;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 1.4rem 2.6rem;

    &-top {
      color: #767676;
      font-size: 1.1rem;
      display: flex;
      gap: 5px;
      align-items: center;

      .icon {
        font-size: 1.6rem;
      }
    }

    &-bottom {
      color: #6b6b6b;
      line-height: 2rem;
      font-size: 1.4rem;
      letter-spacing: 0.25px;
      font-weight: 500;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 2.2rem;
    font-size: 24px;
    background-color: rgba(151, 151, 151, 0.06);

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;
