import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, AsyncStorage } from 'react-native';
import Button from 'react-native-button';
import {ListView} from 'realm/react-native';

var Accordion = require('react-native-accordion');

var items = [
	{Index: 10, Title:"Essay Feedback", Info:"now there is something here", Type:"New Feedback", New: true}, 
	{Index: 11, Title:"Coursework Feedforward", Info:"", Type:"Existing Feedback", New: false},
	{Index: 12, Title:"Exam Result", Info:"", Type:"Existing Feedback", New: false},
	{Index: 6, Title:"Remember To", Info:"", Type:"Notes", Edit: false}, 
	{Index: 7, Title:"To Do", Info:"", Type:"Notes", Edit: false},
	{Index: 8, Title:"Very Important", Info:"", Type:"Notes", Edit: true},
	{Index: 9, Title:"Don't Forget!!", Info:"", Type:"Notes", Edit: false},
	{Index: 13, Title:"Coursework Feedforward", Info:"", Type:"Comments Sent", New: false}
];

export default class Subject extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 != s2});
		this.state = {
			dataSource:ds.cloneWithRowsAndSections(this.convertToMap())
		};
		this.renderRow = this.renderRow.bind(this);
		this.goFeedback = this.goFeedback.bind(this);
	}

	render() {
		return (
			<View style={styles.list}>
				<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				renderSectionHeader={this.renderSectionHeader}
				/>
			</View>
		);
	}

	renderRow(itemsItem) {
		var header = (
			<View style={styles.header}>
				<Text style={styles.headertext}>{itemsItem.Title}</Text>
			</View>
		);

		var content = (
			<View style={styles.content}>
				<Text style={styles.contenttext}>{itemsItem.Info}</Text>

				<Button
        			onPress={this.goFeedback.bind(this, itemsItem)}
        			containerStyle={styles.buttoncontainer}
        			style={styles.buttontext}>Go to Page
        		</Button>
			</View>
		);

		return (
			<Accordion
				header={header}
				content={content}
				easing="easeOutCubic"
			/>
		);
	}

	renderSectionHeader(sectionData, Type) {
		return (
			<View style={styles.section}>
				<Text style={styles.buttontext}>{Type}</Text>
			</View>
		)
	}

	goFeedback(itemsItem) {
		this.props.navigator.push({screen: itemsItem.Title, index: itemsItem.Index, new: itemsItem.New, edit: itemsItem.Edit});
	}

	convertToMap() {
	var map = {};
	items.forEach(function(itemsItem) {
		if (!map[itemsItem.Type]) {
			map[itemsItem.Type] = [];
		}

		map[itemsItem.Type].push(itemsItem);
	});

	return map;
}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
    	backgroundColor: '#CFD8DC',
	},
	header: {
		height: 50,
		borderColor: '#455A64',
		borderWidth: 1,
		backgroundColor: '#CFD8DC',
		justifyContent: 'center',
	},
	headertext: {
		padding: 10,
		fontSize: 20,
    	color: '#212121',
    	textAlignVertical: 'center',
	},
	subject: {
	
	},
	content: {
		borderColor: 'gray',
		backgroundColor: 'white',
		borderWidth: 1,

	},
	contenttext: {
		fontSize: 20,
		margin: 10,
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
  	section: {
  		height: 30,
  		backgroundColor: '#455A64'
  	}
})
AppRegistry.registerComponent('FeedbackApp', () => Subject);