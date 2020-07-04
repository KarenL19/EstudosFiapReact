// Importação do node modulos - dependencia do packege.json
import React from 'react';
import {StatusBar} from 'react-native';

import Rountes from './src/routes'


export default function App() {
 
  return (
    <>
      <StatusBar 
      barStyle= "dark-content"
      backgroundColor="transparent"
      translucent
      />
      
      <Rountes/>
      
    </>
  );
}



