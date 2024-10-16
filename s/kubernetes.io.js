// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/kubernetes.io.js
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
GM_addStyle([
	'#maindoc', 'main', '.td-main main'
]
	 // language=Javascript
	.join(',') + '{display: initial !important; max-width: 100% !important; padding: 0 !important; width: 100% !important;}')
;
// language=CSS
GM_addStyle('.td-content > * {max-width: 100% !important;}');