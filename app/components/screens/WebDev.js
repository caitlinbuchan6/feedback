import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, Button } from 'react-native';

import Subject from './Subject';

export default class WebDev extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Subject/>
		)
	}
}

AppRegistry.registerComponent('FeedbackApp', () => WebDev);