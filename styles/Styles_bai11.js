import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styleBorderRadius = {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    TrafficLight: {
        width: windowWidth,
        height: windowWidth * 1183/1080
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonText: {
        color: '#EDEBED',
        fontSize: 20
    },
    buttonRed: {
        ...styleBorderRadius,
        backgroundColor: 'red'
    },
    buttonYellow: {
        ...styleBorderRadius,
        backgroundColor: 'orange'
    },
    buttonGreen: {
        ...styleBorderRadius,
        backgroundColor: 'green'
    },
});

export default styles;