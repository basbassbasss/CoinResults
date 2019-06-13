"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_apollo_1 = require("react-apollo");
const Database_1 = __importDefault(require("database/Database"));
const ClearCacheButton = () => (react_1.default.createElement(react_apollo_1.ApolloConsumer, null, client => (react_1.default.createElement(react_native_1.Button, { title: "Reset", onPress: () => {
        console.log('TRUNCATE SQLITE');
        Database_1.default.query('DELETE FROM rates');
    } }))));
exports.default = ClearCacheButton;
