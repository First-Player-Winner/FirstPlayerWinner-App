import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PreLogin from './screens/PreLogin'

const AppStack = createStackNavigator();

const Routes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#EEEDEB' },
    }}
  >
    <AppStack.Screen name="Prelogin" component={PreLogin} />
  </AppStack.Navigator>
);

export default Routes;