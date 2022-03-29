import React from "react";

function Contact() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="content">
            <h2>Contact Us</h2>
            <p>
              If you want to buy soccer equipment from our online store but
              can’t find what you are looking for, please contact us. We will
              have one of our Team Sales Representatives work with you today.
            </p>
          </div>
          <div className="container1">
            <div className="contactInfo">
              <div className="box">
                <div className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>4400 Sharon Rd, Charlotte, NC 28211</p>
                </div>
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    <h3>Phone</h3>
                    <p>704-123-4567</p>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <h3>Email</h3>
                      <p>Puranbhujel01@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="wrapper">
            <form action="" method="POST">
              <div className="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="First and Last"
                  required
                  minlength="3"
                  maxlength="25"
                />
              </div>
              <div className="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="email@domain.com"
                  required
                />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  name="Message"
                  id="message"
                  rows="5"
                  placeholder="Type your message here...."
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="submit">
                  <i className="far fa-paper-plane"></i>Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
