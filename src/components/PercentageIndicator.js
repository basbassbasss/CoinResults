"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = __importDefault(require("@emotion/native"));
const emotion_theming_1 = require("emotion-theming");
const Container = native_1.default.TouchableOpacity(props => ({
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: props.negative === true ? props.theme.colors['red-light'] : props.theme.colors['green-light'],
}));
const TextColored = native_1.default.Text(props => ({
    fontSize: 15,
    color: props.theme.colors.white,
    fontWeight: '800',
}));
const PercentageIndicator = ({ percentage, negative }) => (react_1.default.createElement(Container, { negative: negative },
    react_1.default.createElement(TextColored, null, `${percentage}%`)));
PercentageIndicator.defaultProps = {
    negative: false,
};
exports.default = emotion_theming_1.withTheme(PercentageIndicator);
