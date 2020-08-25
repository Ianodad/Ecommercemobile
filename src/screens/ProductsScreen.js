import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Card from '../component/common/Card'
import Screen from "../component/Screen"

const listings = [
  {
    id: 1,
    title: "Bed",
    price: 100,
    image: require("../../assets/Bedone.jpg"),
  },
  {
    id: 2,
    title: "Desk",
    price: 1300,
    image: require("../../assets/bikedesk.jpg"),
  },
  {
    id: 3,
    title: "Chair",
    price: 1200,
    image: require("../../assets/Blackchair2.jpg"),
  },
  {
    id: 4,
    title: "Chair",
    price: 1000,
    image: require("../../assets/chiarsaw.jpg"),
  },
  {
    id: 5,
    title: "Mesh",
    price: 1500,
    image: require("../../assets/Meshchair.jpeg"),
  },
];


  
const ProductsScreen = () => {
    return (
            <Screen style={styles.container}>
                <View style={styles.productsView}>
                    <FlatList
                        style={styles.flat}
                        data={listings}
                        // numColumns={2}
                        // columnWrapperStyle={styles.cardContainer}
                        keyExtractor={(listing) => listing.id.toString()}
                        renderItem={({ item }) => (
                            <Card
                                style={styles.card}
                                title={item.title}
                                subTitle={"$" + item.price}
                                image={item.image}
                            />
                        )}
                    />
                </View>
            </Screen>
		);
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    productsView: {
        // flexDirection: 'row',
        // width: '100%',
    },
    // cardContainer : {
    //         flex: 0.2,
    //         justifyContent: "space-around"
    // }
    
});
export default ProductsScreen;