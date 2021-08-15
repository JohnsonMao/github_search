import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';

export default class App extends Component {

  state = {
    // 初始值
    users: []
  }

  saveUsers = (users) => {
    this.setState({users})
  }

  render() {

    const {users} = this.state;

    return (
      <div>
        <Header saveUsers = { this.saveUsers } />
        <List users = { users } />
      </div>
    )
  }
}
