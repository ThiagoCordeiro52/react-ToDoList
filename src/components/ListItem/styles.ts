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
  }
`;
