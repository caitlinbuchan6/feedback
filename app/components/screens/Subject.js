import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, Button } from 'react-native';

export default class Subject extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text>Hello</Text>
		)
	}
}

AppRegistry.registerComponent('FeedbackApp', () => Subject);