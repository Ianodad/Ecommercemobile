import React, { Children } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const AppHeaderThree = ({children}) => {
    return <Text style={styles.header}>{children}</Text>
}

const styles = StyleSheet.create({
    header : {
        fontSize: RFPercentage(3.5),
    }
});

export default AppHeaderThree;