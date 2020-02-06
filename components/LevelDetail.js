{
	/*
	1- Display first Quest (Component)
	2- Quest (Component) with props -> Phrasal Verb, Meaning, Options: [] and Next
	3- Next (function Level) -> Next (function Level) ? {1} : EndLevel (Component)
	4- EndLevel (Component) -> result (correct, incorrect)

	FILTER OPTIONS:
		1- filter -> remove correct option
		2- sort random
		3- slice -> get first 4
*/
}
import React, { useState } from 'react';
import styles from '../Styles/stylesheet';
import { Text, View, Button } from 'react-native';

export default function LevelDetail(props) {
	const [round, setScore] = useState(0);
	const { navigation, route } = props;
	const level = route.params;
	const { phrasal_verb, meaning } = level[round];
	const options = level
		.filter(
			(opt, i, self) =>
				opt.phrasal_verb !== phrasal_verb &&
				i === self.findIndex((item) => opt.phrasal_verb === item.phrasal_verb)
		)
		.sort(() => Math.random() - 0.5)
		.slice(0, 2)
		.concat(level[round])
		.sort(() => Math.random() - 0.5);

	return (
		<View>
			<Text>{meaning}</Text>
			{options.map((option) => {
				return (
					<Button
						key={option.phrasal_verb}
						title={option.phrasal_verb}
						onPress={() => console.log(option)}
					/>
				);
			})}
		</View>
	);
}
