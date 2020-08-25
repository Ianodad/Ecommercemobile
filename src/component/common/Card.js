import React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { View, Text, Image, StyleSheet } from 'react-native'

import AppHeaderThree from './AppHeaderThree'
import AppText from './AppText'

const Card = ({title, subTitle, image }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} resizeMode='contain' source={image}/>
            <View style={styles.cardBody}>
                {/* <AppHeaderThree style={styles.title}>Product</AppHeaderThree> */}
                <AppHeaderThree>{title}</AppHeaderThree>
                <AppText style={styles.price}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        borderRadius: 15,
        width: '100%',
        flex:1,
        paddingHorizontal:20,
        marginVertical: 10
    },
    image: {
        width: "100%",
        height: 200,
    },
    cardBody: {
        marginTop:10
    },
    title: {
        fontSize: RFPercentage(3.5), 
        // height: 30,
    },
    price: {
        fontWeight: "bold",
    },
    detail: {
        width: "100%"
        // position: 'absolute',
    }

});

export default Card;
