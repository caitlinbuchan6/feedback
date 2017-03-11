import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Button } from 'react-native';

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
      <View>

        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
        placeholder={'Username'}
        value={this.state.username}
        />
        
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        placeholder={'Password'}
        secureTextEntry={true}
        value={this.state.password}
        />

        <Button
        onPress={this.goHome.bind(this)}
        title="Submit"
        color="#841584"
        />

      </View>
    )
  }

  goHome() {
    this.props.navigator.push({screen: 'Home', index: 1});
  }

}

AppRegistry.registerComponent('FeedbackApp', () => Login);