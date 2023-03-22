import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
const Scale = {
  FONT_SIZE_SMALL: moderateScale(14),
  FONT_SIZE_MEDIUM: moderateScale(16),
  FONT_SIZE_LARGE: moderateScale(24),

  PADDING_SMALL: scale(8),
  PADDING_MEDIUM: scale(16),
  PADDING_LARGE: scale(24),

  MARGIN_SMALL: scale(8),
  MARGIN_MEDIUM: scale(16),
  MARGIN_LARGE: scale(24),

  BORDER_RADIUS_SMALL: scale(4),
  BORDER_RADIUS_MEDIUM: scale(8),
  BORDER_RADIUS_LARGE: scale(12),

  ICON_SIZE_SMALL: verticalScale(16),
  ICON_SIZE_MEDIUM: verticalScale(24),
  ICON_SIZE_LARGE: verticalScale(32),
};

export default Scale;
