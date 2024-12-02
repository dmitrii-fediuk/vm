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
	// 2024-12-02 The screen keyboard button on the mail list screen
	//,'div:has(> [aria-label="Select input tool"])'
	,'[data-ogsr-up]' // Google Apps, Google Account
	,'[jscontroller]:has(> span > button[aria-label="Add reaction"])'
	,'[role="navigation"]:has([aria-label="Meet"])' // 2024-12-02 The left sidebar with a crapware like «Chat» and «Meet»
	,'.hp + .ho > span > *:not(:first-child)' // 2024-12-02 «Scanned by Gmail»
	,'div:has(> .l2[style])' // 2024-12-02 An empty space at the bottom
	,'div:has(> [jsaction] > [jsaction] > [aria-label="Side panel"])' // 2024-12-02 The right sidebar with a crapware
	,'div:has(> div > #itamenu)' // 2024-12-02 The screen keyboard button on the mail screen
	,'td [aria-label="Add reaction"]'
	,'td [aria-label="Not starred"]'
	// 2024-12-02 Gemini, Chat, Status, etc.
	,'header[role="banner"] :has(> [data-tooltip="Settings"]) > :not([data-tooltip="Settings"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle('.hx .gs {padding: 0 !important;}');