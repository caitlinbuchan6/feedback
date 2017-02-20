import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import notes from './app/screens/notes';

class SimpleNavigationApp extends Component {
  render() {
    return (
        <notes/>
      )
  }
}

AppRegistry.registerComponent('FeedbackApp', () => SimpleNavigationApp);