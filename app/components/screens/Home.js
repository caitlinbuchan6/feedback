import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, Button } from 'react-native';

var Accordion = require('react-native-accordion');
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.goSubject = this.goSubject.bind(this);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource:ds.cloneWithRows(['row 1', 'row 2']),
		};
	}

	render() {
		return (
			<View style={styles.list}>
				<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow.bind(this)}
				/>
			</View>
		);
	}

	renderRow() {
		var header = (
			<View style={{flex:3, borderColor: 'gray', borderWidth: 1, backgroundColor: 'skyblue'}}>
				<Text>Click to expand</Text>
			</View>
		);

		var content = (
			<View style={{flex: 2, borderColor: 'gray', borderWidth: 1}}>
				<Text>MOar</Text>

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