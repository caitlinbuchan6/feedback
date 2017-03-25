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

	render() {
			return (
				<View style={styles.list}>
					<Text style={styles.textbox}>{this.state.comments}</Text>
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