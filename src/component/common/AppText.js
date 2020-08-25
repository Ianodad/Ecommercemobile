import React, { Children } from 'react'
import { View, Text, StyleSheet, Platform} from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const AppText = ({children}) => {
    return <Text>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: RFPercentage(2),
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText