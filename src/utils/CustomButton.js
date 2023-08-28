import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomButton(props) {
  return (
    <View style={styles.viewStyle}> 
        <TouchableOpacity onPress={props.onPressFunction} style={styles.buTouch} hitSlop={{top:10, bottom:10, left:10, right:10}}>
            <Text style={styles.texto}>{props.title}</Text>
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    buTouch: {
        height: 50,
        width:200,
        margin: 12,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#c10003'
      
    },
    texto: {
        color:'#fff',
        fontSize:16,
        fontWeight:'500'
    },
    viewStyle: {
   
        justifyContent: 'center',
        
        alignItems:'center',
        padding:10
        
        
      },
  });