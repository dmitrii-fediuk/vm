// 2024-05-30 "Hide sidebars on Stack Exchange": https://github.com/dmitrii-fediuk/adblock/issues/31
// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Stack_Exchange.js
// @icon https://cdn.sstatic.net/Sites/stackexchange/Img/apple-touch-icon.png
// @match *://*.stackexchange.com/*
// @match *://askubuntu.com/*
// @match *://serverfault.com/*
// @match *://stackexchange.com/*
// @match *://stackoverflow.com/*
// @match *://superuser.com/*
// @name Stack Exchange
// ==/UserScript==
// language=CSS
GM_addStyle('#mainbar {width: 100% !important;}');
// 2024-07-16
// Prevent the header on StackExchange websites from sticking at the top on scrolling the page":
// https://github.com/dmitrii-fediuk/vm/issues/8
// language=CSS
GM_addStyle('header.ps-fixed {position: absolute !important;}');