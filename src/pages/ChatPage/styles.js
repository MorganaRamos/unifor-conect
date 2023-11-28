import styled from "styled-components";

export const StyledRoutesPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Area = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 100vh;
  align-items: center;
  background: green;
`;

export const AreaMessage = styled.div`
  width: 100%;

  margin: 20px;

  background: red;
`;

export const BoxMessage = styled.input`
  width: 100%;
  height: 40px;

  outline: none;
  border: none;
  padding: 10px;
  background: #d9d9d9;
  border-radius: 12px;

  color: #5c5c5c;

  ::placeholder {
    /* color: #5c5c5c; */
    color: red;
  }
`;
