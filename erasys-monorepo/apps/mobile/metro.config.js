const { withNxMetro } = require('@nx/react-native');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

// Help Metro resolve packages from root node_modules (important in monorepos)
const extraNodeModules = new Proxy({}, {
  get: (_, name) => path.resolve(__dirname, `../../node_modules/${name}`),
});

const customConfig = {
  cacheVersion: '@erasys-monorepo/mobile',
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
    extraNodeModules,
  },
};

module.exports = withNxMetro(
  mergeConfig(defaultConfig, customConfig),
  {
    debug: false,
    extensions: [],
    watchFolders: [
      path.resolve(__dirname, '../../node_modules'),            // Root node_modules
      path.resolve(__dirname, '../../libs/shared-data-fetch'),  // Shared lib source (optional)
      path.resolve(__dirname, '../../dist/libs/shared-data-fetch'), // Shared lib build output (important)
    ],
  }
);
