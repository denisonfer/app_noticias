import React from 'react';

import { Container, Text } from './styles';

export default function DetailNewsScreen({ route }) {
  const { report } = route.params;

  console.tron.log('report', report);

  return (
    <Container>
      {report ? (
        <Text>DetailNewsScreen</Text>
      ) : (
        <Text>Carregando...</Text>
      )}
    </Container>
  );

};
