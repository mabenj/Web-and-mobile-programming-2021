import React from "react";
import Reminder from "./Reminder";

export default function Reminders({ reminders, deletionHandler }) {
	return (
		<table>
			<tbody>
				{reminders
					.sort((a, b) => {
						return new Date(a.timestamp) - new Date(b.timestamp);
					})
					.map((reminder) => (
						<Reminder key={reminder.id} reminder={reminder} deletionHandler={deletionHandler} />
					))}
			</tbody>
		</table>
	);
}
