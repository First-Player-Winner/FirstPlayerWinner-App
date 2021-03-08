import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PreLogin from './screens/PreLogin'
import Login from './screens/Login'

const AppStack = createStackNavigator();

const Routes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#EEEDEB' },
    }}
  >
    <AppStack.Screen name="Prelogin" component={PreLogin} />
    <AppStack.Screen name="Login" component={Login} />
  </AppStack.Navigator>
);

export default Routes;