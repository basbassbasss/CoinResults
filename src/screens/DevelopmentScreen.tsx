import React from 'react';
import styled from '@emotion/native';
import { withTheme } from 'emotion-theming';
import { View, Text } from 'react-native';

import Header from 'components/Header';

const Container = styled.View({
  flex: 1,
});

const DevelopmentScreen = () => (
  <Container>
    <Header />
    <View>
      <Text>Tester</Text>
    </View>
  </Container>
);

DevelopmentScreen.navigationOptions = {
  header: null,
};

export default withTheme(DevelopmentScreen);
