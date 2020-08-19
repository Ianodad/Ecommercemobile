import React, { Children } from 'react'
import { View, Text } from 'react-native'

const AppText = ({children}) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

export default AppText