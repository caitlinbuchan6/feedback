import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import Button from 'react-native-button';

export default class YourSayEdit extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'comments': ''
		};
		this.goBack = this.goBack.bind(this);
	}

	componentDidMount = () => {
		AsyncStorage.getItem('comments').then((value) => {
			this.setState({'comments':value});
		});
	}

	setData = (value) => {
		AsyncStorage.setItem('comments', value);
		this.setState({'comments':value});
	}

	render() {
		return (
			<View style={styles.list}>
				<TextInput
					style={styles.textbox}
					placeholder={'Your Reply Goes Here'}
					onChangeText = {this.setData}
					multiline = {true}
					numberOfLines = {8}
					value = {this.state.comments}/>
	
				<Button
        			onPress={this.goBack.bind(this)}
        			containerStyle={styles.buttoncontainer}
        			style={styles.buttontext}>Send
        		</Button>
        	</View>
		);
	}

	goBack() {
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







			
		

		
