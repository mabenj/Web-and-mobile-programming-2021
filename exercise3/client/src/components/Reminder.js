import React from "react";

export default function Reminder({ reminder, deletionHandler }) {
	const timestamp = new Date(reminder.timestamp);
	return (
		<tr>
			<td className="timestamp">
				<i>{timestamp.toLocaleString()}</i>
			</td>
			<td style={{ width: "300px" }}>
				<p style={{ wordBreak: "break-all" }}>{reminder.name}</p>
			</td>
			<td>
				<button className="delete-btn" onClick={() => deletionHandler(reminder.id)}>
					Poista
				</button>
			</td>
		</tr>
	);
}
