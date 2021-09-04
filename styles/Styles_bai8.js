import { BackHandler, StyleSheet } from 'react-native'

const text = {
    fontSize: 20,
    color: '#1C6EDE'
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        width: "100%",
        height: null,
        aspectRatio: 750/460,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    input: {
        borderWidth: 1,
        height: 50,
        width: 350,
        fontSize: 20,
        borderColor: '#CDCDCF',
        color: '#333333',
        paddingHorizontal: 15
    },
    inputUserName: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    inputPassWord: {
        borderTopWidth: 0,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    buttonLogin: {
        height: 50,
        width: 350,
        backgroundColor: '#1977F3',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    textLogin: {
        fontSize: 20,
        color: '#B4CAFB'
    },
    access: {
        flex: 1
    },
    link: {
        alignItems: 'center',
        marginVertical: 10
    },
    linkText: {
        ...text
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 0
    },
    flexLine: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "70%"
    },
    line: {
        borderColor: '#CBCCD0',
        borderWidth: 1,
        flex: 1
    },
    textLine: {
        fontSize: 20
    },
    buttonCreAcc: {
        height: 50,
        width: 350,
        backgroundColor: '#E7F3FF',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50
    },
    textFooter: {
        ...text
    }
});

export default styles;