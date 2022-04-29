import React from "react";
import FullSignUpPage from "../components/pages/FullSignUpPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";

// CURRENTLY DEPRECATED OCT 24th

function SignupPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Signup" />
      <FullSignUpPage />
    </Layout>
  );
}

export default SignupPage;
