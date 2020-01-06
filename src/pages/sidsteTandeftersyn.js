import React from "react"
import Layout from "../components/Layout"
import Image from "../components/images.module.scss"
import { Link } from "gatsby"
import Index from "../components/index.module.scss"

const sidsteTandeftersyn = () => {
  return (
    <Layout>
      <div className={Image.displaySecondBanner}>
        <h1 className={Image.h1Second}>
          Hvornår blev dine tænder sidst tjekket?
        </h1>
        <Link to="/kontakt">
          <button className={Image.myButton} style={{ marginLeft: "37%" }}>
            BLIV KONTAKTET
          </button>
        </Link>
      </div>

      <br />

      <p className={Index.p}>
        For at undgå huller i tænderne, tandkødsbetændelse samt dårlig ånde skal
        tænder, tandkød og tunge holdes rene hver dag.{" "}
      </p>

      <p>
        Men hvad mange ikke er så klar over er for at kunne bevare sunde tænder
        er et regelmæssigt besøg hos tandlægen lige så vigtig.
      </p>

      <p>
        Det er individuelt hvor ofte man skal gå til tandlægen. <br></br> <br />{" "}
        Hvor hyppigt man har brug for et tandeftersyn fastlægges ud fra om man
        er i grøn, gul eller rød kategori.{" "}
        <a
          target="_blank"
          href="https://www.tandlaegeforeningen.dk/patienter/er-du-groen-gul-eller-roed/fakta-om-roed-gul-groen-ordningen-hos-tandlaegen/"
          style={{ textDecoration: "none" }}
        >
          Læs mere her
        </a>
      </p>

      <br />

      <div className={Image.plastFyldning}>
        <h1 className={Image.h1}>Plastfyldning</h1>
      </div>

      <br />

      <div className={Image.tandRetning}>
        <h1 className={Image.h1}>Tandretning</h1>
      </div>

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

export default sidsteTandeftersyn
