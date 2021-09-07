import React, { Component, useState } from 'react'
import { Image, Switch, View } from 'react-native'

import ImgLightOff from '../assets/lightOff.png'
import ImgLightOn from '../assets/lightOn.png'
import styles from '../styles/Styles_bai9'


const Exbai9_turn_light = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style = {styles.container}>
            {/* Img Light Off */}
                <Image 
                    source = {isEnabled ? ImgLightOn : ImgLightOff}
                    style = {styles.lightOff}>
                </Image>

                <Switch
                    style = {styles.switch}
                    trackColor={{ false: "#767577", true: "#02DA84" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}>
                </Switch>
        </View>
    );
}

export default Exbai9_turn_light;
