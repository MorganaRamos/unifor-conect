import React, { useState } from "react";

// COMPONENT
import { MenuGrupos } from "../../components/MenuGrupos";
import { Select } from "../../components/Select";

// COMPONENTS
import { ButtonGrupo } from "../../components/ButtonGrupo";
import { Message } from "../../components/Message";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  Div,
  AreaPai,
  Area,
  BoxMessage,
} from "./styles";

export function ChatPage() {
  const [selectedOption, setSelectedOption] = useState("");
  // const [options, setOptions] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // PARA RECEBER A API
  // useEffect(() => {
  //   const fetchOptions = async () => {
  //     try {
  //       const response = await fetch("URL_DA_SUA_API_AQUI");
  //       const data = await response.json();
  //       setOptions(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar opções da API", error);
  //     }
  //   };

  //   fetchOptions();
  // }, []);

  const options = [
    { value: "option1", label: "Cyberseguraça" },
    { value: "option2", label: "Frontend" },
    { value: "option3", label: "Backend" },
  ];
  return (
    <>
      <StyledRoutesPageContainer>
        <MenuGrupos />
        <Div>
          <AreaPai>
            <Area>
              <Message />
            </Area>
            <BoxMessage placeholder="Mensagem..." />
          </AreaPai>
        </Div>
      </StyledRoutesPageContainer>
    </>
  );
}
