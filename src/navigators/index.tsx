import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RouteName from './RouteName';
import AuthStack from './AuthStack';
import {navigationRef} from '@services/navigation/NavigationHelpers';
import OnBoardingStack from './OnBoardingStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: false}}>
          <Stack.Screen
            name={RouteName.OnBoardingStack}
            component={OnBoardingStack}
          />
          <Stack.Screen name={RouteName.AuthStack} component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
