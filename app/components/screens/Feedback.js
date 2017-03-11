import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, Button } from 'react-native';

export default class Feedback extends Component {
	constructor(props) {
		super(props);
		this.goYourSayEdit = this.goYourSayEdit.bind(this);
	}

	render() {
		let isNew;
		if(this.props.new) {
			isNew = (<Text>true</Text>)
		}

		return (

		<View>
			{isNew}
			<Text>Title of CW</Text>
			<Text>Final Mark</Text>

		<Text>Comments</Text>

		<Text>Feed Forward</Text>

		<Button
				onPress={this.goYourSayEdit.bind(this)}
				title="Reply"
				/>

		</View>
	);

	}

	goYourSayEdit() {
		this.props.navigator.push({screen: this.props.title, index: 14, edit:true});
	}
	
}


const styles = StyleSheet.create({
	page: {
		flex: 1,

	},
	subject:{

	},
	content: {

	}

})

AppRegistry.registerComponent('FeedbackApp', () => Feedback);