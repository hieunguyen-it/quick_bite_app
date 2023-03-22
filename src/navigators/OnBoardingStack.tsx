import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {Onboading} from '@screens';

const Stack = createNativeStackNavigator();

const OnBoardingStack = ({route}: {route: any}) => (
  <Stack.Navigator
    screenOptions={{headerShown: false, gestureEnabled: false}}
    initialRouteName={RouteName.Onboading}>
    <Stack.Screen
      name={RouteName.Onboading}
      component={Onboading}
      initialParams={route.params}
    />
  </Stack.Navigator>
);

export default OnBoardingStack;
