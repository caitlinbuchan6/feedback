import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';

export default class EditNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'note': '',
		};
		this.goNote = this.goNote.bind(this);
	}

	componentDidMount = () => {
		AsyncStorage.getItem('note').then((value) => {
			this.setState({'note':value});
		});
	}

	setData = (value) => {
		AsyncStorage.setItem('note', value);
		this.setState({'note':value});
	}
	render() {
			return (
				<View>

			<TextInput
			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			placeholder={'Your Note Goes Here'}
			onChangeText = {this.setData}
			value = {this.state.note}/>

			<Button
				onPress={this.goNote.bind(this)}
				title='Save'
			/>

			</View>
				)
	}

	goNote() {
		this.props.navigator.pop();
	}
}

AppRegistry.registerComponent('FeedbackApp', () => EditNote);