import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import FullContactPage from "../components/pages/FullContactPage";
import { Helmet } from "react-helmet";

function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Contact" />
      <FullContactPage />
    </Layout>
  );
}

export default ContactPage;
