import React from "react";
import FullWebflowPage from "../components/pages/FullWebflowPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";

function WebflowPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Webflow Docs" />
      <FullWebflowPage />
    </Layout>
  );
}

export default WebflowPage;
