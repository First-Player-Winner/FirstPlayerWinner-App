import React, { FunctionComponent } from "react";
import { StyleSheet, SafeAreaView, View, TextInput } from "react-native";
import { FPWTheme, LightTheme } from "../themes/interface";
import { Colors } from "../colors";
import { string } from "yup";

let DefaultTextInputProps = {
  theme?: FPWTheme,
  value?: string,
  placeholder?: string,
  secureTextEntry?: booleanstring,
  onChangeText: (v) => voidstring,
  validate?: (v) => booleanstring,
}

const styles = (theme, valid) => {
  return StyleSheet.create({
    textInput: {
      color: valid ? Colors.BLACK : Colors.RED,
    },
    border: {
      borderBottomWidth: 1,
      borderColor: valid ? Colors.BLACK : Colors.RED
    }
  });
}

const DefaultTextInput = ({children, theme, value, placeholder, secureTextEntry,
    onChangeText,validate})=> {
      const _theme = !!theme ? theme : new LightTheme();
      const _placeholder = !!placeholder ? placeholder : '';
      const _secureTextEntry = !!secureTextEntry ? secureTextEntry : false;

      let _value = !!value ? value : '';
      let _valid = (_value.length > 0 && !!validate) ? validate(_value) : true;

      return (
        <View style={styles(_theme, _valid).border}>
          <TextInput 
            value={_value}
            placeholder={_placeholder}
            secureTextEntry={_secureTextEntry}
            onChangeText={(v)=> {onChangeText(v);}}
            style={[styles(_theme, _valid).textInput, {marginBottom: '2%', borderColor: 'red'}]}
          />
        </View>
        );
}

export default DefaultTextInput;