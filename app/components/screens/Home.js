import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListView} from 'realm/react-native';
import realm from './../models/Index';

var Accordion = require('react-native-accordion');

export default class Home extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2});
		let data = realm.objects('Subject').sorted('title');
		this.state = {
			dataSource:ds.cloneWithRows(data),
			items: data,
		};
		this.renderRow = this.renderRow.bind(this);
		this.goSubject = this.goSubject.bind(this);
	

	}



	render() {
		return (
			<View style={styles.list}>
				<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				/>
			</View>
		);
	}

	renderRow(rowData) {
		let hasNew;
		if(rowData.new) {
			hasNew = (<Icon name = "envelope" size = {30} style={styles.new}/>)
		}

		var header = (
			<View style={styles.header}>
				{hasNew}
				<Text style={styles.headertext}>{rowData.title}</Text>
			</View>
		);


		var content = (
			<View style={styles.content}>
				<Text style={styles.contenttext}>{rowData.info}</Text>
				<Button
        			onPress={this.goSubject.bind(this, rowData)}
        			containerStyle={styles.buttoncontainer}
        			style={styles.buttontext}>Go to Subject Page
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

	goSubject(rowData) {
		this.props.navigator.push({screen: rowData.title, index: rowData.index});
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
    	backgroundColor: '#CFD8DC',
	},
	header: {
		height: 70,
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
  		fontSize: 20,
    	color: '#FFFFFF',
  	},
  	new: {
  		color: '#FF5722',
  		position: 'absolute',
  		bottom: 20,
  		left: 300,
  	}
})


AppRegistry.registerComponent('FeedbackApp', () => Home);