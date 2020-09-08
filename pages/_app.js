import "reset-css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

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

  // componentDidMount = () => {
  //   window.addEventListener("scroll", this.handleScroll, true);
  // };

  // componentWillUnmount = () => {
  //   window.removeEventListener("scroll", this.handleScroll);
  // };

  // handleScroll = () => {
  //   // console.log(document.body.scrollTop);
  //   if (
  //     document.body.scrollTop > 150 ||
  //     document.documentElement.scrollTop > 150
  //   ) {
  //     document.getElementById("top-menu-nav").classList.add("shrink");
  //   } else {
  //     document.getElementById("top-menu-nav").classList.remove("shrink");
  //   }
  // };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>ProjectStart</title>
          {/* <link
            rel="shortcut icon"
            href="/images/petcarioca.oficial.jpg"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            id="et-builder-googlefonts-cached-css"
            href="https://fonts.googleapis.com/css?family=Quicksand%3A300%2Cregular%2C500%2C700&#038;ver=5.4.2#038;subset=latin,latin-ext"
            type="text/css"
            media="all"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Verdana&v1"
            rel="stylesheet"
            type="text/css"
          /> */}
        </Head>
        <ConfigContext.Provider value={{ config: this.state.config }}>
          <Component {...pageProps} />
        </ConfigContext.Provider>
      </>
    );
  }
}

export default MyApp;
