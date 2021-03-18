import AsyncStorage from "@react-native-async-storage/async-storage";
import { nanoid } from "nanoid/non-secure";

const NOTES_KEY = "NOTE_APP_NOTES";

const storeNote = async (note) => {
	try {
		const notes = await getNotes();
		const newNote = { name: note, id: nanoid() };
		await storeNotes([...notes, newNote]);
		return Promise.resolve(newNote);
	} catch (error) {
		return Promise.reject(error);
	}
};

const storeNotes = async (notes) => {
	try {
		await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
	} catch (error) {
		return Promise.reject(error);
	}
};

const getNotes = async () => {
	try {
		const data = await AsyncStorage.getItem(NOTES_KEY);
		return data ? JSON.parse(data) : [];
	} catch (error) {
		return Promise.reject(error);
	}
};

const removeAllNotes = async () => {
	try {
		await AsyncStorage.removeItem(NOTES_KEY);
		return Promise.resolve();
	} catch (error) {
		return Promise.reject(error);
	}
};

export default { storeNote, getNotes, removeAllNotes };
