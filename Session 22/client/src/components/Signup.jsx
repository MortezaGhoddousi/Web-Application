import { Component } from "react";
import axios from "axios";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:8000/api/user/" + this.state.username,
      this.state
    );
    console.log(result);
    this.setState({
      username: "",
      password: "",
      email: "",
    });
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.id]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="submit">
          <input type="submit" name="submit" id="submit" />
        </label>
      </form>
    );
  }
}

export default Signup;
