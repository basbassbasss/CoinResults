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
const native_1 = __importDefault(require("@emotion/native"));
const react_apollo_1 = require("react-apollo");
const Constants_1 = require("utils/Constants");
const Card_1 = __importDefault(require("components/Card"));
const Header_1 = __importDefault(require("components/Header"));
const fetchAssets_graphql_1 = __importDefault(require("graphql/queries/fetchAssets.graphql"));
const DashboardScreen = () => {
    const [refreshing, setRefreshing] = react_1.useState(false);
    const renderItem = ({ item }) => react_1.default.createElement(Card_1.default, { ticker: item.id, title: item.name, amount: item.amount, worth: item.worth });
    const renderList = ({ data: { fetchAssets }, refetch }) => (react_1.default.createElement(AssetList, { numColumns: Constants_1.IS_TABLET ? 2 : 1, refreshing: refreshing, onRefresh: () => __awaiter(this, void 0, void 0, function* () {
            setRefreshing(true);
            yield refetch();
            setRefreshing(false);
        }), data: fetchAssets, keyExtractor: asset => asset.id, renderItem: renderItem }));
    console.log('render method of DashboardScreen');
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(react_apollo_1.Query, { query: fetchAssets_graphql_1.default, fetchPolicy: "no-cache" }, renderList)));
};
DashboardScreen.navigationOptions = {
    header: null,
};
const Container = native_1.default.View({
    flex: 1,
});
const AssetList = native_1.default.FlatList({
    padding: Constants_1.IS_TABLET ? 10 : 0,
});
exports.default = DashboardScreen;
