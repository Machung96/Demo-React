import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    groupView1: {
        flex: 1,
        backgroundColor: '#3498DB',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textView: {
        color: '#FFFFFF',
        fontSize: 25,
        paddingBottom: 20
    },
    groupView2: {
        flex: 6,
        backgroundColor: '#F9F9F9',
        paddingTop: 20
    },
    groupInput: {
       flex: 1
    },
    contentText: {
       marginLeft: 20
    },
    boxTextInput: {
        alignItems: 'center'
    },
    groupTextView2: {
        color: '#7D7E79',
        fontSize: 15
    },
    groupTextInput: {
        borderWidth: 2,
        borderColor: '#E3E3E3',
        width: 350,
        height: 40,
        fontSize: 20,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    groupView3: {
        flex: 2,
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: '#2980B9',
        width: 350,
        height: 50,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        
    },
});

export default styles;