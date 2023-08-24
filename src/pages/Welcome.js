import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, ImageBackground, Alert  } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome({navigation}) {
  
  const [name, setName] = useState('');
  const login= async()=> {
    console.log(name);
    if (name.length==0){
      Alert.alert("Atencion", "Ingrese su usuario para continuar!")
    }
    else {
      var info={
        "Name":name,
        "Age":""
      }
      await AsyncStorage.setItem("userInfo", JSON.stringify(info));
      navigation.navigate("Home");
    }
    

    
  }
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