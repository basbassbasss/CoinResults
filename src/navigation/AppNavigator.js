"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const theme_1 = __importDefault(require("styles/theme"));
const DashboardScreen_1 = __importDefault(require("screens/DashboardScreen"));
const AppNavigator = react_navigation_1.createStackNavigator({
    DashboardScreen: {
        screen: DashboardScreen_1.default,
    },
}, {
    cardStyle: {
        backgroundColor: theme_1.default.body.backgroundColor,
    },
});
exports.default = react_navigation_1.createAppContainer(AppNavigator);
