"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
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
