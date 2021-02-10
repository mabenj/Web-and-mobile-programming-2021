import React from "react";
import ReactDOM from "react-dom";

const App = () => {
	const phonebookapp = {
		title: "Superadvanced web phonebook app",
		contacts: [
			{
				name: "John Doe",
				phonenumber: "358401234567"
			},
			{
				name: "Jane Doe",
				phonenumber: "44551234567"
			},
			{
				name: "Foo bar",
				phonenumber: "000"
			}
		]
	};

	return (
		<div>
			<Header title={phonebookapp.title} />
			<Contents contacts={phonebookapp.contacts} />
		</div>
	);
};

const Header = ({ title }) => {
	return <h1>{title}</h1>;
};

const Contents = ({ contacts }) => {
	return (
		<div>
			{contacts.map((contact) => (
				<Entry contact={contact}></Entry>
			))}
		</div>
	);
};

const Entry = ({ contact }) => {
	return (
		<p>
			{contact.name} {contact.phonenumber}
		</p>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
