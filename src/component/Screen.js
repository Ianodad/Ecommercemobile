import React from 'react'
import Constants from "expo-constants";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={styles}>{children}</View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default screen;
