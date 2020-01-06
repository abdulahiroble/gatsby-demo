import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Image from "../components/images.module.scss"

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" className={Image.checkBox} style={{ width: "100%" }}><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg>
          <p className={Image.succesText} /* style={{ textAlign: "center"}} */>Tak. De vil blive kontaktet snarest!</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;