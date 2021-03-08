import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, Image, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import styles from './style';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logoVisibility, setLogoVisibility] = useState(true)

  logar = async () => {
    this.props.navigation.navigate('Home');
  
  }
  
  cadastrar = () => {
    this.props.navigation.navigate('Register')
  }
  ocultar = () => {
    this.setState({logoVisibility: false })
  }

  return(
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"} >
      <SafeAreaView style={styles.containerGeral}>
        <View style={styles.containerSuperior}>
          {logoVisibility ?
            <View style={styles.containerLogo}>
              <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
            </View> :
            <View></View>
          }
          <View style={styles.viewTexto}>
            <Text style={styles.texto}>Pronto para ser o</Text>
            <Text style={styles.texto}>maior vencedor?</Text>
            <Text>Acesse sua conta e inicie sua jornada!</Text>
          </View>
          <TextInput 
            maxLength={30}
            onChangeText={email => setEmail(email)}
            placeholder='Email'
            style={styles.estiloInput}
            value={email}
            placeholderTextColor="#020C28"
            onFocus={() => setLogoVisibility(false)}
            onBlur={() => setLogoVisibility(true)}>
          </TextInput>

          <TextInput 
            maxLength={30}
            onChangeText={password => setPassword(password)}
            placeholder='*******'
            secureTextEntry={true}
            style={styles.estiloInput}
            value={password}
            placeholderTextColor="#020C28"
            onFocus={() => setLogoVisibility(false)}
            onBlur={() => setLogoVisibility(true)}>
          </TextInput>
          <View style={styles.containerRecuperarSenha}>
            <TouchableOpacity onPress={() => this.cadastrar()}>
              <Text style={styles.textRecuperarSenha}>Recuperar senha?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerInferior}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.logar()}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.cadastrar()}>
            <Text style={styles.fontCadastrar}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Login;