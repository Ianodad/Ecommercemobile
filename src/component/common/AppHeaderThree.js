import React, { Children } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AppHeaderThree = ({children}) => {
    return (
        <View>
            <Text style={styles.header}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        fontSize:26,
    }
});

export default AppHeaderThree;