import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Header extends Component {
  search = (event) => {
    // 阻止默認行為
    event.preventDefault();
    // 獲取輸入
    const {
      keyWordElement: { value: keyWord },
    } = this;
    // 發動請求前，更新狀態
    PubSub.publish("search", { isFirst: false, isLoading: true });
    // 發送請求
    axios.get(` https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        // 請求成功後，更新狀態
        PubSub.publish("search", {
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        // 請求失敗後，更新狀態
        PubSub.publish("search", { isLoading: false, err: error.message });
      }
    );
  };

  render() {
    return (
      <header className="container w-50">
        <h1 className="text-center">
          <label htmlFor="search">Github Search</label>
        </h1>
        <form>
          <div className="input-group">
            <input
              ref={(c) => (this.keyWordElement = c)}
              id="search"
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={this.search}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </header>
    );
  }
}
