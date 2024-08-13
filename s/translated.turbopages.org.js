// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/translated.turbopages.org.js
// @icon https://cdn.trustpilot.net/brand-assets/4.3.0/favicons/apple-touch-icon.png
// @match *://translated.turbopages.org/*
// @name translated.turbopages.org
// ==/UserScript==
// 2024-08-13
// "Avoid the yellow highlighting of a hovered text on `translated.turbopages.org`":
// https://github.com/dmitrii-fediuk/vm/issues/22
// language=CSS
GM_addStyle('[data-type="trSpan"][data-selected="true"] {background-color: initial !important; color: initial !important;}');