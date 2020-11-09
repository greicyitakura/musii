import React from 'react';
import { View,
         Text,
         TextInput,
         Button, 
         Image,} from 'react-native';

export default function Login({ navigation }) {
    return(
        <View style={styles.container}>
            
      <Text style={styles.title}> Me Movie</Text>
      <Text style={styles.subtitle}> A sua sugestão de filmes</Text>
    
      <TextInput
      style={styles.input1}
        placeholder="Digite seu email"
      ></TextInput>
      <TextInput
        style={styles.input2}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      ></TextInput>

            <Text style={styles.login}> Login </Text>
            <Button 
            title="Login"
            onPress={ () => navigation.navigate('Conteudo')}>

            </Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#2c3e50'
    },
    logo:{
      width:100,
      height:100
    },
    title: {
      fontSize:45,
      fontWeight:'bold',
      color:'#f7941d'
    },
    subtitle: {
      fontSize:30,
      color:'#f7941d'
    },
    input1: {
      marginTop:30,
      padding:10,
      width:250,
      backgroundColor: '#fff',
      fontSize:18,
      fontWeight:'bold',
      borderRadius: 8
    },    
    input2: {
      marginTop:10,
      padding:10,
      width:250,
      backgroundColor: '#fff',
      fontSize:18,
      fontWeight:'bold',
      borderRadius: 8,
    },  
    button: {
      width:150,
      height:50,
      backgroundColor: '#f7941d',
      marginTop:10,
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center',
    },
    buttonText: {
      fontSize:20,
      fontWeight:'bold',
      color:'#fff'
    }
  
  });