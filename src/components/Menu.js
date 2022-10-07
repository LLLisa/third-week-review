import React from 'react';
import axios from 'axios';
import Users from './Users';
import Schools from './Schools';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      //set the default state to the data type it will be
      //THIS WILL SAVE YOUR LIFE as your projects get bigger
      selectedList: '',
      userList: [],
      schoolList: [],
    };
    this.selectList = this.selectList.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getSchools = this.getSchools.bind(this);
  }

  //this runs the first time a component renders
  //set pieces of state to their initial values
  componentDidMount() {
    this.setState({ selectedList: 'Users' });
    this.getUsers();
    this.getSchools();
  }

  //this is how axios ties everything together: this method makes a call to
  //the api, the api makes a call to the database, database returns data
  //to the api, api returns data to this method
  async getUsers() {
    const users = await axios.get('./users');
    this.setState({ userList: users.data });
  }

  async getSchools() {
    const schools = await axios.get('./schools');
    this.setState({ schoolList: schools.data });
  }

  //this is an event handler that handles the 'onClick' event below
  selectList(ev) {
    this.setState({ selectedList: ev.target.innerText });
  }

  render() {
    //destructuring selectedList because it is being used twice
    const { selectedList, userList, schoolList } = this.state;
    return (
      <>
        <h1 id='header'>{selectedList}</h1>
        <nav id='nav'>
          <h2 name='Users' onClick={(ev) => this.selectList(ev)}>
            Users
          </h2>
          <h2 name='Schools' onClick={(ev) => this.selectList(ev)}>
            Schools
          </h2>
        </nav>
        {/* display one component or the other based on this.state.selectedList */}
        {selectedList === 'Users' ? (
          <Users userList={userList} />
        ) : (
          <Schools schoolList={schoolList} />
        )}
      </>
    );
  }
}

export default Menu;
