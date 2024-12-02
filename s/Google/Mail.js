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
	'[aria-label="Add all to Drive"]'
	,'[aria-label="Main menu"] ~ div:has(a[title="Gmail"])' // 2024-12-02 Logo
	,'[data-ogsr-up]' // Google Apps, Google Account
	,'[jscontroller]:has(> span > button[aria-label="Add reaction"])'
	,'[role="navigation"]:has([aria-label="Meet"])' // 2024-12-02 The left sidebar with a crapware like «Chat» and «Meet»
	// 2024-12-02 Gemini, Chat, Status, etc.
	,'header[role="banner"] :has(> [data-tooltip="Settings"]) > :not([data-tooltip="Settings"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;