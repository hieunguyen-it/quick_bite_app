import React, {FC, memo} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number | 'small' | 'large';
};

const ProgressBar: FC<Props> = memo(({style, color, loading, size}) => (
  <View style={[styles.progressBar, style]}>
    {loading ? (
      <ActivityIndicator
        style={styles.activityIndicator}
        color={color}
        size={size}
      />
    ) : null}
  </View>
));

const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    backgroundColor: 'transparent',
  },
});

export default ProgressBar;
