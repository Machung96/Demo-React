import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Exbai9_turn_light from './components/Exbai9_turn_light';



const App = () => {
  return(
    <SafeAreaView style = {styles.container}>
      <StatusBar style= 'light' />
      <Exbai9_turn_light></Exbai9_turn_light>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020204'
  },
});

export default App;
