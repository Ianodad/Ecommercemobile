import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import AppButton from '../component/common/AppButton';
import AppText from '../component/common/AppText';

const AccessScreen = () => {
    return (
        <ImageBackground style={styles.background} source={require("../../assets/WireDiningChairTop.jpg")}>
            <View style={styles.logoContainer}>
            <Image 
                style={styles.logo}
                source={require('../../assets/logo.png')}
                />
            <AppText style={styles.tagline}>Go Get It</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="SignIn"/>
                <AppButton title="Register" color="secondary"/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background : {
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center"
    },
    logo : {
        width: 100,
        height: 100
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: "white"
    }

})

export default AccessScreen;
