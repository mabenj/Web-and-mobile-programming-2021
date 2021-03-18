import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";

const Stack = createStackNavigator();

const headerOptions = {
	headerStyle: {
		backgroundColor: "#1b1b1b"
	},
	headerTintColor: "#fff"
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Notes" screenOptions={headerOptions}>
				<Stack.Screen name="Notes" component={NotesList} options={{ title: "Muistiinpanot" }} />
				<Stack.Screen name="AddNote" component={AddNoteForm} options={{ title: "Uusi muistiinpano" }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
