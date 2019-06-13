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
const defaults_1 = __importDefault(require("graphql/defaults"));
const Database_1 = __importDefault(require("database/Database"));
exports.default = {
    Query: {
        fetchAssets: () => __awaiter(this, void 0, void 0, function* () {
            const { assets } = defaults_1.default;
            const enrichedAssets = yield Promise.all(assets.map((asset) => __awaiter(this, void 0, void 0, function* () {
                let { ohlcAvg, worth } = asset;
                const [{ rows }] = yield Database_1.default.query(`
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
                    ohlcAvg = (latestRate.open_rate + latestRate.high_rate + latestRate.low_rate + latestRate.close_rate) / 4;
                    worth = asset.amount * ohlcAvg;
                }
                return Object.assign({}, asset, { ohlcAvg,
                    worth });
            })));
            return enrichedAssets.sort((a, b) => b.worth - a.worth);
        }),
    },
};
