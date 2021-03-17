import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTES_KEY = "NOTE_APP_NOTES";

const storeNotes = async (notes) => {
	try {
		await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
		console.log(notes);
	} catch (error) {
		return error;
	}
};

const getNotes = async () => {
	try {
		const data = await AsyncStorage.getItem(NOTES_KEY);
		return data ? JSON.parse(data) : [{ name: "Ei mittää", id: -1 }];
	} catch (error) {
		return error;
	}
};

export default { storeNotes, getNotes };
