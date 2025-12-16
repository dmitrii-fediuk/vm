// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/issues.chromium.org.js
// @icon https://www.gstatic.com/chrome-tracker/img/chromium.svg
// @match https://issues.chromium.org/issues/*
// @name Google / Chromium / Issues
// ==/UserScript==
// 2025-12-16 "Improve `issues.chromium.org`": https://github.com/dmitrii-fediuk/vm/issues/122
// 2025-12-16
// language=CSS
GM_addStyle([
	//'body', 'html' // 2025-12-16
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
	'.cdk-live-announcer-element' // 2025-12-16
	,'.cdk-overlay-container' // 2025-12-16
	,':has(> b-pagination-one-issue)' // 2025-12-16
	,':has(> issue-chip-indicators)' // 2025-12-16
	,'[popover]' // 2025-12-16
	,'b-footer' // 2025-12-16
	,'b-hiring-banner' // 2025-12-16
	,'b-team-chip' // 2025-12-16
	,'b-terms-of-service' // 2025-12-16
	,'b-tracker-banner' // 2025-12-16
	,'header.main-header' // 2025-12-16
	,'issue-details-wrapper > h2' // 2025-12-16
	,'issue-header aside.pos-fill' // 2025-12-16
	,'issue-title ~ *' // 2025-12-16
	,'llm-chat-open-button' // 2025-12-16
	,'mat-icon' // 2025-12-16
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
	'.bv2-note-container-note' // 2025-12-16
	,':has(> article)' // 2025-12-16
	,'issue-header > div > div' // 2025-12-16
	,'mat-sidenav-content > div' // 2025-12-16
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'display': 'flex'
			,'flex-direction': 'row'
			,'flex-wrap': 'wrap'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
	'.bv2-note-container' // 2025-12-16
	,':has(> b-post-comment)' // 2025-12-16
	,'b-issue-description' // 2025-12-16
	,'issue-description-area' // 2025-12-16
	,'issue-header > div > div' // 2025-12-16
	,'status-update > div' // 2025-12-16
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
	'p'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
	'#bv2-edit-issue-details-scroll' // 2025-12-16
	,':has(> b-post-comment)' // 2025-12-16
	,'b-issue-description' // 2025-12-16
	,'issue-description-area' // 2025-12-16
	,'issue-header > div' // 2025-12-16
	,'nav' // 2025-12-16
	,'status-update > div' // 2025-12-16
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
	'.bv2-content' // 2025-12-16
	,':has(> b-post-comment)' // 2025-12-16
	,'b-issue-description' // 2025-12-16
	,'issue-header > div' // 2025-12-16
	,'nav' // 2025-12-16
	,'status-update > div' // 2025-12-16
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
	'*' // 2025-12-16
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;

// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
	//'.bv2-note-container-note' // 2025-12-16
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-12-16
// language=CSS
GM_addStyle([
	'body' // 2025-12-16
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2025-12-16
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'height': 'auto'
			// language=Javascript
			,'width': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-16
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
			// language=Javascript
			,'font-size': '1.5rem'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-16
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2025-12-16
			,'font-weight': 'bold' // 2025-12-16
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '175%'
			// language=CSS
			,'line-height': 1.25
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-16
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-12-16
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['font-size', 'font-weight', 'line-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2025-12-16
// language=CSS
GM_addStyle('body {margin: .5rem !important;}');
// 2025-12-16
// language=CSS
//GM_addStyle('h1:not(#A) {font-size: 2rem !important; margin: .5rem 0 !important;}');
// 2025-12-16
// language=CSS
//GM_addStyle(':is(h2, h3, h4) {margin: .5rem 0 !important;}');
