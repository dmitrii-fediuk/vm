// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Adobe/developer.js
// @icon https://experienceleague.adobe.com/favicon.ico
// @match *://developer.adobe.com/*
// @name Adobe / developer
// ==/UserScript==
// 2024-12-13 "Improve `developer.adobe.com`": https://github.com/dmitrii-fediuk/vm/issues/77
// language=CSS
GM_addStyle([
	'#adobeIcon > div:has(> svg)'
	,'.css-donbax'
	,'main > section[class^="spectrum--"]'
	,'nav > div > div:has([aria-label="Search"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;