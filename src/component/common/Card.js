import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import AppHeader3 from './AppHeader3'
import AppText from './AppText'

const Card = () => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={require("../../../assets/Blackchair2.jpg")}/>
            <View style={styles.cardBody}>
                <AppHeader3 style={styles.title}>Title</AppHeader3>
                 <AppText style={styles.price}>$100</AppText> 
                 <AppText style={styles.detail}>Lorem, ipsum dolor.</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        borderRadius: 15,
        // flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        flex:1,
        paddingHorizontal:20
    },
    image: {
        width: "100%",
        height: 400,
        // alignSelf: "center"
    },
    cardBody: {
        width:"100%",
        alignSelf: "start",
        paddingVertical: 20,
        // alignSelf: "start"


        // justifyContent:"flex-start",

    },
    title: {
        marginBottom: 7,
    },
    price: {
        fontWeight: "bold",
    },
    detail: {
        fontWeight: "500",
    }

});
export default Card;
