import React from 'react'
import Baner from "../../Components/Baner"
import "./home.css"
export default function HomePage() {
  return (
    <>
    <Baner />
    <div className='alt'>
    <img src="./asset/farhan.svg" alt="foto"></img>
      <h2>About Me</h2>
      <p>My fully name is farhan Amin I was born 9 September 1996 I currently live in the city of Medan I am currently in the thesis stage and focus on participating in coding bootcamp salt academy</p>
      <p>My hobbies are swimming and camping, I really like the world of blockchain technology, especially NFT</p>
      <br>
      </br>
      <div className="container">
        <div className="contact-parent">
          <div className="contact-child child1">
            <b>
              <i className="fas fa-map-marker-alt" /> Address <br />
              <span>  
                {" "}
                Jalan Mergat No 18
                <br />
                Medan, North Sumatra
              </span>
            </b>
            <b>
              <i className="fas fa-phone-alt" /> Let's Talk <br />
              <span> 082278795260</span>
            </b>
            <b>
              <i className=" far fa-envelope" /> Personal Email <br />
              <span>aminfarhan001@gmail.com</span>
            </b>
          </div>
          <div className="contact-child child2">
            <div className="inside-contact">
              <h2>Contact Us</h2>
              <h3>
                <span id="confirm"></span>
              </h3>
              <p>Name *</p>
              <input id="txt_name" type="text" />
              <p>Email *</p>
              <input id="txt_email" type="text" />
              <p>Phone *</p>
              <input id="txt_phone" type="text" />
              <p>Subject *</p>
              <input id="txt_subject" type="text" />
              <p>Message *</p>
              <textarea id="txt_message" rows={4} cols={20} defaultValue={""}
              />
              <input type="submit" id="btn_send" defaultValue="SEND" />
            </div>
          </div>
        </div>
    </div>
      </div>
      <footer className='social'>
          <div className="wrapper">
            <a href="/" className="icon facebook">
          <div className="tooltip">Facebook</div>
          <span>
            <i className="fab fa-facebook-f" />
          </span>
        </a>
        <a href="/" className="icon twitter">
          <div className="tooltip">Twitter</div>
          <span>
            <i className="fab fa-twitter" />
          </span>
        </a>
        <a href="/" className="icon instagram">
          <div className="tooltip">Instagram</div>
          <span>
            <i className="fab fa-instagram" />
          </span>
        </a>
        <a href="/" className="icon github">
          <div className="tooltip">Github</div>
          <span>
            <i className="fab fa-github" />
          </span>
        </a>
          <div>
            <h5>&copy; 2022 Farhan Amin</h5>
        </div>
      </div>
  </footer>
  </>
  )
}
