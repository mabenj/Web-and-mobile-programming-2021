import React from "react";
import Entry from "./Entry";

const Contacts = ({ contacts }) => {
	return (
		<>
			<table style={{ width: "100%" }}>
				<tbody>
					{contacts.map((contact, i) => (
						<Entry key={i} contact={contact}></Entry>
					))}
				</tbody>
			</table>
			<p>Total number of entries: {contacts.length}</p>
		</>
	);
};

export default Contacts;
