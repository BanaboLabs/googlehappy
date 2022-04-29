import React from "react";
import FullDocsPage from "../components/pages/FullDocsPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";

function DocsPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Docs" />
      <FullDocsPage />
    </Layout>
  );
}

export default DocsPage;
