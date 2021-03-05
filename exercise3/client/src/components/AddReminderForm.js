import React from "react";

export default function AddReminderForm({ submitHandler, setName, setDateTime, nameValue, dateTimeValue }) {
	const onDateChange = (e) => {
		setDateTime({ date: e.target.value, time: dateTimeValue.time });
	};

	const onTimeChange = (e) => {
		setDateTime({ date: dateTimeValue.date, time: e.target.value });
	};

	return (
		<form onSubmit={submitHandler}>
			<table>
				<tbody>
					<tr>
						<td>Aihe</td>
						<td>
							<input
								value={nameValue}
								onChange={(e) => setName(e.target.value)}
								placeholder="Osta makkaraa..."
								required
							/>
						</td>
					</tr>
					<tr>
						<td>Päivämäärä ja aika</td>
						<td>
							<input value={dateTimeValue.date} onChange={onDateChange} type="date" style={{ marginRight: "20px" }} />
							<input value={dateTimeValue.time} onChange={onTimeChange} type="time" />
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<button type="submit">Lisää</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}
