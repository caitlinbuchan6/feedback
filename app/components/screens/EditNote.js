import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import realm from './../models/Index';

export default class EditNote extends Component {
	constructor(props) {
		super(props);
   		this.state = {
   			title: '',
      		content: ''
    	};
    	this.goNote.bind(this);
	}

	render() {
		return (
			<View style={styles.list}>
				<TextInput
					style={styles.titlebox}
					placeholder={'Note Title'}
					onChangeText = {(title) => this.setState({title: title})}
					value = {this.state.title}/>

				<TextInput
					style={styles.textbox}
					placeholder={'Your Note Goes Here'}
					onChangeText = {(content) => this.setState({content: content})}
					multiline = {true}
					numberOfLines = {8}
					value = {this.state.content}/>
			
				<Button
        			onPress={this.goNote.bind(this)}
        			containerStyle={styles.buttoncontainer}
        			style={styles.buttontext}>Save
        		</Button>

			</View>
		)
	}

	goNote() {
		var subject = this.props.subject.toString();
		realm.write (() => {
			realm.create('Note', {id: 7, index: 18, title: this.state.title, note: this.state.content, subject: subject});
			realm.create('SubjectContent', {index: 18, fk: '7', title: this.state.title, info: '', subject: subject, type: 'Note', new: false});
		});
		this.props.navigator.pop();
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
    	backgroundColor: '#CFD8DC',
	},
	buttoncontainer: {
    	margin: 5,
    	width: 250,
    	padding: 10,
    	backgroundColor: '#607D8B',
    	alignSelf: 'center'
  	},
  	buttontext: {
  		marginLeft: 10,
  		fontSize: 20,
    	color: '#FFFFFF',
    	textAlignVertical: 'center'
  	},
  	titlebox: {
  		textAlignVertical: 'top',
  		flex: 1,
  		borderColor: '#455A64',
    	borderWidth:2,
    	padding: 5,
    	margin: 5,
    	backgroundColor: '#FFFFFF',
    	fontSize: 17
  	},
  	textbox: {
  		textAlignVertical: 'top',
  		flex: 8,
  		borderColor: '#455A64',
    	borderWidth:2,
    	padding: 5,
    	margin: 5,
    	backgroundColor: '#FFFFFF',
    	fontSize: 17
  	}
})

AppRegistry.registerComponent('FeedbackApp', () => EditNote);