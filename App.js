import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';

import Routes from './src/routes';

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <View style={{ backgroundColor: '#00183C', flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  )
};

export default App;