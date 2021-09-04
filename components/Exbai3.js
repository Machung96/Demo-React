import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Exbai3 = () => {
    return(
        <View>
            <Text style = {styles.case1}>
                Hello <Text style = {styles.custom1}>World</Text>
            </Text>
            
            <Text style = {styles.case2}>
                Hello <Text style = {styles.custom2}>World</Text>
            </Text>

            <Text style = {styles.case3}>
                Hello <Text style = {styles.custom3}>World</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    case1: {
        fontSize: 40,
        fontWeight: "bold",
    },
    case2: {
        fontSize: 40,
        fontWeight: "bold",
    },
    case3: {
        fontSize: 40,
        color: 'gray',
        fontWeight: "bold",
    },
    custom1: {
        color: 'red',
    },
    custom2: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    custom3: {
        backgroundColor: 'gray',
        color: 'white'
    },
});

export default Exbai3;