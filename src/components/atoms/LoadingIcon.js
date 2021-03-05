import React, { FunctionComponent } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "../colors";

let LoadingIconProps = {
    size?: 'small' | 'large',
};

const styles = StyleSheet.create({
    loadingStyle: {
    }
});

const LoadingIcon = ({ size }) => {
    const _size = !!size ? size : 'large';
    return (
        <ActivityIndicator 
            style={styles.loadingStyle}
            size={_size}
            color={Colors.YELLOW}
        />
    );
}

export default LoadingIcon;