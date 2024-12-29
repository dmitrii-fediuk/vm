// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Grammarly.js
// @icon https://denali-static.grammarly.com/files/f1d4cabc38892f860a29/apple-touch-icon-v2.png
// @match *://*.grammarly.com/*
// @name Grammarly
// ==/UserScript==
// 2024-12-30 "Improve Grammarly": https://github.com/dmitrii-fediuk/vm/issues/81
// language=CSS
GM_addStyle([
	'.gds-popover'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2024-12-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2024-12-30
if (location.hostname.startsWith(('account.'))) {
	// 2024-12-30
	// language=CSS
	GM_addStyle([
		'header[aria-label="Account Hub"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// 2024-12-30
	// language=CSS
	GM_addStyle('div:has([class*="slideoutOverlay"]) {z-index: 5 !important;}');
	// 2024-12-30
	// language=CSS
	GM_addStyle('main[class*="visibleSlideout"] {padding-left: 10.5rem !important;}');
	// 2024-12-30
	if (location.pathname.startsWith('/customize/')) {
		// 2024-12-30
		// language=CSS
		GM_addStyle([
			'main > [class*="description"]'
			,'main > [class*="spacer"]'
			,'main > h1'
		]
			 // language=Javascript
			.join(',') + '{display: none !important;}')
		;
	}
}
// 2024-12-30
else if (location.hostname.startsWith(('app.'))) {
	// 2024-12-30
	// language=CSS
	GM_addStyle([
		'[class^="toolbar-headerWrapperSqueezed_"]'
		,'[data-testid="assistant"] footer'
		,'aside nav[id$="-additionalActions"]'
		,'aside[class*="footerWrapper"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// 2024-12-30
	// language=CSS
	GM_addStyle([
		'[class^="document-settings-toolbarExpanded_"]'
		,'aside[class$="-document_settings-leftSidebar"]'
	]
		 // language=Javascript
		.join(',') + '{position: initial !important;}')
	;
	// 2024-12-30
	// language=CSS
	GM_addStyle([
		'[class$="-editorContent"]'
		,'[class$="-editorContentWrap"]'
	]
		 // language=Javascript
		.join(',') + '{padding: 0 !important;}')
	;
	// 2024-12-30
	// language=CSS
	GM_addStyle([
		'[class$="-editorContentWrap"]'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// 2024-12-30
	// language=CSS
	GM_addStyle('[class*="toolbarTitleContainer"] {max-width: 2rem !important;}');
	// 2024-12-30
	// language=CSS
	GM_addStyle('[class*="-editorContainer"] {padding-bottom: 0.5rem !important;}');
	// 2024-12-30
	// language=CSS
	GM_addStyle('[class$="-editorContent"] {max-width: initial !important;}');
}