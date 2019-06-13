"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = __importDefault(require("@emotion/native"));
const emotion_theming_1 = require("emotion-theming");
const ClearCacheButton_1 = __importDefault(require("components/buttons/ClearCacheButton"));
const RateAPIButton_1 = __importDefault(require("components/buttons/RateAPIButton"));
const Header = () => (react_1.default.createElement(Container, null,
    react_1.default.createElement(PortfolioInfo, null,
        react_1.default.createElement(PortfolioValue, null, "\u20AC 123")),
    react_1.default.createElement(ActionButtons, null,
        react_1.default.createElement(ClearCacheButton_1.default, null),
        react_1.default.createElement(RateAPIButton_1.default, null))));
const Container = native_1.default.View(({ theme }) => ({
    backgroundColor: theme.header.backgroundColor,
    height: '10%',
    flexDirection: 'row',
}));
const PortfolioInfo = native_1.default.View({
    flex: 1,
    paddingLeft: 30,
    justifyContent: 'center',
});
const PortfolioValue = native_1.default.Text(props => ({
    fontSize: 20,
    fontWeight: '600',
    color: props.theme.colors.white,
    marginBottom: 5,
}));
const ActionButtons = native_1.default.View({
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
});
exports.default = emotion_theming_1.withTheme(Header);
