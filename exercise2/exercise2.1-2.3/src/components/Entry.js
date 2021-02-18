import React from "react";

const Entry = ({ contact }) => {
	return (
		<tr>
            <td>Name: {contact.name}</td>
            <td>Number: {contact.phonenumber}</td>
		</tr>
	);
};

export default Entry;
