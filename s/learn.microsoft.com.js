// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/learn.microsoft.com.js
// @icon https://learn.microsoft.com/en-us/media/open-graph-image.png
// @match *://learn.microsoft.com/*
// @name learn.microsoft.com
// ==/UserScript==
// 2024-08-18 "Improve articles appearance on `learn.microsoft.com`": https://github.com/dmitrii-fediuk/vm/issues/23
// language=CSS
GM_addStyle('.header-holder {display: none !important;}');