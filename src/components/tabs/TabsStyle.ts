import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 6.3rem;

  @media (max-width: 768px) {
    margin: 0 auto 5rem;
  }

  @media (max-width: 550px) {
    margin: 0 auto 4rem;
  }

  @media (max-width: 420px) {
    margin: 0 auto 3rem;
  }
`;

export const Tab = styled.button`
  border: 1px solid #d6d6d6;
  outline: none;
  padding: 0.5rem 0;
  margin: 0;
  background-color: transparent;
  font-family: inherit;
  color: #606060;
  font-size: 16px;
  min-width: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    transition: all 0.3s;
    background-color: #dbefff;
  }

  &.active {
    color: #1797ff;
  }

  &:first-of-type {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-right-width: 0.5px;

    &.active {
      border-top-color: #1797ff;
      border-bottom-color: #1797ff;
      border-left-color: #1797ff;
    }
  }

  &:last-of-type {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-left-width: 0.5px;

    &.active {
      border-top-color: #1797ff;
      border-bottom-color: #1797ff;
      border-right-color: #1797ff;
    }
  }
`;
