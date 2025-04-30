"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XZ6CQ9J0CJ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZ6CQ9J0CJ');
          `,
        }}
      />

      {/* Matomo Analytics */}
      <Script
        id="matomo"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://cosmostrategy.matomo.cloud/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://cosmostrategy.matomo.cloud/matomo.js';
              s.parentNode.insertBefore(g,s);
            })();
          `,
        }}
      />
    </>
  );
}
