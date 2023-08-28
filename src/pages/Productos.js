import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';

export default function Productos() {
    const [myListData, setMyListData] = useState([]);

  useEffect(() => {

    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    console.log("api")
    const API_URL = 'https://mocki.io/v1/c56cb6fb-544f-4981-9150-d6d49db22778';
    const result = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await result.json();
    console.log(json);
    if (json) {
      setMyListData(json);
    } else {
      console.log('Unable to fetch!');
    }

  }
  return (
    <View style={styles.container}>
      <Text>Productos</Text>
      <FlatList data={myListData} renderItem={({ item }) => 
        <View style={styles.item}>
          <Text>Pais: {item.country}</Text> 
          <Text>Capital: {item.city}</Text>
        </View>
        }/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    item: {
      borderRadius: 15,
      backgroundColor: 'red',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
   
  });