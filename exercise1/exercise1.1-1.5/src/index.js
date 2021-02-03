import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.title}</h1>
}

const Contents = (props) => {
  return (
    <div>
      <Entry contact={props.contacts[0]} />
      <Entry contact={props.contacts[1]} />
      <Entry contact={props.contacts[2]} />
    </div>
  )
}

const Entry = (props) => {
  return <p>{props.contact.name} {props.contact.phonenumber}</p>
}

const App = () => {
  const phonebookapp = {
    title: 'Superadvanced web phonebook app',
    contacts: [
      {
        name: 'John Doe',
        phonenumber: '358401234567'
      },
      {
        name: 'Jane Doe',
        phonenumber: '44551234567'
      },
      {
        name: 'Foo bar',
        phonenumber: '000'
      }
    ]
  }

  return (
    <div>
      <Header title={phonebookapp.title} />
      <Contents contacts={phonebookapp.contacts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
