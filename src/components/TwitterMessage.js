import React, {Component} from "react";

class TwitterMessage extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChangeMessage = event => {
    // debugger
    const newMessage = event.target.value;
    this.setState(prevState => {
      return {
        message: newMessage
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChangeMessage} name="message" id="message" value={this.state.message}/>
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
