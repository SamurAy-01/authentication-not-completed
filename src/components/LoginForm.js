import React, {Component} from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";

import { Input } from "./common";
import {firebase} from 'firebase'

class LoginForm extends Component {

    constructor(props) {
      super(props);
      this.onButtonClicked = this.onButtonClicked.bind(this);
      // Diğer bileşen başlatma kodları...
    }  

    state = {
        email: '',
        password: '',
        error: ''
    }

    onButtonClicked = () => {
        const { email, password } = this.state;

      
        if (email.trim() === '' || password === '') {
          this.setState({
            error: 'Please enter email and password.',
          });
          return;
        }else{
          firebase.auth().signInWithEmailAndPassword(email, password)
          .catch((err) => {
              if (err.code === 'auth/user-not-found') {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(() => {
                    firebase.auth().signInWithEmailAndPassword(email, password)
                      .catch((error) => {
                        // TODO: Hata işleme yöntemini uyarlayın
                        this.setState({
                          error: 'Authentication Failed',
                        });
                      });
                  })
                  .catch((error) => {
                    console.log('hata', error); // TODO: Hata işleme yöntemini uyarlayın
                    this.setState({
                      error: 'Authentication Failed',
                    });
                  });
              } else {
                console.log('hata', err); // TODO: Hata işleme yöntemini uyarlayın
                this.setState({
                  error: 'Authentication Failed',
                });
              }
            });
        }
      
       
    }      

    render() {
        const { error } = this.state;
        const errorMsg = error ? (
            <Text style={styles.errorStyle}>
                {error}
            </Text>
        ) :
        null;
        return (
            <View style={{ padding: 30 }}>
              <View>
                <TextInput
                  style={styles.inputStyle}
                  placeholder='Enter Email'
                  onChangeText={(text) => {
                    this.setState({ email: text });
                  }}
                  value={this.state.email}
                />
              </View>
              <View>
                <TextInput
                  style={styles.inputStyle}
                  placeholder='Enter Password'
                  onChangeText={(text) => {
                    this.setState({ password: text });
                  }}
                  secureTextEntry
                  value={this.state.password}
                />
              </View>
              {errorMsg}
              <View style={styles.buttonWrapper}>
                <Button onPress={this.onButtonClicked} color='#E87B79' title="Login" />
              </View>
            </View>
          );
          
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: 'black',
    },
    buttonWrapper: {
        marginTop: 20,
        height: 50,
        borderRadius: 10,
        fontSize: 18,
        justifyContent: 'center'
    },
    errorStyle:{
        fontSize: 20,
        color: 'red',
        paddingTop: 5,
        alignSelf: 'center'
    }
})

export default LoginForm;