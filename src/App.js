import React, { Component } from "react";
import Streamers from "./components/Streamers";
import { fetchData } from "./api";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamsData: [],
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetchData().then(res => {
      Promise.all([...res]).then(res => {
        this.setState({ streamsData: res });
      });
    });

    // TODO: Abstract Api calls with Promise.all ?
    // setting state every time is dumb
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Streamers streamers={this.state.streamsData} />
      </div>
    );
  }
}

export default App;
