// bring in bootstrap css file with responsive css media queries
import "bootstrap/dist/css/bootstrap.css"
import '../styles/globals.css';
import { NextFetchEvent } from "next/server";

//const (getpeople) , NextFetchEvent
// define our next.js' master MyApp
function MyApp( { Component, pageProps } ) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
