import React, { useState } from "react";

// COMPONENTS
import { Select } from "../../components/Select";

// ESTILIZAÇÃO
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  StyledRoutesPageContainer,
  BotaoVoltar,
  DivArea,
  NameText,
  TextInstrucao,
  HelloText,
  AreaCurso,
  AreaSelect,
  TextCurso,
  ButtonProximo,
} from "./styles";

export function TelaInicial() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "option1", label: "ADS" },
    { value: "option2", label: "Ciência da Computação" },
    { value: "option3", label: "Eng. da Computação" },
  ];

  return (
    <>
      <StyledRoutesPageContainer>
        {/* Ícone */}
        <BotaoVoltar>
          <IoMdArrowRoundBack color="Blue" size={25} />
        </BotaoVoltar>

        <DivArea>
          <HelloText>Olá,</HelloText>
          <NameText>Gabriel Nobre</NameText>
          <TextInstrucao>
            Selecione os campos abaixo {"\n"} para entrar no grupo
          </TextInstrucao>
        </DivArea>

        <AreaCurso>
          <AreaSelect>
            <TextCurso>Curso:</TextCurso>
            <Select options={options} onChange={handleSelectChange} />
          </AreaSelect>

          <ButtonProximo>
            <IoMdArrowRoundForward color="Blue" size={25} />
          </ButtonProximo>
        </AreaCurso>
      </StyledRoutesPageContainer>
    </>
  );
}
