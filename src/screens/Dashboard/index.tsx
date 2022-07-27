import React from "react";
import { StatusBar } from "expo-status-bar";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title
} from "./styles"

export function Dashboard() {
  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/vmsiqueira.png' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Vitor</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard type="up" title="Entradas" amount="R$ 17.500,00" lastTransaction="última transação em..." />
        <HighlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction="última transação em..." />
        <HighlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="última transação em..." />
      </HighlightCards>

      <Transactions>
        <Title>Lista de transações</Title>
        <TransactionCard />
      </Transactions>
      
    </Container>
  );
}