import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  div {
    cursor: pointer;
  }

  .image {
    margin-right: 5px;
  }

  input {
    border: 0;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }
`;
