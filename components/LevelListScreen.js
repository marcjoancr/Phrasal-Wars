import React from 'react';
import styles from '../Styles/stylesheet';
import { Text, View, Button } from 'react-native';

export default function LevelListScreen(props) {
	const { navigation, route } = props;
	const levels = route.params;
	return (
		<View>
			{levels.map((level) => {
				const { title, options } = level;
				return (
					<Button
						key={title}
						title={title}
						onPress={() => console.log(options)}
					/>
				);
			})}
		</View>
	);
}
