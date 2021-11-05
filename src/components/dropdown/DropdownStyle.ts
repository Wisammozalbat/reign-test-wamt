import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 240px;
  font-size: 1.4rem;
  font-family: 'Roboto';
  margin-bottom: 3.8rem;
  color: #343434;

  &.opened {
    border-radius: 0;
  }

  .dropdown-options {
    width: 98%;
    display: none;
    top: 100%;
    left: 1%;
    right: 0;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
    background-color: white;

    &.visible {
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 20;
    }
  }

  .dropdown-option {
    width: 100%;
    display: flex;
    align-items: center;

    label {
      display: flex;
      align-items: center;
      gap: 13px;
      width: 100%;
      overflow-x: auto;
      padding: 12px 10px;
      cursor: pointer;
      font-size: inherit;
      font-family: inherit;
      text-transform: capitalize;
    }

    img {
      width: 24px;
    }

    input {
      display: none;
    }

    &:hover {
      transition: all 0.3s;
      background-color: #eaeaea;
    }
  }

  .dropdown-value {
    font-size: inherit;
    font-family: inherit;
  }

  .value-selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #2e2e2e;
    text-transform: capitalize;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;
