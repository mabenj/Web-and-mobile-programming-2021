import React, { useState } from "react";
import { Alert, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import NoteStorageService from "../services/NoteStorageService";
import styles from "../Styles";

export default function AddNoteForm({ navigation }) {
	const [noteName, setNoteName] = useState("");

	const onAddNote = async () => {
		const allNotes = await NoteStorageService.getNotes();
		if (allNotes.some((note) => note.name.toLowerCase() === noteName.toLowerCase())) {
			Alert.alert("Muistutus on jo olemassa", "Tämä muistutus on jo olemassa! Anna muistutukselle eri nimi.");
			return;
		}
		NoteStorageService.storeNote(noteName)
			.then((newNote) => {
				setNoteName("");
				navigation.navigate("Notes", { newNote });
			})
			.catch(console.log);
	};

	return (
		<>
			<TextInput
				style={styles.addNoteInput}
				onChangeText={setNoteName}
				value={noteName}
				onSubmitEditing={onAddNote}
				placeholder="Kirjoita muistiinpano tähän"
				placeholderTextColor="#808080"
				multiline
				autoFocus
			/>
			<View style={styles.addNoteFooter}>
				<FontAwesome.Button name="plus" onPress={onAddNote} backgroundColor={styles.addBtn.color}>
					Lisää
				</FontAwesome.Button>
			</View>
		</>
	);
}
