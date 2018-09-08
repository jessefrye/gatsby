import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/header";
import "./index.css";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Jesse tests Gatsby"
      link={[
        {
          rel: "shortcut icon",
          href: require("./favicon.ico"),
        },
      ]}
      meta={[
        {
          name: "Jesse tries Gatsby",
          content: "Tell me more about Daisy Buchanan",
        },
        { name: "keywords", content: "nothing, important, here" },
      ]}
    />
    <Header siteTitle="Jesse tests Gatsby" />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}>
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
