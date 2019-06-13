import React, { useState } from 'react';
import { Button } from 'react-native';

import defaults from 'graphql/defaults';
import RateAPI from 'utils/RateAPI';

const RateAPIButton = () => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Button
      onPress={async () => {
        setRefreshing(true);

        const historyFetchPromises = defaults.assets.map(asset => RateAPI.fetchHistoricDayAveragesFor(asset.id));
        await Promise.all(historyFetchPromises);

        setRefreshing(false);
      }}
      title={refreshing ? 'Refreshing' : 'RateAPI'}
    />
  );
};

export default RateAPIButton;
