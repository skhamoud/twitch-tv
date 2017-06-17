import React, { Component } from "react";
import Users from "./components/users";
import { fetchData } from "./api";

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
    fetchData().then(res => {
      Promise.all([...res]).then(res => {
        this.setState({ usersData: res });
      });
    });

    // TODO: Abstract Api calls with Promise.all ?
    // setting state every time is dumb
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
