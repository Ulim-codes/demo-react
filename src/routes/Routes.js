import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/Login'
import Menu from '../pages/Menu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
                options = {{headerShown: false}}
            />
            <Stack.Screen 

                name="Menu"
                component={Menu}
                options = {{headerShown: false}}
            />
        </Stack.Navigator>
    )
}