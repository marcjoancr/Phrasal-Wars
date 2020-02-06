import React from 'react';
import styles from '../Styles/stylesheet';
import { Text, View, Button } from 'react-native';

export default function HomeScreen(props) {
	const { navigation } = props;
	return (
		<View>
			<Text>Phrasal Wars</Text>
			<Button title='SOLO' onPress={() => navigation.navigate('Solo')} />
		</View>
	);
}
