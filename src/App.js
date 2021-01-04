import './App.css';
import React from 'react';

//Will be used to manage updates to entries later
function Manager() {
  return (
    <div>Managing Content</div>
  );
}

//Modal Component for Expanded List Entries

//TODO: 
function Modal(props) {

  const [toggle, setToggle] = React.useState(false);

  const toggleSet = () => {
    setToggle(!toggle)
  }

  if (toggle == true) {
    return (
      <div>
        <div className = "LimitedView">
        <h5 className = "EntryTitleOpen">{props.data.Name}</h5>
        <button className = "Toggle" onClick={toggleSet}>▲</button>
        </div>
        <div className="ExtendedView">
          <p>Age: {props.data.Age}</p>
          <p>Favorite Food: {props.data.FavFood}</p>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className = "LimitedView">
      <h5 className = "EntryTitle">{props.data.Name}</h5>
      <button className = "Toggle" onClick={toggleSet}>▼</button>
      </div>
    )
  }
};

//Trivial Search Component

//TODO: Modal Will Require Revision. Entries in relative position remain open if the active list is switched. 
function Search(props) {
  return (
    <div>
      <input className="Search" type="text" placeholder="Search..." onChange={props.onSearch} />
    </div>
  );
}

//Trivial List Component --> Update me as the data structure changes, please.

const List = props => {
  return props.list.map(function (contact) {
    return (
      <div className="List" key={contact.contactID}>
        <div>
          <Modal data={contact}></Modal>
        </div>
      </div>
    );
  })
};

const Drop = (props) => {
  return (
    <select className="Drop" id="DropControl" onChange={props.onDrop}>
      <option value="1">Friends</option>
      <option value="2">Colleagues</option>
      <option value="3">Family</option>
    </select>
  );
};

function App() {

  //Category Arrays, To Replace with Server Logic Later
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

  //State Management, Needs Revision

  // - - - Query Management
  const [queryTerm, setQueryTerm] = React.useState('');

  const queryUpdate = event => {
    setQueryTerm(event.target.value);
  };

  // - - - DropDown Management
  const [dropTerm, setDropTerm] = React.useState(Friends);

  const dropUpdate = (event) => {

    if (event.target.value == "1") {
      console.log(event.target.value)
      setDropTerm(Friends);
    }
    else if (event.target.value == "2") {
      console.log("Selected Friends!")
      setDropTerm(Colleagues);
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
      <div className="StyleContainer">
        <div className="Header">
          <h2 className="Title">nøta</h2>
          <Drop onDrop={dropUpdate} />
          <Search onSearch={queryUpdate} />
        </div>
        <List list={searchedContacts} />
      </div>
    </div>
  );
}

export default App;
