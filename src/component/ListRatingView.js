import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styleconfig/colors';
import {AntDesign } from '@expo/vector-icons'

const ListRatingView = () => {
    return (
        <View style={styles.container}>
        <Text>Hello</Text>
            <AntDesign name="staro" size={24} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ListRatingView

