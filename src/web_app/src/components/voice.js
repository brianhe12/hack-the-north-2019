import React, { Component } from "react";

class Voice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("http://greenman.serveo.net/result")
      .then(res => res.json())
      .then(
        result => {
          console.log("Greenman");
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    return (
      <div className="voice">
        <h2>Ingredients ready?</h2>
        <p>Insert checklist here</p>
      </div>
    );
  }
}
export default Voice;
