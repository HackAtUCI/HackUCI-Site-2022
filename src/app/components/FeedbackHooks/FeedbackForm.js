import React, { Component } from 'react';
import './styles.scss';

const { useState } = React;

export function FeedbackForm(props) {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")

  const handleSend = (e) => {
      e.preventDefault();
      //post request
  }

  return (
    <div className="Modal">
      <div className="Modal-header">
        <h1>
          Feedback
        </h1>
        <form onSubmit={handleSend}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" required />
          <textarea maxLength="500" type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" required />
          <input type="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
}
