// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Magento/community.js
// @icon https://magento.com/apple-touch-icon-180x180.png
// @match https://community.magento.com/*
// @name Magento / Community
// ==/UserScript==
// 2025-05-05 "Improve `community.magento.com`": https://github.com/dmitrii-fediuk/vm/issues/110
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'#actionMenuDropDown'
	,'#footer-wrap'
	,'#nav-main'
	,'#threadnavigator'
	,'.SearchForm'
	,'.final-crumb'
	,'.lia-menu-navigation-wrapper'
	,'.lia-message-subject'
	,'.lia-quilt-row-footer'
	,'.lia-quilt-row-main-header'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'.lia-quilt-row-header'
	,'.local-friendly-date'
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
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'.lia-breadcrumb'
	,'.lia-quilt-column'
	,'.lia-page'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'#list'
	,'.lia-page'
	,'.lia-page-header'
	,'.lia-quilt-column'
	,'.lia-quilt-row-header'
	,'.lia-quilt-row-main'
	,'.lia-quilt-row-sub-header'
	,'body'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'.lia-quilt-row-sub-header'
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'.lia-quilt-column'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'body'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'html'
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: 80% !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'.lia-quilt-row-header > div'
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2025-05-05
// language=CSS
GM_addStyle([
	'.lia-content'
	,'.lia-quilt-column-main-left'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-05-05
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
// 2025-05-05
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
// 2025-05-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2025-05-05
// language=CSS
//GM_addStyle('body {font-size: 1rem !important;}');
// 2025-05-05
// language=CSS
GM_addStyle([
	'body'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '185%'
			// language=CSS
			,'line-height': 1.1
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-05-05
// language=CSS
GM_addStyle([
	'.article-labels-title'
	,'.board-description'
	,'.lia-contest-media-description-display'
	,'.lia-list-slim'
	,'.lia-list-wide'
	,'.lia-media-snippet-container'
	,'.lia-message-body'
	,'.lia-message-body-content'
	,'.lia-message-editor *'
	,'.lia-message-editor'
	,'.lia-user-name-link'
	,'p'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['font-size', 'font-weight', 'line-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2025-05-05
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-05-05
// language=CSS
GM_addStyle('.lia-quilt-row-header {column-gap: 2rem;}');
// 2025-05-05
// language=CSS
GM_addStyle('.local-friendly-date {column-gap: .5rem;}');
// 2025-04-26
// language=CSS
GM_addStyle(['.local-friendly-date::before']
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'content': 'attr(title)'
			,'display': 'block'
			,'overflow': 'hidden'
			,'white-space': 'nowrap'
			,'width': '9.5ch'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);