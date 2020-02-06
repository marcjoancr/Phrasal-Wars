import React from 'react';
import styles from '../Styles/stylesheet';
import { Text, View } from 'react-native';

export default function HomeScreen(props) {
	const { navigation } = props;
	return (
		<View>
			<Text>Home</Text>
			<Button title='Go to Solo' onPress={() => navigation.navigate('Solo')} />
		</View>
	);
}
