import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';

export default SubjectContent = (props) => {
	return (
		<View>

		<Text>{props.data}</Text>

			<TextInput
			onChangeText = {props.setData}
			value = {props.data}
		/>

		

		

		</View>
	);
}