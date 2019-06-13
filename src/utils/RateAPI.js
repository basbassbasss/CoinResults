import axios from 'axios';
import { withApollo } from 'react-apollo';

import Database from 'database/Database';

class RateAPI {
  static async fetchHistoricDayAveragesFor(fsym) {
    // Todo: check which days to pick -> add limit to API param request
    // Todo: remove days older than 30 @ sqlite

    const { status, data: { Data } } = await axios.get('https://min-api.cryptocompare.com/data/histoday', {
      params: {
        fsym,
        tsym: 'EUR',
        // limit: this.getHours(ticker, FIAT),
      },
    });

    if (status !== 200) {
      console.error('Did not receive 200');
    }

    if (Data) {
      Data.forEach(async ({
        close, open, high, low, time,
      }) => {
        await Database.query(`
          INSERT INTO rates(
            fsym,
            close_rate,
            open_rate,
            high_rate,
            low_rate,
            time
          ) VALUES (
            "${fsym}",
            ${close},
            ${open},
            ${high},
            ${low},
            ${time}
          );
         `);
      });

      return 'success';
    }

    return 'error';
  }
}

export default withApollo(RateAPI);
