import React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Input = (props) => (
    <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        value={props.value}
        onChangeText={(value) => props.onChangeText(value)}
        style={[{
            width: width * 0.9,
            height: height * 0.075,
            backgroundColor: '#FAFAFA',
            borderWidth: 0.2,
            borderColor: 'gray',
            borderRadius: 2,
            paddingLeft: 3,
            marginBottom: height * 0.02,
            fontSize: 10,
        }, props.style]}
    />
);

export {Input};

