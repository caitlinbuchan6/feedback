import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Button from 'react-native-button';
import {ListView} from 'realm/react-native';
import realm from './../models/Index';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';

export default class Subject extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 != s2});
		var data = ds.cloneWithRowsAndSections(this.convertToMap(realm.objects('SubjectContent').filtered('subject = "' + props.id + '"')))
		this.state = {
			dataSource:data
		};

		this.goNoteEdit = this.goNoteEdit.bind(this);
		this.renderRow = this.renderRow.bind(this);
		this.goFeedback = this.goFeedback.bind(this);
	}

	render() {
		return (
			<View style={styles.list}>
				<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow.bind(this)}
				renderSectionHeader={this.renderSectionHeader}
				/>
				<ActionButton buttonColor="#FF5722">
          			<ActionButton.Item buttonColor='#455A64' title="New Note" onPress={this.goNoteEdit.bind(this)}>
            			<Icon name="sticky-note-o" size = {30} style={styles.new}/>
          			</ActionButton.Item>
          		</ActionButton>
			</View>
		);
	}

	renderRow(dataItem) {
		return (
			<View style={styles.header}>
				<TouchableHighlight underlayColor = '#607D8B' onPress={this.goFeedback.bind(this, dataItem)}> 
					<Text style={styles.headertext}>{dataItem.title}</Text>
				</TouchableHighlight>
			</View>
		)
	}

	renderSectionHeader(sectionData, Type) {
		return (
			<View style={styles.section}>
				<Text style={styles.buttontext}>{Type}</Text>
			</View>
		)
	}

	goNoteEdit() {
		this.props.navigator.push({screen:this.props.title, index: 24, subject:this.props.id});
	}

	goFeedback(dataItem) {
		this.props.navigator.push({screen: dataItem.title, index: dataItem.index, new: dataItem.new, fk: dataItem.fk, subject: dataItem.subject });
	}

	convertToMap(data) {
	var map = {};
	data.forEach(function(dataItem) {
		if (!map[dataItem.type]) {
			map[dataItem.type] = [];
		}

		map[dataItem.type].push(dataItem);
	});

	return map;
}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
    	backgroundColor: '#CFD8DC',
	},
	new: {
  		color: '#FF5722'
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