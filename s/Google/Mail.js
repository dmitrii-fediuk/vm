// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Mail.js
// @icon https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico
// @match *://mail.google.com/*
// @name Google / Mail
// ==/UserScript==
// 2024-12-02 "Improve Gmail": https://github.com/dmitrii-fediuk/vm/issues/73
// language=CSS
GM_addStyle([
	'[aria-label="Main menu"] ~ div:has(a[title="Gmail"])' // 2024-12-02 Logo
	//,'*:has(> [aria-label^="Status:"]) > *:not([data-tooltip="Settings"])'
	//,'*:has(> [data-tooltip="Settings"]) > *:not([data-tooltip="Settings"])'
	,'[data-tooltip="Settings"] ~ *'
	,'[role="navigation"]:has([aria-label="Meet"])' // 2024-12-02 The left sidebar with a crapware like «Chat» and «Meet»
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;