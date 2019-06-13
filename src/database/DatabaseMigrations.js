"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const migrateDatabase = (database) => database.transaction(createTables);
const createTables = (transaction) => {
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
exports.default = migrateDatabase;
