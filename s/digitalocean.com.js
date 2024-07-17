// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/digitalocean.com.js
// @icon https://www.digitalocean.com/_next/static/media/apple-touch-icon.d7edaa01.png
// @match *://digitalocean.com/*
// @name digitalocean.com
// ==/UserScript==
// 2024-07-17 "Prevent the header from sticking on `digitalocean.com`": https://github.com/dmitrii-fediuk/vm/issues/10
// language=CSS
GM_addStyle('[class^="HeaderStyles__StyledHeader"] {position: absolute !important;}');