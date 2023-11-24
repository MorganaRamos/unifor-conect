import React from "react";

import { FiArrowLeft } from "react-icons/fi";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  BotaoVoltar,
  DivArea,
  NameText,
  TextInstrucao,
  HelloText,
  AreaCurso,
} from "./styles";

export function TelaInicial() {
  return (
    <>
      <StyledRoutesPageContainer>
        {/* Ícone */}
        <BotaoVoltar>
          <FiArrowLeft color="Blue" size={25} />
        </BotaoVoltar>

        <DivArea>
          <HelloText>Olá,</HelloText>
          <NameText>Gabriel Nobre</NameText>
          <TextInstrucao>
            Selecione os campos abaixo {"\n"} para entrar no grupo
          </TextInstrucao>
          <AreaCurso>Select </AreaCurso>
        </DivArea>
      </StyledRoutesPageContainer>
    </>
  );
}
