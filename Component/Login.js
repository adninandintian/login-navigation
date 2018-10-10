import React, {Component} from 'react';
import {View, Image, Text, KeyboardAvoidingView} from 'react-native';
import Form from './Form';

export default class Login extends Component {
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={forstyle.container}>
        <View style={forstyle.logoContainer}>
          <Image
            style={forstyle.logo}
            source={require('../meh.jpg')}
          />
          <Text style={forstyle.title}>silahkeun</Text>
        </View>
        <View style={forstyle.formContainer}>
          <Form/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const forstyle = {
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 170,
    height: 170
  },
  title: {
    color: '#e50000',
    fontWeight: 'bold',
    fontSize: 30
  }
}