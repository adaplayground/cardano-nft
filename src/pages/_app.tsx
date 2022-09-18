import type { AppProps } from 'next/app';
import Head from 'next/head';
import AOS from 'aos';
import objectFitImages from 'object-fit-images';
import 'aos/dist/aos.css';
import 'styles/fonts/stylesheet.scss';
import 'styles/index.scss';
import { LABELS } from 'lang/labels';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  function detectIE() {
    let ua = window.navigator.userAgent;
    let msie = ua.indexOf('MSIE ');
    let version: boolean | number = false;

    if (msie > 0) {
      // IE 10 or older => return version number
      version = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      version = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    if (version !== false && version <= 11) {
      if (window.NodeList && !NodeList.prototype.forEach) {
        // @ts-ignore
        NodeList.prototype.forEach = Array.prototype.forEach;
      }
      // @ts-ignore
      if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
        // @ts-ignore
        HTMLCollection.prototype.forEach = Array.prototype.forEach;
      }
      return true;
    } else {
      return false;
    }
  }

  objectFitImages();
  React.useEffect(() => {
    AOS.init({
      disabled: detectIE(),
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      offset: 120, // offset (in px) from the original trigger point
      delay: 150, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
    AOS.refresh();
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{LABELS.APP_TITLE}</title>
      </Head>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </>
  );
}
