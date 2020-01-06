import React from "react"
import Layout from "../components/Layout"

const cookies = () => {
  return (
    <Layout>
      <h1>Cookiepolitik</h1>

      <p style={{ textAlign: "left" }}>
        Hjemmesiden anvender "cookies". Cookies er en tekstfil, der gemmes på
        din computer, mobiltelefon, tablet eller tilsvarende med det formål at
        genkende den, huske indstillinger, udfører statistik og målrette
        annoncer. Cookies kan ikke indeholde skadelig kode som f.eks virus.
        <br />
        Du kan slette eller blokerer cookies. Se hvordan her:{" "}
        <a
          href="http://minecookies.org/cookiehandtering"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          http://minecookies.org/cookiehandtering
        </a>
      </p>

      <h3>Nødvendige cookies</h3>

      <p style={{ textAlign: "left" }}>
        Nogle cookies kræves for at hjemmesiden kan fungere. Hjemmesiden
        fungerer ikke korrekt uden disse cookies, og de er som standard
        aktiveret.
      </p>

      <h3>Google Analytics</h3>

      <p style={{ textAlign: "left" }}>
        Disse cookies giver os mulighed for at tælle besøgende og trafikkilder,
        så vi kan måle og forbedre ydeevnen af vores hjemmeside. De hjælper os
        med at finde ud af, hvilke sider der er mest og mindst populære samt
        hvordan de besøgende bevæger sig på siden. <br />
        <a
          href="http://tools.google.com/dlpage/gaoptout"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Klik her for at fravælge cookies fra Google Analytics
        </a>
      </p>
    </Layout>
  )
}

export default cookies
