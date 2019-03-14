import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  remainingChars = () => {
    let chars = this.props.maxChars - this.state.message.length
    return chars
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.updateMessage}/>
        <p>Remaining Characters: {this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
