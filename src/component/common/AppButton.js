import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import AppText from './AppText';
import colors from '../../styleconfig/colors';

const AppButton = ({title, color="primary" }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: colors[color] }]}>
            <AppText>{title}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: '100%',
        marginVertical: 10

    }
});

export default AppButton;