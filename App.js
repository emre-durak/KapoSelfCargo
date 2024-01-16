import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CargoDetailsScreen from './screens/CargoDetailsScreen';
import LiveChatScreen from './screens/LiveChatScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: 'black', 
            },
            headerTintColor: 'white', 
            headerTitleStyle: {
              textAlign: 'left', 
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              textAlign: 'left',
            },
          }}
        />
        <Stack.Screen
          name="CargoDetails"
          component={CargoDetailsScreen}
          options={{
            title: 'Cargo Details',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              textAlign: 'left',
            },
          }}
        />
        <Stack.Screen
          name="LiveChat"
          component={LiveChatScreen}
          options={{
            title: 'Live Chat',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              textAlign: 'left',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              textAlign: 'left',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
