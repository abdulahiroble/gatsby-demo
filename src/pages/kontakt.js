import React from "react"
import Layout from "../components/Layout"
import Image from "../components/images.module.scss"

const kontakt = () => {
  return (
    <Layout>
      <h1>Få et Tandeftersyn!</h1>
      <h3 style={{ textAlign: "center" }}>
        Udfyld formularen og vi vil kontakte dem snarest
      </h3>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/succes"
        enctype="multipart/form-data"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Navn"
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label>
          <input
            type="tel"
            name="telefon"
            id="telefon"
            placeholder="Telefon"
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              boxSizing: "border-box",
            }}
          />
        </label>
        <select
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        >
          <option disabled selected>
            Vælg din by
          </option>
          <option value="Rødovre">Rødovre</option>
          <option value="Hvidovre">Hvidovre</option>
          <option value="Glostrup">Glostrup</option>
          <option value="Vanløse">Vanløse</option>
          <option value="frederiksberg">frederiksberg</option>
        </select>
        <br />
        <br />
        <div class={Image.flexButton}>
          <input
            type="submit"
            name="submit"
            value="JA! Jeg Vil Gerne Kontaktes"
            className={Image.myButton2}
            /* style={{ marginLeft: "30%" }} */
          />
        </div>
      </form>
      <br />
      <br />
    </Layout>
  )
}

export default kontakt
