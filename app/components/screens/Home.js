import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, Button } from 'react-native';

var Accordion = require('react-native-accordion');
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.goSubject = this.goSubject.bind(this);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource:ds.cloneWithRows([{Index: "1", Title:"Subject One", Info:"More Data Inside"}, {Index:"2", Title:"Subject Two", Info:"Even More Data Inside"}]),
		};
		this.renderRow = this.renderRow.bind(this);
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
				onPress={this.goSubject}
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

	goSubject() {
		this.props.navigator.push({screen: 'Subject'});
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,

	}

})


AppRegistry.registerComponent('FeedbackApp', () => Home);