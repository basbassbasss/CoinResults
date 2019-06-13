"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = __importDefault(require("apollo-boost"));
const defaults_1 = __importDefault(require("graphql/defaults"));
const resolvers_1 = __importDefault(require("graphql/resolvers"));
const typeDefs_1 = __importDefault(require("graphql/typeDefs"));
exports.default = new apollo_boost_1.default({
    clientState: {
        defaults: defaults_1.default,
        resolvers: resolvers_1.default,
        typeDefs: typeDefs_1.default,
    },
});
