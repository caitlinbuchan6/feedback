import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import realm from './../models/Index';

export default class Note extends Component {
	constructor(props) {
		super(props);
		var dataSet = realm.objects('Note').filtered('id = "' + props.fk +'"');
    	//need to tell it to use the first result in the array
    	this.state = {
      		data: dataSet[0]
    	};
	}

	render() {
		let note = this.state.data;
		let variable;
		if (note == null){
			variable = (<Text style={styles.title}>This note is empty, press Edit to add text to your note.</Text>)
		} else {
			variable = (<Text style={styles.title}>{this.state.data.note}</Text>)
		}

			 return (
				<View style={styles.list}>
					<View style={styles.textbox}>
						<Text style={styles.title}>{this.state.data.note}</Text>
					</View>
				</View>
			)
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