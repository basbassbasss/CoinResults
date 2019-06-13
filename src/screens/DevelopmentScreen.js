"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = __importDefault(require("@emotion/native"));
const emotion_theming_1 = require("emotion-theming");
const react_native_1 = require("react-native");
const Header_1 = __importDefault(require("components/Header"));
const Container = native_1.default.View({
    flex: 1,
});
const DevelopmentScreen = () => (react_1.default.createElement(Container, null,
    react_1.default.createElement(Header_1.default, null),
    react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null, "Tester"))));
DevelopmentScreen.navigationOptions = {
    header: null,
};
exports.default = emotion_theming_1.withTheme(DevelopmentScreen);
