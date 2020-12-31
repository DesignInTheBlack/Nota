import logo from './logo.svg';
import './App.css';
import React from 'react';


//Will be used to manage updates to entries
function Manager() {
  return (
    <div>Managing Content</div>
  );
}

//Trivial Search Component
function Search() {
  return (
    <div>
      <label htmlFor="search">Query: </label>
      <input id="search" type="text" />
    </div>
  );
}

//Trivial List Component --> Update me as the data structure changes, please.
const List = props => {
 return props.list.map(function(contact) {
  return (
   <div key = {contact.contactID}>
    <ul>
      <h4>{contact.Name}</h4>
      <li>Age: {contact.Age}</li>
      <li>Favorite Food: {contact.FavFood}</li>
    </ul>
   </div>
 );
})};


function App() {

  //Search State Management
  const [query, setQuery] = React.useState('');
  const queryUpdate = event => {
    setQuery(event.target.value);
  };

  //To be populated with server and database later
  const dummydata = [
    {
      Name: 'James Dulaney',
      Age: 31,
      FavFood: "Calzone"
    },
    {
      Name: 'Alana Kraus',
      Age: 24,
      FavFood: "French Onion Soup"
    },
    {
      Name: 'Thomas Edison',
      Age: 110,
      FavFood: "Freshly Baked Bread"
    },
  
  ];

  return (
    <div className="App">
      <h2>Welcome to Nota</h2>
      <Search />
      <hr></hr>
      <List list = {dummydata}/>
    </div>
  );
}

export default App;
