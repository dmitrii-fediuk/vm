// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/beymen.com.js
// @icon https://cdn.beymen.com/assets/images/favicon.ico
// @match *://www.beymen.com/*
// @name Beymen
// ==/UserScript==
// 2025-03-15 "Improve `beymen.com`": https://github.com/dmitrii-fediuk/vm/issues/97
// language=CSS
GM_addStyle([
	'#scrollToTop'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-15
// language=CSS
GM_addStyle([
	'[data-sticky-header]'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-15
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'max-width',' min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);
// 2025-02-22 https://chatgpt.com/c/67b8f0dc-df0c-800c-84ed-6b8a8d71d710
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['bottom', 'left',' right', 'top']
			// language=Javascript
			.map(k => `${k}: auto !important;`).join(' ') +
	'}'
);
// 2025-03-15
// 1) E.g.: «https://www.beymen.com/tr/p_jacadi-paris-kirik-beyaz-unisex-bebek-orta-boy-seyahat-cantasi_1654889»
// 2.1) https://chatgpt.com/c/67d4bd43-dc54-8003-847b-ca9df75fe2b3
// 2.2) https://claude.ai/chat/a1ec8c21-cc1b-43b4-a336-b6f62f9bff00
// 2.3) https://grok.com/chat/381ff6c1-7e42-4d95-a1fd-9b8c16bb7894
if ((new URL(location.href).pathname.split('/')[2])?.startsWith('p_')) {
	// language=CSS
	GM_addStyle([
		'.-detailWrapper > .m-productDesc'
		,'.m-accordion > :not(.-deliveryTime)'
		,'.m-productDescription__infoImage'
		,'.m-productDescription__infoItem:has(use[xlink\\:href="#icon-giftbox"])'
		,'.m-productInfo:has(.m-productInfo__show_more)'
		,'.m-productInfo:has(.-oneCard)'
		,'.o-headerTop'
		,'.o-productDetail ~ *'
		,':has(> .m-productDescription__titleWrapper)'
		,'footer'
		,'header'
		,'nav'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// 2025-03-15
	// language=CSS
	GM_addStyle([
		'.m-productDescription'
		,'.m-productDescription > .container'
		,'.o-productDetail__description'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// 2025-03-15
	// language=CSS
	GM_addStyle([
		'#breadcrumb > ol'
		,'.m-productDescription > .container'
		,'.m-productDescription__infoItem'
		,'.m-productDescription__infoWrapper'
		,'.o-productDetail'
	]
		 // language=Javascript
		.join(',') + '{padding: 0 !important;}')
	;
	// 2025-03-15
	// language=CSS
	GM_addStyle([
		'.o-productDetail__description'
	]
		 // language=Javascript
		.join(',') + '{line-height: 1.2 !important;}')
	;
	// 2025-03-15
	// language=CSS
	GM_addStyle([
		'.m-productDescription__infoList'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			['width', 'min-width']
				// language=Javascript
				.map(k => `${k}: initial !important;`).join(' ') +
			// language=CSS
			Object.entries({
				'flex': 'initial'
				// language=Javascript
				,'max-width': '100%'
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2025-03-15
	// language=CSS
	GM_addStyle('.m-productDescription__infoDesc br {' +
		'content: ""; display: block !important; height: 0.2rem !important;' +
	'}');
	// 2025-03-15
	// language=CSS
	GM_addStyle('.-detailWrapper > div {margin: 0.25rem 0 !important;}');
	// 2025-03-15
	// language=CSS
	GM_addStyle('.m-productDescription__infoList > div {padding: 0.25rem 0 !important;}');
	// 2025-03-15
	// language=CSS
	GM_addStyle([
		'.m-productDescription__infoWrapper *'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'font-family': 'Segoie UI'
				// language=Javascript
				,'font-size': '1.7rem'
				,'line-height': 1.2
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
}