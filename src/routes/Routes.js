import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator   
        initialRouteName="Welcome"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 20,
           
          }
        }}>
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name="Home"
                component={Home}
                
            />
        </Stack.Navigator>
    )
}