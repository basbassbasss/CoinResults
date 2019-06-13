"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_sqlite_storage_1 = __importDefault(require("react-native-sqlite-storage"));
const DatabaseMigrations_1 = __importDefault(require("./DatabaseMigrations"));
class Database {
    constructor() {
        this.databaseName = 'CoinDatabase.db';
        this.database = null;
    }
    open() {
        react_native_sqlite_storage_1.default.enablePromise(true);
        return react_native_sqlite_storage_1.default.openDatabase({
            name: this.databaseName,
            location: 'default',
        })
            .then((databaseInstance) => __awaiter(this, void 0, void 0, function* () {
            this.database = databaseInstance;
            yield DatabaseMigrations_1.default(this.database);
            return this.database;
        }));
    }
    close() {
        if (!this.database) {
            return Promise.reject(new Error('[db] Database was not initialized. Unable to close.'));
        }
        return this.database.close()
            .then(status => {
            console.log('[db] Database closed.', status);
            this.database = null;
        });
    }
    query(...query) {
        return this.getDatabase().then(db => db.executeSql(query));
    }
    getDatabase() {
        if (this.database === null) {
            return this.open();
        }
        return Promise.resolve(this.database);
    }
}
exports.default = new Database();
