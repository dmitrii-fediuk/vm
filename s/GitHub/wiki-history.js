// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/GitHub/wiki-history.js
// @icon https://github.com/fluidicon.png
// @match *://github.com/*/*/wiki/*/_history
// @name GitHub / Wiki / History
// ==/UserScript==
// 2024-09-20 "Improve the GitHub appearance": https://github.com/dmitrii-fediuk/vm/issues/47
// 2025-04-20
// language=CSS
GM_addStyle([
	'.mt-4'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle('.f6 {font-size: 0.8em !important; margin: 0 !important;}');