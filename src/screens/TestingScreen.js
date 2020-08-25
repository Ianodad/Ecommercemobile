import React from 'react'
import { View, Text } from 'react-native'

const TestingScreen = () => {
    return (
    <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF",
        }}
    >
        <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text>hello world 1.........</Text>
            <Text>hello world 1.........</Text>
            <Text>hello world 1.........</Text>
            <Text>hello world 1.........</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <Text>hello world 2.........</Text>
            <Text>hello world 2.........</Text>
            <Text>hello world 2.........</Text>
            <Text>hello world 2.........</Text>
        </View>
    </View>
		);
}

export default TestingScreen
