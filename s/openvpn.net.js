// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/openvpn.net.js
// @icon https://openvpn.net/wp-content/uploads/cropped-openvpn-192x192.png
// @match *://openvpn.net/*
// @name openvpn.net
// ==/UserScript==
// 2024-07-16 "Prevent the header from sticking on `openvpn.net`": https://github.com/dmitrii-fediuk/vm/issues/9
// language=CSS
GM_addStyle('header > nav {position: absolute !important;}');