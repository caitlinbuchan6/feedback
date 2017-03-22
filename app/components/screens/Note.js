import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'note': '',
		};
		this.goNoteEdit = this.goNoteEdit.bind(this);
	}

	//need this for updating page on navigator pop
	componentWillReceiveProps = () => {
		AsyncStorage.getItem('note').then((value) => {
			this.setState({'note':value});
		});
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
					<Text
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					>{this.state.note}</Text>
					<Button
						onPress={this.goNoteEdit.bind(this)}
						title='Edit'
					/>
				</View>
			)
		}

	goNoteEdit() {
		this.props.navigator.push({screen: this.props.title, index: 15, note: this.props.index});
	}
}

AppRegistry.registerComponent('FeedbackApp', () => Note);