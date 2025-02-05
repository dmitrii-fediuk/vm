// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/docs.python.org.js
// @icon https://docs.python.org/3/_static/py.svg
// @match *://docs.python.org/*
// @name docs.python.org
// ==/UserScript==
// 2025-02-05 "Improve `docs.python.org`": https://github.com/dmitrii-fediuk/vm/issues/88
// language=CSS
GM_addStyle([
	'.footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
	'.mobile-nav'
]
	 // language=Javascript
	.join(',') + '{position: absolute !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;