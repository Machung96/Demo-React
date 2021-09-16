import React, { Component, useState } from 'react'
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Styles_bai11';

import Imgtraffic from '../assets/traffic-light.png'
import ImgtrafficRed from '../assets/traffic-light-red.png'
import ImgtrafficYellow from '../assets/traffic-light-yellow.png'
import ImgtrafficGreen from '../assets/traffic-light-green.png'

const Exbai11_traffic_light = () => {

    const [color, setColor] = useState("");

    let imgSource = Imgtraffic;
    if (color === "red") {
        imgSource = ImgtrafficRed;
    }
    if (color === "yellow") {
        imgSource = ImgtrafficYellow;
    }
    if (color === "green") {
        imgSource = ImgtrafficGreen;
    }

    function turnOn(color) {
        setColor(color);
    }

    return (
        <View style = {styles.container}>
        {/* Component Img Light */}
            <Image
                source = {imgSource}
                style = {styles.TrafficLight}>
            </Image>

        {/* Components Button */}
            <View style = {styles.buttonGroup}>
                <TouchableHighlight 
                    style = {styles.buttonRed}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => turnOn("red")}>
                    <Text style = {styles.buttonText}>Red</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonYellow}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => turnOn("yellow")}>
                    <Text style = {styles.buttonText}>Yellow</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style = {styles.buttonGreen}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => turnOn("green")}>
                    <Text style = {styles.buttonText}>Green</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default Exbai11_traffic_light
