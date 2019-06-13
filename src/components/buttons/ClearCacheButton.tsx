import React from 'react';
import { Button } from 'react-native';
import { ApolloConsumer } from 'react-apollo';

import Database from 'database/Database';

const ClearCacheButton = () => (
  <ApolloConsumer>
    {client => (
      <Button
        title="Reset"
        onPress={() => {
          console.log('TRUNCATE SQLITE');
          Database.query('DELETE FROM rates');
        }}
      />
    )}
  </ApolloConsumer>
);

export default ClearCacheButton;
