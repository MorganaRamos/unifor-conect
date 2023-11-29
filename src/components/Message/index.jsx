import React from "react";

// ESTILIZAÇÃO
import {
  AreaMessage,
  MyMessage,
  IdClient,
  MessageUser,
  UserMessage,
} from "./styles";

export function Message() {
  return (
    <>
      <AreaMessage>
        <MyMessage>
          <IdClient>Usuário:</IdClient>
          <MessageUser>Oi!</MessageUser>
        </MyMessage>

        <UserMessage>
          <IdClient>Eu:</IdClient>
          <MessageUser>Oie!!</MessageUser>
        </UserMessage>
      </AreaMessage>
    </>
  );
}
