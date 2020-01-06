import React from "react"
import { Link } from "gatsby"
import CookieConsent, { Cookies } from "react-cookie-consent"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.navList}>
        <li>
          <Link to="/omOs" className={footerStyles.navItem}>
            Om os
          </Link>
        </li>

        <li>
          <Link to="/privatPolitik" className={footerStyles.navItem}>
            Privat Politik
          </Link>
        </li>

        <li>
          <Link to="/vilkarBetingelser" className={footerStyles.navItem}>
            Vilkår og Betingelser
          </Link>
        </li>

        <li>
          <Link to="/kontakt" className={footerStyles.navItem}>
            Kontakt os
          </Link>
        </li>
      </ul>
      <h3 style={{ textAlign: "center" }}>&copy; tandlaegeeftersyn.dk</h3>

      <CookieConsent
        location="bottom"
        buttonText="Accepter cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Vi bruger cookies til, at få vores hjemmeside til at virke ordentligt,
        personalisere indhold og reklamer, tilbyde funktioner i forhold til
        sociale medier og analysere vores traffik. Vi deler også information
        vedrørende din brug af vores hjemmeside med analytiske
        samarbejdspartnere.
        <Link to="/cookies" style={{ textDecoration: "none", color: "yellow" }}>
          {" "}
          Læs mere om cookies
        </Link>
      </CookieConsent>
    </footer>
  )
}

export default Footer
