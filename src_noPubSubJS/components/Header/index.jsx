import React, { Component } from 'react';
import axios from 'axios';

export default class Header extends Component {
  
  search = (event) => {
    // 阻止默認行為
    event.preventDefault();
    // 獲取輸入
    const { keyWordElement:{ value: keyWord }} = this
    // 發動請求前，更新狀態
    this.props.updataAppState({isFirst: false, isLoading: true})
    // 發送請求
    axios
      .get(` https://api.github.com/search/users?q=${keyWord}`)
      .then(
        response => { 
          // 請求成功後，更新狀態
          this.props.updataAppState({isLoading: false, users: response.data.items})
        },
        error => {
          // 請求失敗後，更新狀態
          this.props.updataAppState({isLoading: false, err:error.message})
        }
      )
  }
  
  render() {
    return (
      <header className="container d-flex flex-column align-items-center">
        <h1 className="pt-3">Github search</h1>
        <form className="d-flex">
          <input ref={ c => this.keyWordElement = c } className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button onClick={ this.search } className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </header>
    )
  }
}
