import React, { Component } from 'react'
import { Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Styles_bai8';

import BannerFB from '../assets/banner.png'

const Exbai8_login_fb = () => {
    return(
        <KeyboardAvoidingView 
            style = {styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {/* phan mo dau banner */}
           <View>
                <Image 
                    style = {styles.banner} 
                    source = {BannerFB}>  
                </Image>
           </View>

        {/* phan login -textinput-button */}
           <View style = {styles.content}>
               <TextInput 
                    style = {[styles.input, styles.inputUserName]}
                    placeholder = "Số điện thoại hoặc email"
                    placeholderTextColor = '#CDCDCF'>
                </TextInput>

                <TextInput 
                    style = {[styles.input, styles.inputPassWord]}
                    placeholder = "Mật khẩu"
                    placeholderTextColor = '#CDCDCF'
                    secureTextEntry = {true}>
                </TextInput>

                <TouchableOpacity style = {styles.buttonLogin}>
                    <Text style = {styles.textLogin}>Đăng nhập</Text>
                </TouchableOpacity>
               
           </View>

        {/* phan ho tro -button */}
           <View style = {styles.access}>
                <TouchableOpacity style = {styles.link}>
                    <Text style = {styles.linkText}>Quên mật khẩu?</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.link}>
                    <Text style = {styles.linkText}>Quay lại</Text>
                </TouchableOpacity>
           </View>

        {/* phan cuoi */}
           <View style = {styles.footer}>
               <View style = {styles.flexLine}>
                    <View style = {styles.line}></View>
                    <Text style = {styles.textLine}>HOẶC</Text>
                    <View style = {styles.line}></View>
               </View>

               <TouchableOpacity style = {styles.buttonCreAcc}>
                    <Text style = {styles.textFooter}>Tạo tài khoản mới</Text>
               </TouchableOpacity>
           </View>

        </KeyboardAvoidingView>
    );
}

export default Exbai8_login_fb;