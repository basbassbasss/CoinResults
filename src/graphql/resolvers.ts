import defaults from 'graphql/defaults';
import Database from 'database/Database';

export default {
  Query: {
    fetchAssets: async () => {
      const { assets } = defaults;

      const enrichedAssets = await Promise.all(assets.map(async asset => {
        let { ohlcAvg, worth } = asset;

        const [{ rows }] = await Database.query(`
             SELECT 
               fsym,
               close_rate, 
               open_rate, 
               high_rate, 
               low_rate, 
               time 
             FROM 
               rates
             WHERE 
               fsym = "${asset.id}"
             ORDER BY time DESC;
           `);

        if (rows.length > 0) {
          const latestRate = rows.item(0);

          // Todo: make historical data entry

          ohlcAvg = (latestRate.open_rate + latestRate.high_rate + latestRate.low_rate + latestRate.close_rate) / 4;
          worth = asset.amount * ohlcAvg;
        }

        return {
          ...asset,
          ohlcAvg,
          worth,
        };
      }));

      return enrichedAssets.sort((a, b) => b.worth - a.worth);
    },
  },
};
