// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Mail/Common.js
// @icon https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico
// @match *://mail.google.com/*
// @name Google / Mail / Common
// ==/UserScript==
// 2024-12-02 "Improve Gmail": https://github.com/dmitrii-fediuk/vm/issues/73
// language=CSS
GM_addStyle([
	'[aria-label="Add all to Drive"]'
	,'[aria-label^="Input tools"]'	// 2024-12-03 The screen keyboard button on the list of sent mails
	,'[aria-label="Main menu"] ~ div:has(a[title="Gmail"])' // 2024-12-02 Logo
	,'[aria-label="New Message"] [command="docs"]' // 2024-12-03 «Insert files using Drive»
	,'[aria-label="New Message"] [command="+emoticon"]' // 2024-12-03 «Insert emoji»
	,'[aria-label="New Message"] [command="image"]' // 2024-12-03 «Insert photo»
	,'[aria-label="New Message"] [command="+link"]' // 2024-12-03 «Insert link»
	,'[aria-label="New Message"] [command="locker"]' // 2024-12-03 «Toggle confidential mode»
	,'[aria-label="New Message"] [command="signature"]' // 2024-12-03 «Insert signature»
	,'[aria-label="New Message"] div:has(> div > div > [aria-label="Formatting options"])'
	,'[aria-label="New Message"] td:has(> [aria-label="Formatting options"])'
	,'[aria-label="search refinement"][role="toolbar"] + div :has(> [data-tooltip="More"])' // 2025-03-17
	,'[aria-label="search refinement"][role="toolbar"] + div :has(> [data-tooltip="Refresh"])' // 2025-03-17
	// 2025-03-17
	,'[aria-label="search refinement"][role="toolbar"] + div :has(> [data-tooltip="Report spam"]) + div'
	,'[aria-label="search refinement"][role="toolbar"] > *'
	// 2024-12-02 The screen keyboard button on the mail list screen
	,'[aria-label="Select input tool"]'
	,'[data-ogsr-up]' // Google Apps, Google Account
	,'[jscontroller]:has(> span > button[aria-label="Add reaction"])'
	,'[role="navigation"]:has([aria-label="Meet"])' // 2024-12-02 The left sidebar with a crapware like «Chat» and «Meet»
	,'.hp + .ho > span > *:not(:first-child)' // 2024-12-02 «Scanned by Gmail»
	,'div:has(> .l2[style])' // 2024-12-02 An empty space at the bottom
	,'div:has(> [aria-label="search refinement"][role="toolbar"])::before' // 2025-03-17
	,'div:has(> [aria-live="assertive"][role="alert"])'
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
// 2025-03-17
// language=CSS
GM_addStyle([
	'[aria-label="search refinement"][role="toolbar"]' // 2024-12-02
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-17
// language=CSS
GM_addStyle([
	'.hx .gs' // 2024-12-02
	,'div:has(> [aria-label="search refinement"][role="toolbar"])' // 2025-03-17
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// language=CSS
//GM_addStyle('div:has(> [aria-label="search refinement"][role="toolbar"]) {height: 2rem !important;}');
// language=CSS
GM_addStyle([
	'div:has(> [aria-label="search refinement"][role="toolbar"])'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'left': '4rem'
			// language=CSS
			,'position': 'fixed'
			,'top': 0
			,'z-index': 999
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2024-12-02
// 2025-03-17
// This is the toolbar with the «Report Spam» button above the inbox.
// It is only displayed when some inbox items are selected.
// language=CSS
GM_addStyle([
	'[aria-label="search refinement"][role="toolbar"] + div'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'display': 'initial'
			,'height': 'initial'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);