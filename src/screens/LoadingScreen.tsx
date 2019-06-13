import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from '@emotion/native';
import { withTheme } from 'emotion-theming';

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.body.backgroundColor,
  flex: 1,
  justifyContent: 'center',
}));

const LoadingScreen = () => (
  <Container>
    <ActivityIndicator size="large" />
  </Container>
);

export default withTheme(LoadingScreen);
