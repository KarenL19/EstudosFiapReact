import React,{Component} from 'react';
import { View,Text, StyleSheet, Button, Image } from 'react-native';
import axios from 'axios';

export default class PrimeiroComponente extends Component {
    state = {
        user: {}
      
    }

    componentDidMount(){
        axios.get("https://reqres.in/api/users").then(response => {
            this.setState({ user: response.data.data[2]})
            console.log(this.state.user);
    })
    }
    render(){
        return(
            <View>
                <Image
                style={{
                    width:200,
                    height:200
                }}
                source={{uri: this.state.user.avatar }}/>
                <Text style={styles.titulo}>Meu primeiro componente está funcionando?</Text>
                <Text>Meu primeiro componente está funcionando?</Text>
                <Text style={styles.paragrafo}>{this.state.email}</Text>

                <View>
                    <Text>{this.state.user.email}</Text>
                    <Text>{this.state.user.id}</Text>
                    <Text>{this.state.user.first_name} {this.state.user.last_name}</Text>
                </View>

                <Button
                    title="ParOuImpar"
                    onPress={() => this.props.navigation.navigate("ParOuImpar")}
                />
                   <Button
                    title="Contador"
                    onPress={() => this.props.navigation.navigate("Contador")}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize:40,
        fontStyle: "italic",
        color: "#8531AB"
    },
    paragrafo:{
        fontSize: 20,
        color: "#8531AB"
    }
});