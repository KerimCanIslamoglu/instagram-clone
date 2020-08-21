import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import { USER } from '../Actions/types'

import { connect } from 'react-redux';

import { Button, Input } from '../Components'

import { login } from '../Actions'

const { width, height } = Dimensions.get('window');

const Login = (props) => {

    const [email, setEmail] = useState('kerim@kerim.com');
    const [password, setPassword] = useState('123456');
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.headView}>
                    <View style={styles.orView}>
                        <View style={styles.lineView}>
                        </View>
                        <Text style={styles.orText}>OR</Text>
                        <View style={styles.lineView}>
                        </View>
                    </View>
                    <Button style={styles.facebookButton} text={'Continue with Facebook'} />
                    <Image style={styles.logoImage} source={require('../img/insta-logo.png')} />
                </View>
                <View style={styles.centerView}>
                    <View style={styles.formView}>
                        <Input placeholder={'Phone number, username, or email'} value={email} onChangeText={(value) => setEmail(value)} />
                        <Input placeholder={'Password'} secureTextEntry value={password} onChangeText={(value) => setPassword(value)} />
                        <Button style={styles.facebookButton} text={'Log in'}
                            onPress={() => {
                                let obj = {
                                    email,
                                    password
                                }
                                props.login(obj);
                                // console.log("useryoken", USER.token)
                                // if (USER.token != null)
                                //     props.navigation.navigate('List')
                            }} />

                        <Button style={styles.forgotPasswordButton} text={'Forgot password ?'} textStyle={{ color: '#3E99ED' }} />
                    </View>

                    <TouchableOpacity style={styles.bottomView}>
                        <Text style={styles.haveAccountText}>Don't have account ? </Text><Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </KeyboardAvoidingView>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    headView: {
        flex: 2,
        flexDirection: 'column-reverse',
        alignItems: 'center'
    },
    centerView: {
        flex: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formView: {
        marginTop: height * 0.025
    },
    bottomView: {
        flexDirection: 'row',
        borderTopColor: '#9B9B9C',
        borderTopWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        padding: height * 0.02,
        backgroundColor: '#FAFAFA'
    },
    logoImage: {
        width: width * 0.6,
        height: height * 0.1
    },
    facebookButton: {
        marginTop: height * 0.025
    },
    lineView: {
        borderBottomColor: '#9B9B9C',
        borderBottomWidth: 0.2,
        width: width * 0.41,
        margin: width * 0.01
    },
    orView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.025
    },
    orText: {
        color: '#9B9B9C',
        fontSize: 12
    },
    forgotPasswordButton: {
        marginTop: height * 0.05,
        backgroundColor: 'white'
    },
    haveAccountText: {
        color: '#9B9B9C',
        fontSize: 10
    },
    signUpText: {
        fontSize: 10
    }

});

const mapStateToProps = ({ loginResponse }) => {
    const { user } = loginResponse;
    return { user };
};
export default connect(mapStateToProps, { login })(Login);



