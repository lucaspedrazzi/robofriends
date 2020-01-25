import React, { Component, Fragment } from "react";
import "./App.css";
import "../Components/SearchBox.css";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterdRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <Fragment>
          <section className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filterdRobots} />
            </Scroll>
            
          </section>
        </Fragment>
      );
    }
  }
}

export default App;
