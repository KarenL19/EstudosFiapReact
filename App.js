import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';

import PrimeiroComponente from './src/components/primeiroComponente';


export default function App() {
 
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
      <PrimeiroComponente/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
