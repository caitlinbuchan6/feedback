import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native';

export default class YourSayEdit extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'comments': ''
		};
	}

	componentDidMount = () => {
		AsyncStorage.getItem('comments').then((value) => {
			this.setState({'comments':value});
		});
	}

	setData = (value) => {
		AsyncStorage.setItem('comments', value);
		this.setState({'comments':value});
	}
	render() {
		return (
			<View>

			<TextInput
			onChangeText = {this.setData}
			value = {this.state.comments}/>

			</View>
		);

	
}
}

AppRegistry.registerComponent('FeedbackApp', () => YourSayEdit);







			
		

		
