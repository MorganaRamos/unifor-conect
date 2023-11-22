import React from "react";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  DivArea,
  TextBoasVindas,
  TextInstrucao,
} from "./styles";

export function TelaInicial() {
  return (
    <>
      <StyledRoutesPageContainer>
        <DivArea>
          <TextBoasVindas>Olá, Gabriel Nobre</TextBoasVindas>
          <TextInstrucao>
            Selecione os campos abaixo para entrar no grupo
          </TextInstrucao>
        </DivArea>
      </StyledRoutesPageContainer>
    </>
  );
}
