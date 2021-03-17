import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";

import AsyncStorageService from "../services/AsyncStorageService";
import styles from "../Styles";

const NotesList = ({ navigation }) => {
	const [notes, setNotes] = useState([{ name: "alku-value", id: -1 }]);
	const scrollViewRef = useRef();

	useEffect(() => {
		AsyncStorageService.getNotes().then(setNotes).catch(console.log);
	}, []);

	const scrollToEnd = () => {
		scrollViewRef.current.scrollToEnd({ animated: true });
	};

	return (
		<>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				ref={scrollViewRef}
				onLayout={scrollToEnd}
				onContentSizeChange={scrollToEnd}>
				<View style={styles.notesList}>
					{notes.map((note) => (
						<Note key={note.id} name={note.name} />
					))}
				</View>
			</ScrollView>
			<Button
				title="Lisää uusi note"
				onPress={() => {
					navigation.navigate("AddNote");
				}}
				color={styles.button.color}
			/>
		</>
	);
};

NotesList.navigationOptions = () => ({
	title: "Notes"
});

const Note = ({ name }) => {
	return <Text style={styles.note}>{name}</Text>;
};

export default NotesList;
