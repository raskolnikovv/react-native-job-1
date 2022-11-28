import React from 'react';
import { View, Image, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const List = ({ navigation }) => {
  const [images, setimages] = React.useState([
    require('../assets/image1.jpg'),
    require('../assets/image2.jpg'),
    require('../assets/image3.jpg'),
    require('../assets/image4.jpg'),
    require('../assets/image5.jpg')
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
    showsHorizontalScrollIndicator={false} 
    data={images}
    renderItem={ ({ item, index }) => (
      <Image source={item}
        key={index} 
        style={{
          width:400,
          height:350,
          borderWidth:2,
          borderColor:'#d35647',
          resizeMode:'cover',
          margin:8
        }}
      />
    )}
  />
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.buttonList}>
        <Text style={styles.textButtonList}>LogOut</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    width: 50,
    height: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  listItem: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10
  },
  buttonList: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'orange',
    width: 150, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonList: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'black'
  },
});