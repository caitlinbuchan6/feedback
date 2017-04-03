import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, AsyncStorage } from 'react-native';
import Button from 'react-native-button';
import {ListView} from 'realm/react-native';
import realm from './../models/Index';

var Accordion = require('react-native-accordion');

export default class Subject extends Component {
	constructor(props) {
		super(props);
		var data = realm.objects('SubjectContent').filtered('subject = "' + props.id + '"');
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 != s2});
		this.state = {
			dataSource:ds.cloneWithRowsAndSections(this.convertToMap(data))
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

	renderRow(dataItem) {
		var header = (
			<View style={styles.header}>
				<Text style={styles.headertext}>{dataItem.title}</Text>
			</View>
		);

		var content = (
			<View style={styles.content}>
				<Text style={styles.contenttext}>{dataItem.info}</Text>

				<Button
        			onPress={this.goFeedback.bind(this, dataItem)}
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

	goFeedback(dataItem) {
		this.props.navigator.push({screen: dataItem.title, index: dataItem.index, new: dataItem.new, fk: dataItem.fk });
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