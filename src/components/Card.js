"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = __importDefault(require("@emotion/native"));
const emotion_theming_1 = require("emotion-theming");
const numeral_1 = __importDefault(require("numeral"));
const PercentageIndicator_1 = __importDefault(require("components/PercentageIndicator"));
const Container = native_1.default.View(props => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: props.theme.colors.white,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
        height: 10,
        width: 0,
    },
    flex: 1,
    margin: 15,
    padding: 20,
    height: 100,
    borderRadius: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
}));
const Left = native_1.default.View({
    flex: 1,
});
const Right = native_1.default.View({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
});
const Ticker = native_1.default.Text(props => ({
    fontSize: 20,
    fontWeight: '600',
    color: props.theme.colors['grey-darker'],
    marginBottom: 5,
}));
const TickerRate = native_1.default.Text(props => ({
    fontSize: 15,
    color: props.theme.colors['grey-dark'],
}));
const PortfolioValue = native_1.default.Text(props => ({
    fontSize: 20,
    fontWeight: '400',
    color: props.theme.colors['grey-dark'],
    marginRight: 5,
}));
const Card = ({ ticker, title, amount, worth, }) => (react_1.default.createElement(Container, null,
    react_1.default.createElement(Left, null,
        react_1.default.createElement(Ticker, null, title),
        react_1.default.createElement(TickerRate, null, `${amount} ${ticker}`)),
    react_1.default.createElement(Right, null,
        react_1.default.createElement(PortfolioValue, null, `€ ${numeral_1.default(worth).format()}`),
        react_1.default.createElement(PercentageIndicator_1.default, { percentage: 5, negative: false }, "5%"))));
Card.defaultProps = {
    worth: 1337,
};
exports.default = emotion_theming_1.withTheme(Card);
