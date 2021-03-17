import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	notesList: {
		flex: 1,
		backgroundColor: "#1b1b1b",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	note: {
		color: "#ffa31a",
		backgroundColor: "#292929",
		borderRadius: 999999,
		padding: 20,
		margin: 20
	},
	noteInput: {
		flexDirection: "row",
		color: "#fff",
		backgroundColor: "#292929",
		alignItems: "center",
		justifyContent: "space-between",
		height: 50
	},
	button: {
		backgroundColor: "#292929",
		alignItems: "center",
		justifyContent: "center",
		color: "#ffa31a"
	}
});

export default styles;
