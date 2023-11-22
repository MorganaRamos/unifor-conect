import styled from "styled-components";

export const AreaInput = styled.div`
  width: 100%;
  max-width: 400px;
  height: 40px;
  background-color: #c8d8ff;
  display: flex;
  padding: 0 10px;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const InputText = styled.input`
  background-color: #c8d8ff;
  width: 100%;
  height: auto;
  border: 0px;
  outline: none;
  color: white;
  &::placeholder {
    color: #004af7;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
