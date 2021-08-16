import React, { Component } from 'react'

export default class List extends Component {
  render() {

    const { users, isFirst, isLoading, err } = this.props

    return (
      <div className="container text-center py-3">
        <ul className="row g-3">
          {
            isFirst ? <h2 className="h1">Welcome! Enter keywords and click search.</h2> :
            isLoading ? <h2 className="h1">Loading...</h2> :
            err ? <h2 className="text-danger">{err}</h2> :
            users.map((user)=>{
              return (
                <li className="col-6 col-lg-4 col-xl-3" key={user.id}>
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
