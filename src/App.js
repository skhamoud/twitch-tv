import React, { Component } from "react";
import Users from "./components/users";
import { getUsersData, getUserStream } from "./api";

import "noty/lib/noty.css";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    getUsersData().then(res => {
      const newUsers = [];
      return res.data.users.map(user => {
        let newUserData = {};
        return getUserStream(user._id).then(res => {
          newUserData = Object.assign({}, user, res.data);
          newUsers.push(newUserData);
          this.setState({ usersData: newUsers, loading: false });
        });
      });
    });
    // getStreams().then(result => console.log(result.data));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Users users={this.state.usersData} />
      </div>
    );
  }
}

export default App;
