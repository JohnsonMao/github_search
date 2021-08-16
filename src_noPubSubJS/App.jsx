import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';

export default class App extends Component {

  state = {
    // 初始值
    users: [], // 用戶初始清單
    isFirst: true, // 是否第一次打開畫面
    isLoading: false, // 使否正在載入中
    err: '', // 存取請求相關錯誤訊息
  }

  updataAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div>
        <Header updataAppState = { this.updataAppState } />
        <List { ...this.state } />
      </div>
    )
  }
}
