// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/share.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/share/*
// @name Google / Gemini / Share
// ==/UserScript==
// 2025-04-20 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-11-04
const dfResearchW = 'deep-research-confirmation-widget'; // 2025-11-04
// 2025-08-05
// language=CSS
GM_addStyle([
	'.gds-title-s' // 2025-08-05
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	`.avatar-gutter`
	,`.boqOnegoogleliteOgbOneGoogleBar`
	,`.desktop-ogb-buffer`
	,`.publish-time-text:before` // 2025-08-05
	,`.response-container-footer` // 2025-11-04
	,`.response-container-header` // 2025-11-04
	,`.share-viewer_chat-container ~ *`
	,`.title-container` // 2025-11-04
	,`:has(> .immersive-artifact-container) > message-content` // 2025-11-04
	,`[data-mat-icon-name='travel_explore']` // 2025-11-04
	,`button[mattooltip='Report']` // 2025-04-21
	,`share-turn-viewer:has(${dfResearchW}) response-container` // 2025-11-04
	,`share-viewer ~ *`
	,`share-viewer:has(${dfResearchW}) share-turn-viewer:not(:has(${dfResearchW})) user-query` // 2025-11-04
	,`top-bar-actions` // 2025-04-21
	,`user-notice` // 2025-11-04
	,dfResearchW // 2025-11-04
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;

// 2025-04-20
// language=CSS
GM_addStyle([
	`card-renderer` // 2025-11-04
	,`.carousel-content` // 2025-11-04
	,`.carousel-content > div` // 2025-11-04
	,`.publish-time > *` // 2025-08-05
	,`.query-content`
	,`.share-title-section > .title-link` // 2025-11-04
	,`.share-title-section` // 2025-11-04
	,`.source-card-container` // 2025-11-04
	,`.user-query-bubble-container`
	,`.user-query-bubble-with-background > .horizontal-container`
	,`sources-carousel > .container` // 2025-11-04
	,`sources-carousel` // 2025-11-04
	,`user-query-content`
]
	 // language=Javascript
	.join(`,`) + `{display: block !important;}`)
;

// 2025-04-20
// language=CSS
GM_addStyle([
	`.link-flag` // 2025-11-04
	,`.query-content`
	,`.top-container`
	,`h1`
]
	 // language=Javascript
	.join(`,`) + `{margin: 0 !important;}`)
;
// 2025-04-20
// language=CSS
GM_addStyle([
	`message-content` // 2025-11-04
	,`.query-content`
	,`.response-container`
	,`.user-query-bubble-container`
	,`.user-query-bubble-with-background`
	,`user-query`
]
	 // language=Javascript
	.join(`,`) + `{padding: 0 !important;}`)
;

// 2025-11-04
// language=CSS
GM_addStyle([
	`.immersive-artifact-container` // 2025-11-04
	,`.title-container` // 2025-11-04
]
	 // language=Javascript
	.join(`,`) + `{border: 0 !important;}`)
;

// 2025-04-20
// language=CSS
GM_addStyle([
	'.chat-history'
	,'.top-container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'min-width', 'width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-04-20
// language=CSS
GM_addStyle([
	'user-query'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'margin': '0.5rem 0'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);