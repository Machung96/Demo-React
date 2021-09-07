import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lightOff: {
        width: windowWidth,
        height: windowWidth * 925/631
    },
    switch: {
        transform: [{ scale: 1.5 }]
    }
});

export default styles;