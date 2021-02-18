import React from "react";
import reminderService from "./services/reminderService";
import Reminder from "./components/Reminder";
import AddReminderForm from "./components/AddReminderForm";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reminders: [],
			newName: "",
			newDate: ""
		};
	}

	componentDidMount() {
		// Get and set initial reminders
		reminderService.getAllReminders().then((reminders) => {
			this.setState({ reminders });
		});
	}

	addReminder = (e) => {
		e.preventDefault();
		if (this.state.reminders.some((reminder) => reminder.name === this.state.newName)) {
			alert("Tää on olemassa jo!");
			return;
		}
		const timestamp = Date.parse(this.state.newDate);
		const timestampDate = isNaN(timestamp) ? new Date() : new Date(timestamp);
		const reminderData = {
			name: this.state.newName,
			timestamp: timestampDate.toISOString()
		};
		// Post to server
		reminderService
			.createReminder(reminderData)
			.then((newReminder) => {
				// Update state
				this.setState((prevState) => ({
					reminders: [...prevState.reminders, newReminder],
					newName: "",
					newDate: ""
				}));
				console.log(`Reminder with id: ${newReminder.id} successfully created`);
			})
			.catch((reason) => {
				console.log(`Could not create a reminder: ${reason}`);
			});
	};

	onNameChange = (e) => {
		this.setState({
			newName: e.target.value
		});
	};

	onDateChange = (e) => {
		this.setState({
			newDate: e.target.value
		});
	};

	onReminderDelete = (id) => {
		if (window.confirm("Ootko ihan varma?")) {
			// Delete from server
			reminderService.deleteReminderById(id).then((wasSuccess) => {
				if (wasSuccess) {
					// Delete from state
					this.setState((prevState) => ({
						reminders: prevState.reminders.filter((reminder) => reminder.id !== id)
					}));
					console.log(`Reminder with id: ${id} successfully deleted`);
				} else {
					console.log(`Reminder with id: ${id} could not be deleted`);
				}
			});
		}
	};

	render() {
		return (
			<>
				<h2>Lisää muistutus</h2>
				<AddReminderForm
					submitHandler={this.addReminder}
					nameChangeHandler={this.onNameChange}
					dateChangeHandler={this.onDateChange}
					nameValue={this.state.newName}
					dateValue={this.state.newDate}
				/>
				<h2>Muistutukset</h2>
				<table style={{ width: "500px" }}>
					<tbody>
						{this.state.reminders.map((reminder) => (
							<Reminder key={reminder.id} reminder={reminder} deletionHandler={this.onReminderDelete} />
						))}
					</tbody>
				</table>
			</>
		);
	}
}

export default App;
