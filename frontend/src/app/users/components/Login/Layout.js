// Dependencies
import React from "react";
import Header from "next/head";

// Components
import Login from "./Login";

// Styles
import styles from "./Layout.scss";

const Layout = () => {
  <>
    <Header>
      <title>Login</title>
      <meta name="title" content="Login" />
    </Header>

    <Login />
  </>;
};
