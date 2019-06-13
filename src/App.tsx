import React, { Component } from 'react';
import { AppState } from 'react-native';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/native';
import { ApolloProvider } from 'react-apollo';

import Database from 'database/Database';
import theme from 'styles/theme';
import client from 'graphql/client';
import LoadingScreen from 'screens/LoadingScreen';
import AppNavigator from 'navigation/AppNavigator';

const TopSafeAreaContainer = styled.SafeAreaView({
  backgroundColor: theme.header.statusBarBackgroundColor,
});

const SafeAreaContainer = styled.SafeAreaView({
  backgroundColor: theme.body.backgroundColor,
  flex: 1,
});

class App extends Component {
  state = {
    appState: AppState.currentState,
    databaseIsReady: false,
  };

  componentDidMount(): void {
    this.appRunningInForeground();

    // Todo: fetch all rates on componentMount
    // Todo: save and show last date of api fetch

    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount(): void {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    const { appState } = this.state;

    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      this.appRunningInForeground();
    } else if (appState === 'active' && appState.match(/inactive|background/)) {
      this.appGoneToBackground();
    }

    this.setState({
      appState: nextAppState,
    });
  }

  appRunningInForeground() {
    console.log('App running in foreground');

    return Database.open()
      .then(() => this.setState({
        databaseIsReady: true,
      }));
  }

  // eslint-disable-next-line class-methods-use-this
  appGoneToBackground() {
    console.log('App has gone to background.');

    Database.close();
  }

  renderApp() {
    const { databaseIsReady } = this.state;

    if (!databaseIsReady) {
      return <LoadingScreen />;
    }

    return <AppNavigator />;
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <TopSafeAreaContainer />
          <SafeAreaContainer>
            {this.renderApp()}
          </SafeAreaContainer>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
