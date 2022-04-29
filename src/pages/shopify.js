import React from "react";
import FullShopifyPage from "../components/pages/FullShopifyPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";

function ShopifyPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Shopify Docs" />
      <FullShopifyPage />
    </Layout>
  );
}

export default ShopifyPage;
