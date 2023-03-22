import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {ScaledSheet} from 'react-native-size-matters';

interface CircleImageProps extends FastImageProps {}

const CircleImage: React.FC<CircleImageProps> = ({source, ...props}) => {
  return <FastImage source={source} style={styles.slideImage} {...props} />;
};

const styles = ScaledSheet.create({
  slideImage: {
    width: '266@ms',
    height: '266@ms',
    borderRadius: '133@ms',
    resizeMode: 'cover',
  },
});

export default CircleImage;
