import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, ImageBackground, Alert  } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome({navigation}) {
  
  const [name, setName] = useState('');
  const checkUserName=()=> 
  {
    console.log("aasd")
    try {
      console.log("Hola")
      AsyncStorage.getItem('userInfo')
        .then(value => {
          console.log(value)
          if (value != null) {
            navigation.navigate("Home");
           
          }
        })
    } catch (error) {
      console.log(error);
    }
  }
  const login= async()=> {
    
    if (name.length==0){
      Alert.alert("Atencion", "Ingrese su usuario para continuar!")
    }
    else {
      var info={
        "Name":name
      }
      await AsyncStorage.setItem("userInfo", JSON.stringify(info));
      navigation.navigate("Home");
    }
    
    

    
  }
  useEffect(() => {
    checkUserName();
  }, []);
  return (
    
      <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
        <View style={{alignItems: 'center'}}>
        
       
        </View>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Button
        onPress={login}
        title="Ingresar"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
/>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});