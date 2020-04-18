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
        {/* <Link to="/kontakt">
          <button className={Image.myButton} style={{ marginLeft: "37%" }}>
            BLIV KONTAKTET
          </button>
        </Link> */}
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
    </Layout>
  )
}

export default sidsteTandeftersyn
