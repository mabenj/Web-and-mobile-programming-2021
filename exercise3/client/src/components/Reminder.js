import React from "react";

const Reminder = ({ reminder, deletionHandler }) => {
	const timestamp = new Date(reminder.timestamp);
	const timestampString = `${timestamp.toLocaleString()}`;
	return (
		<tr>
			<td className="timestamp">
				<i>{timestampString}</i>
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
};

export default Reminder;
