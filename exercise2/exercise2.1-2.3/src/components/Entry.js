import React from "react";

const Entry = ({ contact }) => {
	return (
		<tr>
			<td style={{ paddingRight: "25px" }}>Name: {contact.name}</td>
			<td style={{ paddingLeft: "25px" }}>Number: {contact.phonenumber}</td>
		</tr>
	);
};

export default Entry;
