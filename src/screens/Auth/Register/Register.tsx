import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Scale from '@utils/constants/scale';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {goBack} from '@services/navigation/NavigationHelpers';
import {Colors} from '@styles';

// type Props = {
//   // product: number;
// };

const Register: FC = () => {
  const backToLogin = () => {
    goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: Scale.FONT_SIZE_SMALL}}>Register Screen</Text>
      </View>

      <TouchableOpacity
        style={{
          padding: Scale.PADDING_MEDIUM,
          borderRadius: Scale.BORDER_RADIUS_LARGE,
        }}
        onPress={backToLogin}>
        <Text style={{color: Colors.red700}}>Back To Login Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
