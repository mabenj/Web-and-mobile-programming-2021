import React, { useEffect, useState } from "react";
import { Button, TextInput, View } from "react-native";

import AsyncStorageService from "../services/AsyncStorageService";
import styles from "../Styles";

export default function AddNoteForm() {
	const [notes, setNotes] = useState([{ name: "", id: -1 }]);
	const [newNote, setNewNote] = useState("");

	useEffect(() => {
		AsyncStorageService.getNotes().then(setNotes).catch(console.log);
	}, []);

	const onAddNote = () => {
		AsyncStorageService.storeNotes([...notes, { name: newNote, id: Math.max(notes.map((note) => note.id)) + 1 }])
			.then(setNewNote(""))
			.catch(console.log);
	};

	return (
		<View style={styles.noteInput}>
			<TextInput
				style={{ flex: 1, color: "#fff" }}
				onChangeText={setNewNote}
				value={newNote}
				onSubmitEditing={onAddNote}
				placeholder="Kirjota note tähän"
				placeholderTextColor="#808080"
			/>
			<Button title="Lisää note" onPress={onAddNote} color={styles.button.color} />
		</View>
	);
}
