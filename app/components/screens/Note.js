import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import Button from 'react-native-button';

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
		let note = this.state.note;
		let variable;
		if (note == null){
			variable = (<Text style={styles.title}>This note is empty, press Edit to add text to your note.</Text>)
		} else {
			variable = (<Text style={styles.title}>{this.state.note}</Text>)
		}

			 return (
				<View style={styles.list}>
					<View style={styles.textbox}>
						{variable}
					</View>
					
					<Button
        				onPress={this.goNoteEdit.bind(this)}
        				containerStyle={styles.buttoncontainer}
        				style={styles.buttontext}>Edit
        			</Button>
				</View>
			)
		}

	goNoteEdit() {
		this.props.navigator.push({screen: this.props.title, index: 15, note: this.props.index});
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
  	title: {
  		color: '#212121',
  		fontSize: 17,
  		textAlignVertical: 'center'
  	},
  	textbox: {
  		flex: 1,
  		borderColor: '#455A64',
    	borderWidth:2,
    	padding: 5,
    	margin: 5,
    	backgroundColor: '#FFFFFF'
  	}
})

AppRegistry.registerComponent('FeedbackApp', () => Note);