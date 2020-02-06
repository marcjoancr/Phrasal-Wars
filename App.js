import React from 'react';
import SoloScreen from './components/SoloScreen';
import HomeScreen from './components/HomeScreen';
import LevelListScreen from './components/LevelListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Solo' component={SoloScreen} />
				<Stack.Screen name='LevelList' component={LevelListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
