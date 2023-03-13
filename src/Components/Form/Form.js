import "./form.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label> Your Name</label>
        <input type="text"></input>
        <label> Email</label>
        <input type="text"></input>
        <label> Subject</label>
        <input type="text"></input>
        <label> Message</label>
              <textarea row="10" placeholder="Type your message here"></textarea>
              <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;