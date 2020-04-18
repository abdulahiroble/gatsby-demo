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
        {/* <Link to="/kontakt">
          <button className={Image.myButton} style={{ marginLeft: "37%" }}>
            BLIV KONTAKTET
          </button>
        </Link> */}
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
    </Layout>
  )
}

export default index
