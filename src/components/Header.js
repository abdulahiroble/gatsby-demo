import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Tandlægeeftersyn
        </Link>
      </h1>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/sidsteTandeftersyn"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Hvonår fik du sidst et Tandeftersyn?
            </Link>
          </li>
          <li>
            <Link
              to="/tandTjek"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Hvor Ofte Bør Man Tjekkes?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
