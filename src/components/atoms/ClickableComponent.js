import React, { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { FPWTheme, LightTheme } from "../themes/interface";

const ClickableComponent = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      {children}
    </TouchableOpacity>
  )
}

export default ClickableComponent;