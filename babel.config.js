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
          '@assets': './src/Assets',
          '@components': './src/Components',
          '@store': './src/Store',
          '@navigators': './src/Navigators',
          '@screens': './src/Screens',
          '@services': './src/Services',
          '@utils': './src/Utils',
          '@type': './src/Types',
        },
      },
    ],
  ],
};
