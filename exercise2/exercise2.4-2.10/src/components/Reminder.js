import React from "react";

const Reminder = ({ reminder, deletionHandler }) => {
	const timestamp = new Date(reminder.timestamp);
	const timestampString = `${timestamp.toLocaleString()}`;
	return (
		<tr>
			<td style={{ width: "1px", whiteSpace: "nowrap", color: "grey" }}>
				<i>{timestampString}</i>
			</td>
			<td>{reminder.name}</td>
			<td>
				<button className="delete-btn" onClick={() => deletionHandler(reminder.id)}>
					Poista
				</button>
			</td>
		</tr>
	);
};

export default Reminder;
