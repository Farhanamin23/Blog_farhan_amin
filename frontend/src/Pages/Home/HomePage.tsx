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
      <br>
      </br>
      <h2>Kontak Saya</h2>
      <p>HP:082278795260</p>
      <p>Email:aminfarhan001@gmail.com</p>
      <p>Alamat:Jln Mergat No 18 Medan</p>
      <iframe title="My Addres in gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.011294986979!2d98.66321671333716!3d3.584880697391233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d4086eefc1%3A0xe8c2b55f209ba5f0!2sJl.%20Mergat%20No.18%2C%20Petisah%20Tengah%2C%20Kec.%20Medan%20Petisah%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020152!5e0!3m2!1sid!2sid!4v1655491767895!5m2!1sid!2sid" width={400} height={140}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
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
