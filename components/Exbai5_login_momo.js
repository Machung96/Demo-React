import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 

export default class Exbai5_login_momo extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.userInfor}>
                    <Text style = {styles.hiText}>Xin Chào!</Text>
                    <Text style = {styles.cusTextInfor}>MAC XUAN HUNG</Text>
                    <Text style = {styles.cusTextInfor}>0355637668</Text>
                </View>

                <View style = {styles.loginArea}>

                    <View style = {styles.styleInputText}>
                        <Entypo name="lock" size={25} color="gray" />
                        <TextInput 
                            style = {styles.inputPass}
                            placeholder = "Nhập password"
                            keyboardType = "numeric"
                            autoFocus = {true}
                            secureTextEntry = {true}></TextInput>
                    </View>

                    <View style = {styles.viewOfButton}>
                        <TouchableOpacity style = {styles.buttonLogin}>
                            <Text style = {styles.buttonLoginText}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {styles.accPass}>
                    <TouchableOpacity style = {styles.buttonAction}>
                        <Text style = {styles.buttonActionText}>QUÊN MẬT KHẨU</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttonAction}>
                        <Text style = {styles.buttonActionText}>THOÁT TÀI KHOẢN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BB006A"
    },
    userInfor: {
        marginTop: 100,
        alignItems: 'center'
    },
    loginArea: {
       alignItems: 'center',
       paddingTop: 40
    },
    accPass: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30
    },
    hiText: {
        fontSize: 25,
        lineHeight: 50,
        color: "#fff",
        fontWeight: 'bold',
    },
    cusTextInfor: {
        fontSize: 16,
        marginTop: 10,
        lineHeight: 20,
        color: "#fff",
        fontWeight: "100",
    },
    buttonLogin: {
        height: 55,
        width: 330,
        backgroundColor: "#960058",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLoginText: {
        color: "#FFFFFF",
        fontSize: 15
    },
    viewOfButton: {
        paddingTop: 20
    },
    buttonActionText: {
        color: "#FFFFFF",
        fontSize: 16
    },
    styleInputText: {
        height: 60,
        width: 330,
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    inputPass: {
        height: 60,
        width: 250,
        fontSize: 23,
        textAlign: 'center'
    },
});

