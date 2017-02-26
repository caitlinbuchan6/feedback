import React, { Component } from 'react';
import { AppRegistry, Navigator, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './app/components/screens/Login';
import Home from './app/components/screens/Home';
import Subject from './app/components/screens/Subject';

class Navigation extends Component {
  render() {
    return (
      <Navigator
        sceneStyle={{paddingTop: 64}} 
        initialRoute={{screen: 'Login'}}
        renderScene={(route, nav) => {return this.renderScene(route, nav)}}
        navigationBar={
          <Navigator.NavigationBar
            style = {styles.bar}
            navigationStyles = {Navigator.NavigationBar.StylesIOS}
            routeMapper={{
              LeftButton: (route, nav, index, navState) =>
                { if (route.screen === 'Login' || route.screen === 'Home') {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => nav.pop()}>
                      <Icon name = "arrow-left" size = {30}/>
                    </TouchableHighlight>
                  );
                } 
              },
              RightButton: () => {return null;},
              Title: (route, nav, index, navState) => 
                { if (route.screen === 'Login') {
                  return null;
                } else {
                return (
                  <Text style={styles.title}>{route.screen}</Text>
                  );
                }
              },
            }}
          />
        }
      />
    )
  }

  renderScene(route, nav) {
    switch (route.screen) {
      case "Login":
        return <Login navigator={nav} />
      case "Home":
        return <Home navigator={nav} />
      case "Subject":
        return <Subject navigator={nav} />
    }
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'powderblue',
  },
  title: {
    color: 'steelblue',
    fontWeight: 'bold',
    fontSize: 20,
  }

})

AppRegistry.registerComponent('FeedbackApp', () => Navigation);