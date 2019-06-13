module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-graphql',
    ['module-resolver', {
      root: ['./src'],
    }],
    '@babel/plugin-proposal-optional-chaining',
  ],
};
