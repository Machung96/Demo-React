import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    bannerArea: {
        flex: 2
    },
    loginArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 20
    },
    accPass: {
        flex: 1,
        paddingTop: 50
    },
    createAcc: {
        flex: 2,
        alignItems: 'center'

    },
    bannerImg: {
        flex: 1,
        height: 250,
        width: 400
    },
    inputText1: {
        height: 50,
        width: 350,
        fontSize: 18,
        borderColor: '#DFDFE1',
        borderWidth: 2,
        paddingLeft: 20,
    },
    inputText2: {
        height: 50,
        width: 350,
        fontSize: 18,
        borderColor: '#DFDFE1',
        borderWidth: 2,
        paddingLeft: 20,
    },
    buttonLogin: {
        height: 45,
        width: 350,
        backgroundColor: '#1977F3',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleButton: {
        paddingTop: 10
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 20
    },
    textAcc: {
        color: '#1977F3',
        fontSize: 20
    },
    buttonAcc: {
        alignItems: 'center'
    },
    stylePadding: {
        paddingTop: 10
    },
    textLine: {
        color: '#000000',
        fontSize: 20,
        paddingTop: 100
    },
    textCreAcc: {
        color: '#1077F7',
        fontSize: 20
    },
    stylePaddingBotom: {
        flex: 1,
        paddingTop: 30
    },
    styleLine: {
        textDecorationLine: 'line-through',
        color: '#CBCCD0'
    },
});

export default styles;