import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Image from "../components/images.module.scss"
import Index from "../components/index.module.scss"

const index = () => {
  return (
    <Layout>
      <div className={Image.displayBanner}>
        <h1 className={Image.h1}>Tandeftersyn</h1>
        <Link to="/kontakt">
          <button className={Image.myButton} style={{ marginLeft: "37%" }}>
            BLIV KONTAKTET
          </button>
        </Link>
      </div>
      <br />

      <p className={Index.p}>
        Regelmæssige tandeftersyn har flere fordele i følge{" "}
        <a
          target="_blank"
          href="https://www.tandlaegeforeningen.dk/om-tandlaegeforeningen/det-mener-tf/maerkesager/regelmaessig-tandpleje/"
          style={{ textDecoration: "none" }}
        >
          Tandlægeforeningen.
        </a>{" "}
      </p>

      <p>
        Blandt andet opnår man at få tjekket sine tænder og mund af en
        professionel.
      </p>

      <p className={Index.p}>
        En anden fordel er at man kan få gode tips om hvordan man selv kan holde
        tænderne rene og sunde.
      </p>

      <div className={Image.tandImplant}>
        <h1 className={Image.h1}>Tandimplant</h1>
      </div>

      <br />
      <div className={Image.rodBehandling}>
        <h1 className={Image.h1}>Rodbehandling</h1>
      </div>

      <br />
      <br />

      <h1>Få et Tandeftersyn!</h1>
      <h3 style={{ textAlign: "center" }}>
        Udfyld formularen og vi vil kontakte dem snarest
      </h3>

      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/succes"
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

export default index
