import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'note': '',
		};
		this.goNoteEdit = this.goNoteEdit.bind(this);
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
		if(this.props.edit) {
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
		} else {
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
	}

	goNoteEdit() {
		this.props.navigator.push({screen: this.props.title, index: this.props.index, edit:true});
	}

	goNote() {
		this.props.navigator.push({screen: this.props.title, index: this.props.index, edit:false});
	}
}

AppRegistry.registerComponent('FeedbackApp', () => Note);