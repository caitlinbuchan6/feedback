import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import realm from './../models/Index';

export default class YourSayEdit extends Component {

	constructor(props) {
		super(props);
   		this.state = {
      		data: ''
    	};
		this.goBack = this.goBack.bind(this);
	}

	render() {
		return (
			<View style={styles.list}>
				<TextInput
					style={styles.textbox}
					placeholder={'Your Reply Goes Here'}
					onChangeText = {(data) => this.setState({data})}
					multiline = {true}
					numberOfLines = {8}
					value = {this.state.data}/>
	
				<Button
        			onPress={this.goBack.bind(this)}
        			containerStyle={styles.buttoncontainer}
        			style={styles.buttontext}>Send
        		</Button>
        	</View>
		);
	}

	goBack() {
		realm.write (() => {
			realm.create('YourSay', {id: 5, index: 19, title: this.props.title, comments: this.state.data, subject: this.props.subject, feedback: '1'});
			realm.create('SubjectContent', {index: 22, fk: '5', title: this.props.title, info: '', subject: this.props.subject, type: 'Your Say', new: false});
		})
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
  	textbox: {
  		textAlignVertical: 'top',
  		flex: 1,
  		borderColor: '#455A64',
    	borderWidth:2,
    	padding: 5,
    	margin: 5,
    	backgroundColor: '#FFFFFF',
    	fontSize: 17
  	}
})

AppRegistry.registerComponent('FeedbackApp', () => YourSayEdit);







			
		

		
