const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

export function initGoogleAnalytics() {
     // Google Analytics
  if (!GA_ID) {
    console.warn("Google Analytics ID is missing");
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_ID);

  // Microsoft Clarity
  if (CLARITY_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };

      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;

      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }
}