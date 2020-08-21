import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')


const Button = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={[{
      backgroundColor: '#3E99ED',
      width: width * 0.9,
      height: height * 0.075,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2
    }, props.style]}>
    {props.loading ?
      <ActivityIndicator size='small' color='white' /> :
      <Text style={[{
        color: 'white',
        fontSize: 11
      },props.textStyle]}>{props.text}</Text>
    }
  </TouchableOpacity>
);

export { Button };
