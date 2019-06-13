export default `
type Asset {
  id: String!
  name: String
  ohlcAvg: Int
  worth: Int
}

type Query {
  fetchAssets: [Asset]
}
`;
