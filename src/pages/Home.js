import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { FlatList } from 'react-native';

export default function Home() {

  const [name, setName] = useState('');
  const [myListData, setMyListData] = useState([]);

  useEffect(() => {
    getData();
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

  const getData = () => {
    try {
      AsyncStorage.getItem('userInfo')
        .then(value => {
          if (value != null) {
            let user = JSON.parse(value);
            setName(user.Name);

          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <FlatList data={myListData} renderItem={({ item }) => 
        <View>
          <Text>{item.country}</Text> 
          <Text>{item.city}</Text>
        </View>
        }/>
    </View>
  )
}