import React from 'react';
import axios from "axios";
import './App.css';
import DarkModeButton from "./components/DarkModeButton";
import PlayerGrid from "./components/PlayerGrid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res.data)
      this.setState({
        person: res.data
      })
    })
  }


  render(){
    return (
      <div className="App">
        <div className="TopPanel">
          <h1>Players</h1>
          <DarkModeButton />
        </div>
        <div className="PlayerGrid">
          <PlayerGrid players={this.state.person} />
        </div>
      </div>
    )
  }
}

export default App;
