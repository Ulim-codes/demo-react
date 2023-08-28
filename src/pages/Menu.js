import { Text, View } from 'react-native'
import React, { PureComponent } from 'react'
import Profile from './Profile'
import Logout from './Logout'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Productos from './Productos';

const Drawer = createDrawerNavigator();
export default function Menu() {
 
    return (
       
    <Drawer.Navigator>
        <Drawer.Screen name="Principal" component={Home}  options = {{
                    headerStyle:{
                    backgroundColor: '#c10003'
                    }, 
                    headerTitleStyle: {
                        color: '#fff',
                      },
                }}/>
        <Drawer.Screen name="Productos" component={Productos} />
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="Cerrar Sesion" component={Logout} />
    </Drawer.Navigator>
          
    )
  
}