module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@store': './src/store',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@type': './src/types',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
