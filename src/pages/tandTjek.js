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
        {/* <Link to="/kontakt">
          <button className={Image.myButton} style={{ marginLeft: "37%" }}>
            BLIV KONTAKTET
          </button>
        </Link> */}
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
    </Layout>
  )
}

export default tandTjek
