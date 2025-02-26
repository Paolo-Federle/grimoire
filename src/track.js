import React, { useEffect } from "react";

const GA_TRACKING_ID = "G-1C77GSRQSW";

function useGoogleAnalytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);
  }, []);
}

export default useGoogleAnalytics;
