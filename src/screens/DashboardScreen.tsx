import React, { useState } from 'react';
import styled from '@emotion/native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { IS_TABLET } from 'utils/Constants';
import Card from 'components/Card';
import Header from 'components/Header';

import FETCH_ASSETS from 'graphql/queries/fetchAssets.graphql';

// const FETCH_ASSETS = gql`
//   query fetchAssets {
//     fetchAssets @client {
//       id
//       name
//       amount
//     }
//   }
// `;

const DashboardScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = ({ item }) => <Card ticker={item.id} title={item.name} amount={item.amount} worth={item.worth} />;

  const renderList = ({ data: { fetchAssets }, refetch }) => (
    <AssetList
      numColumns={IS_TABLET ? 2 : 1}
      refreshing={refreshing}
      onRefresh={async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
      }}
      data={fetchAssets}
      keyExtractor={asset => asset.id}
      renderItem={renderItem}
    />
  );

  console.log('render method of DashboardScreen');

  return (
    <Container>
      <Header />
      { /* By using fetchPolicy="no-cache" property we force Apollo Client into calling the query resolver */ }
      <Query query={FETCH_ASSETS} fetchPolicy="no-cache">
        {renderList}
      </Query>
    </Container>
  );
};

DashboardScreen.navigationOptions = {
  header: null,
};

const Container = styled.View({
  flex: 1,
});

const AssetList = styled.FlatList({
  padding: IS_TABLET ? 10 : 0,
});

export default DashboardScreen;
