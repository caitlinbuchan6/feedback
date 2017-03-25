import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import Button from 'react-native-button';

export default class EditNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'note': '',
		};
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
		return (
			<View style={styles.list}>

				<TextInput
					style={styles.textbox}
					placeholder={'Your Note Goes Here'}
					onChangeText = {this.setData}
					multiline = {true}
					numberOfLines = {8}
					value = {this.state.note}/>
			
				<Button
        			onPress={this.goNote.bind(this)}
        			containerStyle={styles.buttoncontainer}
        			style={styles.buttontext}>Save
        		</Button>

			</View>
		)
	}

	goNote() {
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

AppRegistry.registerComponent('FeedbackApp', () => EditNote);