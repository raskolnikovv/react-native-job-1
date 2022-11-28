import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const image = { uri: "https://images.unsplash.com/photo-1626958986943-fe3a70e05dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80" };

const Home = ({navigation}) => {
  function  navegarParaForm() {
    navigation.navigate('Form');
  }

  return (
    
    <SafeAreaView style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    
      <Text style={styles.title}>Bem Vindo à{"\n"} Lista de Imagens </Text>
      <Text style={styles.subtitle}>Clique em continuar para se cadastrar</Text>
      <TouchableOpacity onPress={navegarParaForm} style={styles.buttonHome}>
        <Text style={styles.textButtonHome}>Continuar</Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    color: 'black'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'white',
    padding: 55
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'white',
  },
  buttonHome: {
    position: 'absolute',
    bottom: 160,
    padding: 16,
    width: 120,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  textButtonHome: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'black'
  }
});
