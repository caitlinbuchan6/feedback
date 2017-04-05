import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import realm from './../models/Index';

export default class YourSay extends Component {
constructor(props) {
		super(props);
		var data = realm.objects('YourSay').filtered('id = "' + props.fk +'"')[0];
    	//need to tell it to use the first result in the array
   		this.state = {
      		data: data
    	};
	}

	render() {
			return (
				<View style={styles.list}>
					<Text style={styles.textbox}>{this.state.data.comments}</Text>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
    	backgroundColor: '#CFD8DC',
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

AppRegistry.registerComponent('FeedbackApp', () => YourSay);