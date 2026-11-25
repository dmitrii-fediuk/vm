// ==UserScript==
// @author Dmitrii Fediuk (https://github.com/dmitrii-fediuk)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/endoflife.date.js
// @icon https://endoflife.date/assets/apple-touch-icon.png
// @match *://endoflife.date/*
// @name endoflife.date
// ==/UserScript==
// 2024-08-05 "Hide the left sidebar from `endoflife.date`": https://github.com/dmitrii-fediuk/adblock/issues/79
// language=CSS
GM_addStyle('.main {margin-left: initial !important; max-width: initial !important;}');