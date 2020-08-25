import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import AppHeaderThree from '../component/common/AppHeaderThree';
import AppText from '../component/common/AppText';
import Screen from "../component/Screen"
import ListDetail from '../component/ListDetail';
import ListRatingView from '../component/ListRatingView';

const ProductScreen = () => {
    return (
            <Screen style={styles.container}>
                <AppHeaderThree>Chair One</AppHeaderThree>
                <Image loading="lazy"  resizeMode="contain"  style={styles.image} source={require("../../assets/chiarsaw.jpg")}/>

                <ListDetail 
                    image={require("../../assets/capenter.jpg")}
                    title="John Smith"
                    onPress={() => console.log("Message selected", item)}
                    subTitle="5 listings"
                    renderRightActions={()=> (<ListRatingView/>)}
                />
                {/* <AppText>designed by John Doe</AppText>
                <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit ullam enim blanditiis debitis possimus. </Text>
                <Text>Add To Cart</Text> */}
            </Screen>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        // justifyContent: 'center',

    },
    image : {
        // width: Dimensions.get('window').width,
        width:"100%",
        height: 200
        
    }
})

export default ProductScreen;

