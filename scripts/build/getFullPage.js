module.exports = function (dev, appHtml) {
  return (`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>The Best of JavaScript and the web platorm</title>
        <meta name="description" content="bestof.js.org is a place where front-end engineers and node.js developers can find the best components to build amazing web applications.">
        <!-- added for Github pages -->
        <link rel="shortcut icon" href="favicon.ico">
        ${dev ? '<!-- No external stylesheet in dev mode -->' : '<link rel="stylesheet" href="build/app.css">'}
      </head>
      <body>
        <div id="app">
          ${dev ? '' : `<div>${appHtml}</div>`}
        </div>
        <!-- Async load cross-site CSS, mostly interesting for production -->
        <script>
          window.bestofjs = {};
          function loadCSS(e,t,n){"use strict";var i=window.document.createElement("link");var o=t||window.document.getElementsByTagName("script")[0];i.rel="stylesheet";i.href=e;i.media="only x";o.parentNode.insertBefore(i,o);setTimeout(function(){i.media=n||"all"})}
          loadCSS('https://fonts.googleapis.com/css?family=Roboto:400,300,500');
          loadCSS('https://cdnjs.cloudflare.com/ajax/libs/octicons/3.1.0/octicons.min.css');
        </script>
        <script src="http://cdn.auth0.com/w2/auth0-6.7.js"></script>
        ${dev ? '<script src="build/bundle-vendor.js"></script>' : ''}
        <script src="build/bundle-app.js"></script>
      </body>
    </html>
  `);
}