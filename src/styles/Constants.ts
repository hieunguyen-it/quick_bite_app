import {
  AccessibilityInfo,
  Dimensions,
  I18nManager,
  NativeModules,
  Platform,
} from 'react-native';

const orientations = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape',
};

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';
let isTablet: boolean;
let statusBarHeight: number;
let screenHeight = Dimensions.get('screen').height;
let screenWidth = Dimensions.get('screen').width;
let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;

const isIphoneX = isIOS && (screenHeight >= 812 || screenWidth >= 812);

isTablet = getAspectRatio() < 1.6 && Math.max(screenWidth, screenHeight) >= 900;

function setStatusBarHeight() {
  const {StatusBarManager} = NativeModules;
  statusBarHeight = 0; // so there will be a value for any case
  statusBarHeight = isIOS ? 20 : StatusBarManager.HEIGHT;
  if (isIOS) {
    // override guesstimate height with the actual height from StatusBarManager
    StatusBarManager.getHeight((data: any) => (statusBarHeight = data.height));
  }
}

function getAspectRatio() {
  return screenWidth < screenHeight
    ? screenHeight / screenWidth
    : screenWidth / screenHeight;
}

function getOrientation(height: number, width: number) {
  return width < height ? orientations.PORTRAIT : orientations.LANDSCAPE;
}

export function updateConstants(dimensions: any) {
  screenHeight = dimensions.screen.height;
  screenWidth = dimensions.screen.width;
  windowWidth = dimensions.window.width;
  windowHeight = dimensions.window.height;

  setStatusBarHeight();
}

const accessibility = {
  isScreenReaderEnabled: false,
};

function handleScreenReaderChanged(isScreenReaderEnabled: any) {
  accessibility.isScreenReaderEnabled = isScreenReaderEnabled as boolean;
}

AccessibilityInfo.addEventListener(
  'screenReaderChanged',
  handleScreenReaderChanged,
);

function setAccessibility() {
  AccessibilityInfo.isScreenReaderEnabled().then(isScreenReaderEnabled => {
    accessibility.isScreenReaderEnabled = isScreenReaderEnabled;
  });
}

setAccessibility();

const Constants = {
  /* Platform */

  orientations,
  isAndroid,
  isIOS,
  isIphoneX,
  getAndroidVersion: () => {
    return isAndroid ? parseInt(Platform.Version as string, 10) : undefined;
  },
  /* Navigation */
  get statusBarHeight() {
    return statusBarHeight;
  },
  /* Layout */
  isRTL: I18nManager.isRTL,
  get orientation() {
    return getOrientation(screenHeight, screenWidth);
  },
  get isLandscape() {
    return getOrientation(screenHeight, screenWidth) === orientations.LANDSCAPE;
  },
  get screenWidth() {
    return screenWidth < screenHeight ? screenWidth : screenHeight;
  },
  get screenHeight() {
    return screenWidth < screenHeight ? screenHeight : screenWidth;
  },
  get windowWidth() {
    return windowWidth < windowHeight ? windowWidth : windowHeight;
  },
  get windowHeight() {
    return windowWidth < windowHeight ? windowHeight : windowWidth;
  },
  get isSmallScreen() {
    return screenWidth <= 340;
  },
  get isShortScreen() {
    return screenHeight <= 600;
  },
  get screenAspectRatio() {
    return getAspectRatio();
  },
  get isTablet() {
    return isTablet;
  },
  set isTablet(value: boolean) {
    isTablet = value;
  },
  getSafeAreaInsets: () => {
    const orientation = getOrientation(screenHeight, screenWidth);
    return orientation === orientations.LANDSCAPE
      ? isIphoneX
        ? {left: 48, right: 48, bottom: 24, top: 0}
        : {left: 0, right: 0, bottom: 0, top: 0}
      : isIphoneX
      ? {left: 0, right: 0, bottom: 33, top: 48}
      : {left: 0, right: 0, bottom: 0, top: isIOS ? 20 : 0};
  },
  // Accessibility
  get accessibility() {
    return accessibility;
  },
};

setStatusBarHeight();

Dimensions.addEventListener('change', updateConstants);

export default Constants;
