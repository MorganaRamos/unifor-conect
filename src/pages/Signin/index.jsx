import React, { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

// Estilização
import Logo from "../../assets/images/logoUnifor.png";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  StyledDivArea,
  DivArea,
  AreaLogo,
  ImgLogo,
  Title,
  DivLogin,
} from "./styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <StyledRoutesPageContainer>
        <StyledDivArea>
          <DivArea>
            <AreaLogo>
              <ImgLogo src={Logo} />
              <Title>UNIFOR{"\n"}CONNECT</Title>
            </AreaLogo>

            <DivLogin>
              <Input
                placeholder="E-mail"
                imgIcon={true}
                iconUi={
                  <EmailOutlinedIcon
                    sx={{
                      color: "#004AF7",
                      fontSize: 30,
                    }}
                  />
                }
                colorText={"#004AF7"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Senha"
                imgIcon={true}
                iconUi={
                  <LockOpenOutlinedIcon
                    sx={{
                      color: "Blue",
                      fontSize: 30,
                    }}
                  />
                }
                type="password"
                colorText={"#004AF7"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <ButtonText title={"Entrar"} isActive={true} />
            </DivLogin>
          </DivArea>
        </StyledDivArea>
      </StyledRoutesPageContainer>
    </>
  );
}
