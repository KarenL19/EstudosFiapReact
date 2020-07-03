import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import { render } from 'react-dom';

import PrimeiroComponente from './src/components/primeiroComponente';
import ParOuImpar from './src/components/ParOuImpar'


export default function App() {
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      barStyle= "dark-content"
      backgroundColor="transparent"
      translucent
      />
      <Text>hello world</Text>
      <PrimeiroComponente/>
      <ParOuImpar numero={4}/>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 500
  },
});
