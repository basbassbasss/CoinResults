import SQLite from 'react-native-sqlite-storage';

// https://github.com/blefebvre/react-native-sqlite-demo/blob/react-native-offline-first-db-with-sqlite/src/database/Database.ts

const migrateDatabase = (database: SQLite.SQLiteDatabase): Promise<void> => database.transaction(createTables);

const createTables = (transaction: SQLite.Transaction) => {
  // if (true) {
  //   console.log('createTables execute DROP');
  //   transaction.executeSql('DROP TABLE IF EXISTS rates');
  // }

  transaction.executeSql(`
    CREATE TABLE IF NOT EXISTS rates(
      fsym VARCHAR(10),
      close_rate INTEGER,
      open_rate INTEGER,
      high_rate INTEGER,
      low_rate INTEGER,
      time TIMESTAMP
    )
  `);
};

export default migrateDatabase;
