"use strict";
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
const emotion_theming_1 = require("emotion-theming");
const native_1 = __importDefault(require("@emotion/native"));
const react_apollo_1 = require("react-apollo");
const Database_1 = __importDefault(require("database/Database"));
const theme_1 = __importDefault(require("styles/theme"));
const client_1 = __importDefault(require("graphql/client"));
const LoadingScreen_1 = __importDefault(require("screens/LoadingScreen"));
const AppNavigator_1 = __importDefault(require("navigation/AppNavigator"));
const TopSafeAreaContainer = native_1.default.SafeAreaView({
    backgroundColor: theme_1.default.header.statusBarBackgroundColor,
});
const SafeAreaContainer = native_1.default.SafeAreaView({
    backgroundColor: theme_1.default.body.backgroundColor,
    flex: 1,
});
class App extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            appState: react_native_1.AppState.currentState,
            databaseIsReady: false,
        };
        this.handleAppStateChange = nextAppState => {
            const { appState } = this.state;
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
                this.appRunningInForeground();
            }
            else if (appState === 'active' && appState.match(/inactive|background/)) {
                this.appGoneToBackground();
            }
            this.setState({
                appState: nextAppState,
            });
        };
    }
    componentDidMount() {
        this.appRunningInForeground();
        react_native_1.AppState.addEventListener('change', this.handleAppStateChange);
    }
    componentWillUnmount() {
        react_native_1.AppState.addEventListener('change', this.handleAppStateChange);
    }
    appRunningInForeground() {
        console.log('App running in foreground');
        return Database_1.default.open()
            .then(() => this.setState({
            databaseIsReady: true,
        }));
    }
    appGoneToBackground() {
        console.log('App has gone to background.');
        Database_1.default.close();
    }
    renderApp() {
        const { databaseIsReady } = this.state;
        if (!databaseIsReady) {
            return react_1.default.createElement(LoadingScreen_1.default, null);
        }
        return react_1.default.createElement(AppNavigator_1.default, null);
    }
    render() {
        return (react_1.default.createElement(react_apollo_1.ApolloProvider, { client: client_1.default },
            react_1.default.createElement(emotion_theming_1.ThemeProvider, { theme: theme_1.default },
                react_1.default.createElement(TopSafeAreaContainer, null),
                react_1.default.createElement(SafeAreaContainer, null, this.renderApp()))));
    }
}
exports.default = App;
