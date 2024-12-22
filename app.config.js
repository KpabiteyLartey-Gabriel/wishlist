export default {
  expo: {
    name: 'Wishlist App',
    slug: 'wishlist-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    plugins: [
      'expo-router',
      [
        'expo-image-picker',
        {
          photosPermission: 'The app needs access to your photos to upload wishlist items.',
        },
      ],
    ],
    scheme: 'wishlist',
    experiments: {
      tsconfigPaths: true,
    },
  },
};
