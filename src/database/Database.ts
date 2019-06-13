import SQLite from 'react-native-sqlite-storage';

import migrateDatabase from './DatabaseMigrations';

interface DatabaseInterface {
  open(): Promise<SQLite.SQLiteDatabase>;
  close(): Promise<void>;
}

class Database implements DatabaseInterface {
  private databaseName = 'CoinDatabase.db';

  private database: SQLite.SQLiteDatabase | null = null;

  // Open the connection to the database
  public open(): Promise<SQLite.SQLiteDatabase> {
    // SQLite.DEBUG(true);
    SQLite.enablePromise(true);

    return SQLite.openDatabase({
      name: this.databaseName,
      location: 'default',
    })
      .then(async databaseInstance => {
        this.database = databaseInstance;

        // Perform database migration
        await migrateDatabase(this.database);

        return this.database;
      });
  }

  // Close the connection to the database
  public close(): Promise<void> {
    if (!this.database) {
      // Todo: check whether this needs to be a promise
      return Promise.reject(new Error('[db] Database was not initialized. Unable to close.'));
    }

    return this.database.close()
      .then(status => {
        console.log('[db] Database closed.', status);
        this.database = null;
      });
  }

  public query(...query) {
    return this.getDatabase().then(db => db.executeSql(query));
  }

  private getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (this.database === null) {
      // Open a new database
      return this.open();
    }

    // Todo: check whether this needs to be a promise
    // Resolve existing database
    return Promise.resolve(this.database);
  }
}

export default new Database();
