import "reset-css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "next/app";
import Head from "next/head";
import ConfigContext from "../components/ConfigContext";

class MyApp extends App {
  state = {
    config: {
      siteId: process.env.NEXT_PUBLIC_SITE_ID,
      apiUrlBase: process.env.NEXT_PUBLIC_API_URL_BASE,
    },
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>ProjectStart</title>
        </Head>
        <ConfigContext.Provider value={{ config: this.state.config }}>
          <Component {...pageProps} />
        </ConfigContext.Provider>
      </>
    );
  }
}

export default MyApp;
