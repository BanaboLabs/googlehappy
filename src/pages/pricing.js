import React from "react";
import FullPricingPage from "../components/pages/FullPricingPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";

function PricingPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Pricing" />
      <FullPricingPage />
    </Layout>
  );
}

export default PricingPage;
