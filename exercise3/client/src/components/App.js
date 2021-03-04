import React from "react";
import reminderService from "../services/reminderService";
import Reminder from "./Reminder";
import AddReminderForm from "./AddReminderForm";

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
		// Post to server
		reminderService
			.createReminder(this.state.newName, this.state.newDate)
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
			<div className="container">
				<h2>Lisää muistutus</h2>
				<AddReminderForm
					submitHandler={this.addReminder}
					nameChangeHandler={this.onNameChange}
					dateChangeHandler={this.onDateChange}
					nameValue={this.state.newName}
					dateValue={this.state.newDate}
				/>
				<h2>Muistutukset</h2>
				<table>
					<tbody>
						{this.state.reminders.map((reminder) => (
							<Reminder key={reminder.id} reminder={reminder} deletionHandler={this.onReminderDelete} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
