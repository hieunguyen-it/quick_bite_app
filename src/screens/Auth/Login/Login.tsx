import React, {FC} from 'react';
import {Text, View} from 'react-native';

import Scale from '@utils/constants/scale';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

// type Props = {
//   // product: number;
// };

const Login: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: Scale.FONT_SIZE_SMALL}}>
          Just Sign in, we’ll do the cooking
        </Text>
      </View>

      <View
        style={{
          padding: Scale.PADDING_MEDIUM,
          borderRadius: Scale.BORDER_RADIUS_LARGE,
        }}>
        <Text>Some content goes here...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
