import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: #20212c;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  display: flex;
  align-items: center;

  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    color: #ccc;
    text-decoration: ${({ done }) => done && 'line-through'};
    flex: 1;
  }

  svg {
    height: 20px;
    width: 20px;
    cursor: pointer;
    &:first-child {
      /* color: red; */
    }
    &:last-child {
      /* color: blue; */
      margin-left: 5px;
    }
  }
`;
