import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Exbai11_traffic_light from './components/Exbai11_traffic_light';



const App = () => {
  return(
    <SafeAreaView style = {styles.container}>
      <StatusBar style= 'light' />
      <Exbai11_traffic_light></Exbai11_traffic_light>
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
