import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet, Image } from 'react-native';
import Button from 'react-native-button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username : '',
      password : ''
    };
  }

  render() {
    return (
      <View style={styles.view}>

        <Image
          style={styles.logo}
          source={require('./logo.png')}
        />

        <View style={styles.textview}>
          <TextInput
        style={styles.textbox}
        onChangeText={(username) => this.setState({username})}
        placeholder={'Username'}
        value={this.state.username}
        />
        </View>
        
        <View style={styles.textview}>
        <TextInput
        style={styles.textbox}
        onChangeText={(password) => this.setState({password})}
        placeholder={'Password'}
        secureTextEntry={true}
        value={this.state.password}
        />
        </View>

        <Button
        onPress={this.goHome.bind(this)}
        containerStyle={styles.buttoncontainer}
        style={styles.text}>Submit</Button>

      </View>
    )
  }

  goHome() {
    this.props.navigator.push({screen: 'Home', index: 1});
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#CFD8DC',
  },
  logo: {
    alignSelf: 'center',
    margin: 20,
  },
  textview: {
    alignSelf: 'center',
    padding: 10,
  },
  textbox: {
    height: 50,
    width: 300,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderColor: '#455A64',
    borderWidth:2

  },
  buttoncontainer: {
    margin: 40,
    width: 120,
    padding: 10,
    backgroundColor: '#607D8B',
    alignSelf: 'center'
  },
  text:{
    fontSize: 20,
    color: '#FFFFFF',
  },
})

AppRegistry.registerComponent('FeedbackApp', () => Login);