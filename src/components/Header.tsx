import React from 'react';
import styled from '@emotion/native';
import { withTheme } from 'emotion-theming';

import ClearCacheButton from 'components/buttons/ClearCacheButton';
import RateAPIButton from 'components/buttons/RateAPIButton';

const Header = () => (
  <Container>
    <PortfolioInfo>
      <PortfolioValue>€ 123</PortfolioValue>
    </PortfolioInfo>
    <ActionButtons>
      <ClearCacheButton />
      <RateAPIButton />
    </ActionButtons>
  </Container>
);

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.header.backgroundColor,
  height: '10%',
  flexDirection: 'row',
}));

const PortfolioInfo = styled.View({
  flex: 1,
  paddingLeft: 30,
  justifyContent: 'center',
});

const PortfolioValue = styled.Text(props => ({
  fontSize: 20,
  fontWeight: '600',
  color: props.theme.colors.white,
  marginBottom: 5,
}));

const ActionButtons = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 30,
});

export default withTheme(Header);
