import React, { Component } from 'react';
import './styles.scss';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.formHandler = this.formHandler.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  formHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSend(e) {
    e.preventDefault();
    //post request
  }


  render() {
    return (
      <div className="Modal">
        <div className="Modal-header">
          <h1>
            Feedback
          </h1>
          <form onSubmit={this.handleSend}>
            <input name="name" type="text" value={this.state.name} onChange={this.formHandler} placeholder="Name" required />
            <input name="email" type="email" value={this.state.email} onChange={this.formHandler} placeholder="john@example.com" required />
            <textarea name="message" maxLength="500" type="text" value={this.state.message} onChange={this.formHandler} placeholder="Message" required />
            <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
