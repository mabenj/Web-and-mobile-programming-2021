import axios from "axios";

const API_BASE_URI = "http://localhost:3001";
const REMINDERS_URI = `${API_BASE_URI}/reminders`;

const getAllReminders = () => {
	return axios.get(REMINDERS_URI).then((response) => {
		return response.data;
	});
};

const createReminder = (newReminder) => {
	return axios.post(REMINDERS_URI, newReminder).then((response) => {
		return response.data;
	});
};

const deleteReminderById = (id) => {
	return axios
		.delete(`${REMINDERS_URI}/${id}`)
		.then((response) => {
			return response.status === 200;
		})
		.catch(() => {
			return false;
		});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllReminders, createReminder, deleteReminderById };
