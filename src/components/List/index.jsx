import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="container text-center">
        <ul className="row row-cols-2 row-cols-md-4 row-cols-lg-6">
          <li className="col">
            <div className="card">
              <img src="./logo192.png" alt="logo" />
              <h2>mao</h2>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
