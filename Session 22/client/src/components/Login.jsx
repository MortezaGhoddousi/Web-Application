import { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    const result = await axios.post(
      "http://localhost:8000/api/user/" + this.state.username,
      this.state
    );
    console.log(result);
    this.setState({
      username: "",
      password: "",
    });
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.id]: e.target.value });
  };

  handleLinkClick = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8000/auth/google")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
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

        <label htmlFor="submit">
          <input type="submit" name="submit" id="submit" />
        </label>

        <a onClick={this.handleLinkClick} href="">
          SIGN IN WITH GOOGLE
        </a>
      </form>
    );
  }
}

export default Login;