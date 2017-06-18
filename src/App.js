import React, { Component } from "react";
import Streamers from "./components/Streamers";
import Header from "./components/Header";
import { fetchData } from "./api";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamsData: [],
      loading: false,
      filter: "all"
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
  filterData(filter) {
    this.setState({ filter });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="container ">
          <div className="columns" style={{ paddingTop: "40px" }}>
            <div className="column is-offset-2 is-6">
              <Header filterData={this.filterData.bind(this)} />
              <Streamers {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
