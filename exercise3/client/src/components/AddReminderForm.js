import React from "react";

const AddReminderForm = ({ submitHandler, nameChangeHandler, dateChangeHandler, nameValue, dateValue }) => {
	return (
		<form onSubmit={submitHandler}>
			<table>
				<tbody>
					<tr>
						<td>Aihe:</td>
						<td>
							<input value={nameValue} onChange={nameChangeHandler} />
						</td>
					</tr>
					<tr>
						<td>Päivämäärä:</td>
						<td>
							<input value={dateValue} onChange={dateChangeHandler} type="datetime-local" />
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
};

export default AddReminderForm;
