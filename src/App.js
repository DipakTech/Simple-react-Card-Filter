import React, { Component } from 'react';
import { CardList } from './conponents/card-list/card-list-component.js'
import { SearchBox } from './conponents/search-box/search-box-component.js';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
 componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
 }
  
  handleChange=(e) =>{
    this.setState({searchField:e.target.value})
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Card list filter</h1>
        <SearchBox
          placeholder='Search monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
    </div>
  )
  };

}

export default App;
