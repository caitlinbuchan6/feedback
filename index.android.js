import React, { Component } from 'react';
import { AppRegistry, Navigator, TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './app/components/screens/Login';
import Home from './app/components/screens/Home';
import Subject from './app/components/screens/Subject';
import Feedback from './app/components/screens/Feedback';
import Note from './app/components/screens/Note';
import EditNote from './app/components/screens/EditNote';
import YourSay from './app/components/screens/YourSay';
import YourSayEdit from './app/components/screens/YourSayEdit';

class Navigation extends Component {
  render() {
    return (
      <Navigator
        sceneStyle={{paddingTop: 64}} 
        initialRoute={{screen: 'Login', index: 0}}
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
                    <TouchableHighlight underlayColor='#607D8B' onPress={() => nav.pop()}>
                      <Icon name = "arrow-left" size = {30} color = '#FF5722' style={{marginLeft:10}}/>
                    </TouchableHighlight>
                  );
                } 
              },
              RightButton: () => {return null;},
              Title: (route, nav, index, navState) => 
                { return (
                  <Text style={styles.title}>{route.screen}</Text>
                  );
                },
            }}
          />
        }
      />
    )
  }

  renderScene(route, nav) {
    switch (route.index) {
      case 0:
        return <Login navigator={nav} />
      case 1:
        return <Home navigator={nav} />
      case 2:
      case 3:
      case 4:
      case 5:
        return <Subject navigator={nav} title = {route.screen} id = {route.id}/>
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        return <Feedback navigator={nav} title = {route.screen} new = {route.new} fk = {route.fk} subject = {route.subject}/>
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return <Note navigator={nav} title = {route.screen} fk = {route.fk} subject = {route.subject}/>
      case 19:
      case 20:
      case 21:
      case 22:
        return <YourSay navigator={nav} title = {route.screen} fk = {route.fk} subject = {route.subject}/>
      case 23:
        return <YourSayEdit navigator={nav} title = {route.screen} fk = {route.fk} subject = {route.subject}/>
      case 24:
        return <EditNote navigator={nav} title = {route.screen} subject = {route.subject}/>
    }
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#607D8B',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },

})

AppRegistry.registerComponent('FeedbackApp', () => Navigation);