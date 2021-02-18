import React from "react";
import Header from "./Header";
import Contacts from "./Contacts";

const Phonebook = ({ phonebook }) => {
	return (
		<>
			<Header title={phonebook.name}></Header>
			<Contacts contacts={phonebook.contacts}></Contacts>
		</>
	);
};

export default Phonebook;
