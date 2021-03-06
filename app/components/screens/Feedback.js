import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import realm from './../models/Index';

export default class Feedback extends Component {
	constructor(props) {
		super(props);
		this.goYourSayEdit = this.goYourSayEdit.bind(this);
    var dataSet = realm.objects('Feedback').filtered('id = "' + props.fk +'"');
    //need to tell it to use the first result in the array
    this.state = {
      data: dataSet[0]
    };
	}

	render() {
		return (
		<View style = {styles.list}>
			<View style = {styles.box}>
				<View style = {styles.titlebox}>
					<Text style={styles.header}>Title of CW</Text>
					<Text style={styles.title}>{this.state.data.title}</Text>
				</View>

				<View style={styles.markbox}>
					<Text style={styles.header}>Final Mark</Text>
					<Text style={styles.title}>{this.state.data.mark}%</Text>
				</View>

				<View style={styles.textbox}>
					<Text style={styles.header}>Comments</Text>
					<Text style={styles.text}>{this.state.data.comment}</Text>
				</View>

				<View style={styles.textbox}>
					<Text style={styles.header}>Feed Forward</Text>
					<Text style={styles.text}>{this.state.data.feedforward}</Text>
				</View>
			</View>

			<Button
        		onPress={this.goYourSayEdit.bind(this)}
        		containerStyle={styles.buttoncontainer}
        		style={styles.buttontext}>Reply
        	</Button>

		</View>
	);

	}

	goYourSayEdit() {
		this.props.navigator.push({screen: this.props.title, index: 23, fk: this.props.fk, subject: this.props.subject});
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
  	box: {
  		flex: 1,
  	},
  	header: {
  		textDecorationLine: 'underline',
  		fontSize: 15,
  		fontWeight: 'bold',
  		color: '#212121'
  	},
  	title: {
  		color: '#212121',
  		fontSize: 15,
  		textAlignVertical: 'center'
  	},
  	titlebox: {
  		height: 75,
  		borderColor: '#455A64',
    	borderWidth:2,
    	padding: 5,
    	margin: 5,
    	backgroundColor: '#FFFFFF'
  	},
  	markbox: {
  		height: 55,
  		borderColor: '#455A64',
    	borderWidth:2,
    	padding: 5,
    	margin: 5,
    	backgroundColor: '#FFFFFF'
  	},
  	textbox: {
  		height: 140,
  		borderColor: '#455A64',
    	borderWidth:2,
    	padding: 5,
    	margin: 5,
    	backgroundColor: '#FFFFFF'
  	}


})

AppRegistry.registerComponent('FeedbackApp', () => Feedback);