import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Form = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Preencha os seus dados e clique em cadastrar:</Text>
      <TextInput style={styles.textInput}
        onChangeText={setName}
        value={name}
        placeholder="Coloque o seu nome"
      ></TextInput>
       <TextInput style={styles.textInput}
        onChangeText={setEmail}
        value={email}
        label="Email"
        placeholder="Coloque o seu email"
      ></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate("List")} style={styles.buttonForm}>
        <Text style={styles.textButtonForm}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'orange',
    padding: 55
  },
  textInput: {
    borderRadius: 10,
    margin: 10,
    width: 300, 
    height: 35,
    backgroundColor: "white",
    textAlign: 'center',
    color: "black",
    fontSize: 20,
  },
  buttonForm: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'orange',
    width: 150, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonForm: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'black'
  }
});