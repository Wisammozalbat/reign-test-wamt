import styled, { keyframes } from 'styled-components';

const clickAnimation = keyframes`
  100% {
    width: 3.5rem;
        height: 3.5rem;
        opacity: 0;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #606060;
  justify-content: space-between;
  transition: all 0.3s;

  &:hover {
    opacity: 0.4;
  }

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
      cursor: pointer;

      a {
        color: inherit;
        text-decoration: none;
      }
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
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #ff1212;
        width: 0;
        height: 0;
        border-radius: 50%;
        opacity: 1;
        transition: all 0.2s;
      }

      &:focus::before {
        animation: ${clickAnimation} 0.3s linear;
      }
    }
  }
`;
