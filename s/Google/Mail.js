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
	'div:has(> div[aria-label^="Chat,"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;