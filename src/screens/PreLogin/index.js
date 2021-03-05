import React, { useState, useEffect } from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, View, Image, Text, ImageBackground, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DefaultButton from "../../components/molecules/DefaultButton";
import { Container, BtnToNavigate, TextEventos, TextArtigos, TextBtn } from './style';
import { LinearGradient } from 'expo-linear-gradient';

const PreLogin = () => {

  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  }
  const image = require('../../assets/welcome.png');
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1}}>
        <ImageBackground source={image} style={{flex: 1}}>
          <View style={{width: '100%', height: '100%', position: 'absolute', bottom: 0}}>
            <LinearGradient 
              style={{position: 'absolute', bottom: 0, width: '100%', height: '20%'}} 
              colors={['transparent', 'black', 'black']}>
            </LinearGradient>
          </View>
          <View style={{width: '100%', height: '100%', justifyContent: 'flex-end', padding: '10%', position: 'absolute', bottom: 0}}>
            <View style={{width: '100%' }}>
              <DefaultButton
                title="Entrar"
                onPress={()=>navigation.navigate(AuthScreens.Login)}/>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default PreLogin;