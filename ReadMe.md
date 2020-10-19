# Readme to the buildInput Folder:

This folder can be pushed to the ohioh.github.io repo to build an awesome PWA

# Browsers:
https://plus.ucweb.com/docs/pwa/docs-en/pwa?spm=ucplus.11213647.toc.2.52ce374fot7Xjm

https://hub.samsunginter.net/docs/ambient-badging/


# Build strategy:

index.html -> app.js -> sw.js -> install -> activation

# Mainfest

The Manifest has to be called in every html page
The "/" in the href point to  the root

"<link rel="mainfest" href="/manifest.json>"

The start_url  is the point when the user has installed the app and run it. This is the Entry-Point to the installed PWA.

The "scope" is the published included view in the PWA. "." = all pages in the folder.

# ServiceWorker
Introduction:
https://developers.google.com/web/fundamentals/primers/service-workers


# index,js

# icons

# Web App install Banner
Introduction:
https://web.dev/promote-install/#browser-promotion

native:
https://developers.google.com/web/fundamentals/app-install-banners/native

costumize:
https://web.dev/customize-install/
https://googlechrome.github.io/samples/app-install-banner/


# bluetooth with chrome
http://dart-gde.github.io/chrome_gen.dart/app/chrome.bluetooth.html


# Head on each html file:
<head>
  <!--
    If you are serving your web app in a path other than the root, change the
    href value below to reflect the base path you are serving from.
    The path provided below has to start and end with a slash "/" in order for
    it to work correctly.
    Fore more details:
    * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
  -->
  <base href="/">

  <!-- Basic meta tags & icons & Microsoft -->
  <meta charset="UTF-8">
  <meta content="IE=Edge" http-equiv="X-UA-Compatible">
  <meta name="description" content="OHIOH: Fight infectionchains.">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-scale=1.0">
  <meta name="msapplication-TitleImage" content="/icons/Icon-144.png">
  <meta name="msapplication-TitleColor" content="#B3B5B2">
  <meta name="theme-color" content="#92d050">

  <!-- iOS meta tags & icons -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="green">
  <meta name="apple-mobile-web-app-title" content="OHIOH">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-57.png">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-60.png">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-72.png">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-76.png">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-114.png">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-120.png">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-144.png">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-152.png">
  <link rel="apple-touch-icon" href="/icons/Icon-apple-180.png">


  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/icons/Icon-96.png"/>

  <title>OHIOH</title>
  <link rel="manifest" href="/manifest.json">
</head>
