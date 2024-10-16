// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/openvpn.net.js
// @icon https://kubernetes.io/icons/favicon-64.png
// @match *://kubernetes.io/docs/*
// @name kubernetes.io
// ==/UserScript==
// 2024-10-16 "Improve `kubernetes.io`": https://github.com/dmitrii-fediuk/vm/issues/54
// language=CSS
GM_addStyle([
	'header', '#sidebarnav', '.gutter', '.td-toc'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle('#maindoc {width: 100% !important;}');