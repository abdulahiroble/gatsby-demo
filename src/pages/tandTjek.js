import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Index from "../components/index.module.scss"
import Image from "../components/images.module.scss"

const tandTjek = () => {
  return (
    <Layout>
      <div className={Image.displayThirdBanner}>
        <h1 className={Image.h1Second}>Hvor ofte bør ens tænder tjekkes</h1>
        <Link to="/kontakt">
          <button className={Image.myButton} style={{ marginLeft: "37%" }}>
            BLIV KONTAKTET
          </button>
        </Link>
      </div>

      <br />

      <p className={Index.p}>
        Det anbefales at du som minimum får lavet et tandeftersyn en gang om
        året. Men hvad der helt præcist er dit behov skal du have talt med din
        tandlæge om ved et tandeftersyn
      </p>

      <p>
        Derudover er det individuelt hvor ofte man skal gå til tandlægen. Hvor
        hyppigt man har brug for et tandeftersyn fastlægges ud fra om man er i
        grøn, gul eller rød kategori.{" "}
        <a
          target="_blank"
          href="https://www.tandlaegeforeningen.dk/patienter/er-du-groen-gul-eller-roed/fakta-om-roed-gul-groen-ordningen-hos-tandlaegen/"
          style={{ textDecoration: "none" }}
        >
          Læs mere her
        </a>
      </p>

      <div className={Image.dreamSmile}>
        <h1 className={Image.h1Third}>Få Dit Drømme Smil</h1>
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

export default tandTjek
