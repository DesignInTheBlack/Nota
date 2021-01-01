import './App.css';
import React from 'react';


//Will be used to manage updates to entries later
function Manager() {
  return (
    <div>Managing Content</div>
  );
}

//Trivial Search Component
function Search(props) {
  return (
    <div>
      <label htmlFor="query">Query: </label>
      <input id="query" type="text" onChange={props.onSearch} />
    </div>
  );
}

//Trivial List Component --> Update me as the data structure changes, please.
const List = props => {
  return props.list.map(function (contact) {
    return (
      <div key={contact.contactID}>
        <ul>
          <h4>{contact.Name}</h4>
          <li>Age: {contact.Age}</li>
          <li>Favorite Food: {contact.FavFood}</li>
        </ul>
      </div>
    );
  })
};

const Drop = (props) => {
  return (
    <select id="DropControl" onChange={props.onDrop}>
      <option value="1">Colleagues</option>
      <option value="2">Friends</option>
      <option value="3">Family</option>
    </select>
  );
};

function App() {

  //To be populated with server and database later
  const Friends = [
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

  const Colleagues = [
    {
      Name: 'Tom Dulaney',
      Age: 21,
      FavFood: "Pizza"
    },
    {
      Name: 'Helen Graft',
      Age: 24,
      FavFood: "Tomato Soup"
    },
    {
      Name: 'Nikola Tesla',
      Age: 102,
      FavFood: "English"
    },

  ];

  const Family = [
    {
      Name: 'Samuel Pucker',
      Age: 51,
      FavFood: "Beer"
    },
  ];

  let category = Friends;

  //Search State & Dropdown State Management, Needs Revision
  const [queryTerm, setQueryTerm] = React.useState('');

  const queryUpdate = event => {
    setQueryTerm(event.target.value);
  };

  const [dropTerm, setDropTerm] = React.useState(Friends);

  const dropUpdate = (event) => {
    
    if (event.target.value == "1") {
      console.log(event.target.value)
      setDropTerm(Colleagues);
    }
    else if (event.target.value == "2") {
      console.log("Selected Friends!")
      setDropTerm(Friends);
    }
    else if (event.target.value == "3") {
      console.log("Selected Family!")
      setDropTerm(Family);
    }
    return;
  };

//Search Contact Filtering
const searchedContacts = dropTerm.filter(contact =>
  contact.Name.toLowerCase().includes(queryTerm.toLowerCase())
);

//Primary App Structure
return (
  <div className="App">
    <h2>Welcome to NOTA</h2>
    <Drop onDrop={dropUpdate} />
    <Search onSearch={queryUpdate} />
    <hr></hr>
    <List list={searchedContacts} />
  </div>
);
}

export default App;
