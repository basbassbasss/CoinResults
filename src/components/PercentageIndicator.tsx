import React from 'react';
import styled from '@emotion/native';
import { withTheme } from 'emotion-theming';

interface Props {
  children?: React.ReactNode;
  percentage: number;
  negative: boolean;
}

const Container = styled.TouchableOpacity(props => ({
  paddingHorizontal: 5,
  paddingVertical: 5,
  borderRadius: 5,

  backgroundColor: props.negative === true ? props.theme.colors['red-light'] : props.theme.colors['green-light'],
}));

const TextColored = styled.Text(props => ({
  fontSize: 15,
  color: props.theme.colors.white,
  fontWeight: '800',
}));

const PercentageIndicator: React.FunctionComponent<Props> = ({ percentage, negative }) => (
  <Container negative={negative}>
    <TextColored>{`${percentage}%`}</TextColored>
  </Container>
);

PercentageIndicator.defaultProps = {
  negative: false,
};

export default withTheme(PercentageIndicator);
