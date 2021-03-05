import React, { FunctionComponent } from "react";
import { StyleSheet, SafeAreaView, View, TextInput, Dimensions } from "react-native";
import { FPWTheme, LightTheme } from "../themes/interface";
import { Colors } from "../colors";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

let SearchTextInputProps = {
  value?: string,
  onChangeText: (v) => ({})
}

const styles = StyleSheet.create({
  containerMain: {
    width: '100%',
    height: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerInput: {
    width: '80%',
    height: '100%',
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
  },
  containerIcon: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%'
  },
  containerFilter: {
    width: Dimensions.get('screen').width / 12,
    height: Dimensions.get('screen').width / 12,
    backgroundColor: '#00AF54',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8
  }
});

const SearchTextInput = ({
    value, onChangeText,
}) => {
    let _value = !!value ? value : '';
    return (
      <View style={styles.containerMain}>
        <View style={styles.containerInput}>
          <View style={styles.containerIcon}>
            <EvilIcons name="search" size={24} color="black" />
          </View>
          <TextInput 
            value={_value}
            placeholder= 'Buscar campeonato'
            onChangeText={(v)=> {onChangeText(v);}}/>
        </View>
        <View style={styles.containerFilter}>
          <AntDesign name="filter" size={20} color="black" />
        </View>
      </View>
    );
}

export default SearchTextInput;