import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";

const Stack = createStackNavigator();

export default function App() {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");

	const onAddNote = () => {
		if (notes.some((note) => note.name === newNote)) {
			Alert.alert("Duplikaatti note", "Tämän niminen note on jo olemassa!");
		} else {
			setNotes((prevNotes) => [...prevNotes, { name: newNote, id: prevNotes.length + 1 }]);
			setNewNote("");
		}
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Notes">
				<Stack.Screen name="Notes" component={NotesList} />
				<Stack.Screen name="AddNote" component={AddNoteForm} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
