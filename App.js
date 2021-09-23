import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Exbai13_keyboard from './components/Exbai13_keyboard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const App = () => {
  return(
    <View style = {styles.container}>
      <StatusBar style= 'light' />
      <Exbai13_keyboard></Exbai13_keyboard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // Mau background cho bai 9 va 11
    // backgroundColor: '#020204'
  },
});

export default App;
