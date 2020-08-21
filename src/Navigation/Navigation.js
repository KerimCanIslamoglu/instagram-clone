import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text,  Image, TouchableOpacity } from 'react-native';


import Login from '../Screens/Login'
import List from '../Screens/List'

import { navigationRef } from './RootNavigation';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="List" component={List}
         options={() => ({
          title: '',
          headerTitle: () => (
            <Image style={{width:100,height:30,marginTop:5}} source={require('../img/insta-logo.png')}/>

          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
            >
             <Image style={{width:30,height:30}} source={require('../img/share.png')}/>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 10
              }}
            >
             <Image style={{width:30,height:30}} source={require('../img/camera.png')}/>
            </TouchableOpacity>
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;