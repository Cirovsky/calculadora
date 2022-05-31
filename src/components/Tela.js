import React from "react"
import{
    StyleSheet,
    Text,
    View,
    Dimensions
}from 'react-native'

const styles = StyleSheet.create({
    display:{
        height: 145,
        padding: 2,
        justifyContent: 'center',
        backgroundColor: '#222',
        alignItems: 'flex-end',
    },
    displayValue:{
        fontSize: 60,
        color: '#FFF',
    }
})

export default props => {

    return (
        <View style={styles.display}>
            <Text 
                style={styles.displayValue}
                numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}
