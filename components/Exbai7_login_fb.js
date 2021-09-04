import React, { Component } from 'react'
import { Image, SafeAreaView, TextInput, TouchableOpacity, View, Text } from 'react-native'
import styles from '../styles/Styles_login_fb'

import BannerImg from '../assets/banner.png'

export default class Exbai7_login_fb extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.bannerArea}>
                    <Image style = {styles.bannerImg} source = {BannerImg}></Image>
                </View>

                <View style = {styles.loginArea}>
                    <TextInput 
                        style = {styles.inputText1}
                        placeholder = "Số điện thoại hoặc email"></TextInput>

                    <TextInput 
                        style = {styles.inputText2}
                        placeholder = "Mật khẩu"
                        secureTextEntry = {true}></TextInput>
                        
                    <View style = {styles.styleButton}>
                        <TouchableOpacity style = {styles.buttonLogin}>
                            <Text style = {styles.loginText}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style = {styles.accPass}>
                    <TouchableOpacity style = {styles.buttonAcc}>
                        <Text style = {styles.textAcc}>Quên mật khẩu?</Text>
                    </TouchableOpacity>

                    <View style = {styles.stylePadding}>
                        <TouchableOpacity style = {styles.buttonAcc}>
                            <Text style = {styles.textAcc}>Quay lại</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {styles.createAcc}>
                    <Text style = {styles.textLine}>
                        <Text style = {styles.styleLine}>{"                       "}</Text>
                            Hoặc
                        <Text style = {styles.styleLine}>{"                       "}</Text>
                    </Text>

                    <View style = {styles.stylePaddingBotom}>
                        <TouchableOpacity style = {styles.buttonCreAcc}>
                            <Text style = {styles.textCreAcc}>Tạo tải khoản mới</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
