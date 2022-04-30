import React from "react";
import FullV2TermsPage from "../components/pages/FullV2PrivacyPage.js";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

function LandingPage() {
  return (
    <Layout>
      <SEO title="Banabo" />
      <FullV2TermsPage />
    </Layout>
  );
}

export default LandingPage;
