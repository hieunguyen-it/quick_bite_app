import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {Login, Register} from '@screens';

const Stack = createNativeStackNavigator();

const AuthStack = ({route}: {route: any}) => (
  <Stack.Navigator
    screenOptions={{headerShown: false, gestureEnabled: false}}
    initialRouteName={RouteName.Login}>
    <Stack.Screen
      name={RouteName.Login}
      component={Login}
      initialParams={route.params}
    />
    <Stack.Screen name={RouteName.Register} component={Register} />
  </Stack.Navigator>
);

export default AuthStack;
