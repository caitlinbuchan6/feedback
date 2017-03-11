import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, Button } from 'react-native';

var Accordion = require('react-native-accordion');
export default class Home extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource:ds.cloneWithRows([
				{Index: 2, Title:"Web Development", Info:"More Data Inside"}, 
				{Index: 3, Title:"Applications Development in Java", Info:"Even More Data Inside"},
				{Index: 4, Title:"Oracle Database", Info:""},
				{Index: 5, Title:"Object Oriented Analysis and Design", Info:""}
				]),
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
		var header = (
			<View style={{flex:3, borderColor: 'gray', borderWidth: 1, backgroundColor: 'skyblue'}}>
				<Text>{rowData.Title}</Text>
			</View>
		);

		var content = (
			<View style={{flex: 2, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}>
				<Text>{rowData.Info}</Text>

				<Button
				onPress={this.goSubject.bind(this, rowData)}
				title="Go to Subject Page"
				/>
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
		this.props.navigator.push({screen: rowData.Title, index: rowData.Index});
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,

	},
	subject: {

	},
	content: {

	}

})


AppRegistry.registerComponent('FeedbackApp', () => Home);