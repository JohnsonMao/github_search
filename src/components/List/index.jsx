import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="container text-center py-3">
        <ul className="row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-3">
          {
            this.props.users.map((user)=>{
              return (
                <li className="col" key={user.id}>
                  <div className="card">
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                      <img src={user.avatar_url} className="card-img-top" alt={user.login} />
                      <h2>{user.login}</h2>
                    </a>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
