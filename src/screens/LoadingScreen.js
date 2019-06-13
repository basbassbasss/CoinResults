"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("@emotion/native"));
const emotion_theming_1 = require("emotion-theming");
const Container = native_1.default.View(({ theme }) => ({
    backgroundColor: theme.body.backgroundColor,
    flex: 1,
    justifyContent: 'center',
}));
const LoadingScreen = () => (react_1.default.createElement(Container, null,
    react_1.default.createElement(react_native_1.ActivityIndicator, { size: "large" })));
exports.default = emotion_theming_1.withTheme(LoadingScreen);
