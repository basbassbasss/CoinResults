"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const defaults_1 = __importDefault(require("graphql/defaults"));
const RateAPI_1 = __importDefault(require("utils/RateAPI"));
const RateAPIButton = () => {
    const [refreshing, setRefreshing] = react_1.useState(false);
    return (react_1.default.createElement(react_native_1.Button, { onPress: () => __awaiter(this, void 0, void 0, function* () {
            setRefreshing(true);
            const historyFetchPromises = defaults_1.default.assets.map(asset => RateAPI_1.default.fetchHistoricDayAveragesFor(asset.id));
            yield Promise.all(historyFetchPromises);
            setRefreshing(false);
        }), title: refreshing ? 'Refreshing' : 'RateAPI' }));
};
exports.default = RateAPIButton;
