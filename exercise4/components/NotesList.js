import React, { useEffect, useRef, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import NoteStorageService from "../services/NoteStorageService";
import styles from "../Styles";

export default function NotesList({ navigation, route }) {
	const [notes, setNotes] = useState([]);
	const scrollViewRef = useRef();

	useEffect(() => {
		NoteStorageService.getNotes().then(setNotes).catch(console.log);
	}, [route.params?.newNote]);

	const scrollToEnd = () => {
		scrollViewRef.current.scrollToEnd({ animated: true });
	};

	const onDeleteAll = () => {
		Alert.alert("Oletko varma?", "Haluatko varmasti poistaa kaikki muistiinpanot?", [
			{ text: "Peruuta", style: "cancel" },
			{
				text: "Poista",
				onPress: () => {
					NoteStorageService.removeAllNotes().then(setNotes([])).catch(console.log);
				}
			}
		]);
	};

	return (
		<>
			<ScrollView
				contentContainerStyle={{ flexGrow: 2 }}
				ref={scrollViewRef}
				onLayout={scrollToEnd}
				onContentSizeChange={scrollToEnd}>
				<View style={styles.notesList}>
					{notes.length > 0 ? (
						notes.map((note) => <Note key={note.id} name={note.name} />)
					) : (
						<Text style={{ color: "#fff", fontStyle: "italic", marginTop: 10 }}>Ei muistiinpanoja</Text>
					)}
				</View>
			</ScrollView>
			<View style={styles.notesListFooter}>
				<FontAwesome.Button name="trash-o" onPress={onDeleteAll} backgroundColor={styles.deleteBtn.color}>
					Poista kaikki
				</FontAwesome.Button>
				<FontAwesome.Button
					name="plus"
					onPress={() => navigation.navigate("AddNote")}
					backgroundColor={styles.addBtn.color}>
					Luo uusi
				</FontAwesome.Button>
			</View>
		</>
	);
}

const Note = ({ name }) => {
	return <Text style={styles.note}>{name}</Text>;
};
