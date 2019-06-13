import React from 'react';
import styled from '@emotion/native';
import { withTheme } from 'emotion-theming';
import numeral from 'numeral';

import PercentageIndicator from 'components/PercentageIndicator';

interface Props {
  children?: React.ReactNode;
  ticker: string;
  title: string;
  amount: number;
  worth: number;
}

const Container = styled.View(props => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: props.theme.colors.white,
  shadowOpacity: 0.1,
  shadowRadius: 5,
  shadowColor: 'rgba(0, 0, 0, 0.5)',
  shadowOffset: {
    height: 10,
    width: 0,
  },
  flex: 1,
  margin: 15,
  padding: 20,
  height: 100,
  borderRadius: 5,
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

const Left = styled.View({
  flex: 1,
});

const Right = styled.View({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const Ticker = styled.Text(props => ({
  fontSize: 20,
  fontWeight: '600',
  color: props.theme.colors['grey-darker'],
  marginBottom: 5,
}));

const TickerRate = styled.Text(props => ({
  fontSize: 15,
  color: props.theme.colors['grey-dark'],
}));

const PortfolioValue = styled.Text(props => ({
  fontSize: 20,
  fontWeight: '400',
  color: props.theme.colors['grey-dark'],
  marginRight: 5,
}));

const Card: React.FunctionComponent<Props> = ({
  ticker, title, amount, worth,
}) => (
  <Container>
    <Left>
      <Ticker>{ title }</Ticker>
      <TickerRate>{`${amount} ${ticker}`}</TickerRate>
    </Left>
    <Right>
      <PortfolioValue>{`€ ${numeral(worth).format()}`}</PortfolioValue>
      <PercentageIndicator percentage={5} negative={false}>5%</PercentageIndicator>
    </Right>
  </Container>
);

Card.defaultProps = {
  worth: 1337,
};

export default withTheme(Card);
