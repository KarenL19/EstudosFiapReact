import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



//Importar todos os componetes, o routes vai cuidar da navegação, por isso ele irá gerenciar os componentes
import PrimeiroComponente from './components/primeiroComponente';
import ParOuImpar from './components/ParOuImpar';
import Contador from './components/Contador';


//Inserir a função/metodo (que cria a navegação) na variavel para facilitar utilizar a função
const AppStack = createStackNavigator();

export default class Routes extends Component{
    render() {
    return(
        <NavigationContainer>

            <AppStack.Navigator
            headerMode="none"
            initialRouteName="primeiroComponente"
            >
                <AppStack.Screen name="PrimeiroComponente" component={PrimeiroComponente}/> 
                <AppStack.Screen 
                    name="ParOuImpar" 
                    component={ParOuImpar}
                    initialParams={{numero: 4}}/>
                <AppStack.Screen name="Contador" component={Contador}/>

            </AppStack.Navigator>

        </NavigationContainer>
    );
}


}