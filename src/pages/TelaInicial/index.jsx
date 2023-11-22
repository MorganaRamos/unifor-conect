import React from "react";

import { FiArrowRight } from "react-icons/fi";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  DivArea,
  NameText,
  TextInstrucao,
  HelloText,
} from "./styles";

export function TelaInicial() {
  return (
    <>
      <StyledRoutesPageContainer>
        {/* Ícone */}
        <BotaoVoltar>
          <FiArrowRight />
        </BotaoVoltar>

        <DivArea>
          <HelloText>Olá,</HelloText>
          <NameText>Gabriel Nobre</NameText>
          <TextInstrucao>
            Selecione os campos abaixo {"\n"} para entrar no grupo
          </TextInstrucao>
        </DivArea>
      </StyledRoutesPageContainer>
    </>
  );
}
