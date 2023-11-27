import styled from "styled-components";
import bgSignin from "../../assets/images/backgroundSignin.jpg";

export const StyledRoutesPageContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100vh;

  background-image: url(${bgSignin});
  background-size: cover;
  background-position: center;
`;

export const StyledDivArea = styled.div`
  display: flex;
  height: 100%;
  width: 40%;

  justify-content: center;
  align-items: center;

  background: rgba(195, 195, 195, 0.05);
  box-shadow: -23px 21px 18px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
`;

export const DivArea = styled.div``;

export const AreaLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImgLogo = styled.img`
  width: 230px;
  padding: 10%;
`;

export const Title = styled.text`
  white-space: pre-line;
  text-align: center;

  color: #c8d8ff;
  width: 217px;
  font-size: 30px;
  /* font-style: italic; */
  font-weight: 600;
`;

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;
  margin-top: 30px;
`;
