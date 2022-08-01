import React from 'react'
import Baner from "../../Components/Baner"
import "./home.css"
export default function HomePage() {
  return (
    <>
    <Baner />
    <div className='alt'>
    <img src="./asset/farhan.svg" alt="foto"></img>
      <h2>Tentang Saya</h2>
      <p>Nama Lengkap saya farhan Amin Saya saya lahir 9 september 1996 saat ini saya tinggal di kota medan saat ini saya sedang tahap skripsi dan fokus untuk mengikuti coding bootcamp salt academy</p>
        <p>Hobi saya berenang dan camping sama saya sangat suka akan dunia technology blockchain khusus nya nft </p>
      </div>
      <section>
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
      </div>
  </section>
  </>
  )
}
