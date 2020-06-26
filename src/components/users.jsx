import React, { Component } from "react";
import * as userService from "../services/userService";

class Users extends Component {
  state = {
    Users: [],
    categories: [],
  };

  async componentDidMount() {
    const success = await userService.getusers();

    this.setState({ Users: success.data });
  }

  render() {
    return (
      <div className="container mt-3 box w-40">
        <h1>This is Users page </h1>
        <table className="table">
          <thead className="App-nav">
            <tr>
              <th>Name</th>
              <th>E-mail id</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{product.price} </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
