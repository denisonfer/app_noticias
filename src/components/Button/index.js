import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, ButtonText } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </Container>
  );
}
