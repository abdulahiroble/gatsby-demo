import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, pathname, description }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, siteUrl, defaultDescription },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        siteUrl: `${siteUrl}${pathname || "/"}`,
      }

      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            {seo.siteUrl && (
              <meta property="og:siteUrl" content={seo.siteUrl} />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: propTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  pathname: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: siteUrl
      }
    }
  }
`
