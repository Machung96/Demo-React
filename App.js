import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Exbai8_login_fb from './components/Exbai8_login_fb';


const App = () => {
  return(
    <SafeAreaView style = {styles.container}>
      <StatusBar style="light" />
      <Exbai8_login_fb></Exbai8_login_fb>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
