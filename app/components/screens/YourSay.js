import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native';

export default class YourSay extends Component {
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

		if(this.props.edit) {
			return (
			<View>

			<TextInput
			onChangeText = {this.setData}
			value = {this.state.comments}/>

			</View>
		);
		} else {
			return (
			<Text>{this.state.comments}</Text>
		);
		}	
	}
}

AppRegistry.registerComponent('FeedbackApp', () => YourSay);