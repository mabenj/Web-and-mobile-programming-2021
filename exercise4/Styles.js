import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	notesList: {
		flex: 1,
		backgroundColor: "#292929",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	notesListFooter: {
		height: 75,
		backgroundColor: "#292929",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
        margin: -1
	},
	note: {
		color: "#ffa31a",
		backgroundColor: "#1b1b1b",
		borderRadius: 15,
		padding: 20,
		margin: 20
	},
	addNoteInput: {
		flex: 95,
		flexDirection: "column",
		color: "#fff",
		backgroundColor: "#292929",
		textAlignVertical: "top",
		paddingHorizontal: 25,
		paddingVertical: 25,
        margin: -1
	},
	addNoteFooter: {
		flex: 20,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingRight: 15,
		backgroundColor: "#292929"
	},
	addBtn: {
		color: "#ffa31a"
	},
	deleteBtn: {
		color: "#FA6769"
	}
});

export default styles;
