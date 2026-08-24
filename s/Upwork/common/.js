// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/common/.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/*
// @name Upwork / Common
// ==/UserScript==
// 2024-10-13 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// 2026-08-23
// language=CSS
GM_addStyle([
	`.text-base-sm:not(#a)` // 2026-08-23
	,`.text-base:not(#a)` // 2026-08-23
	,`.text-body-sm:not(#a)` // 2026-08-23
	,`.text-body:not(#a)` // 2026-08-23
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		[
			'font-family'
			,'font-size'
			,'font-weight'
			,'letter-spacing'
			,'line-height'
			,'text-transform'
		]
			// language=Javascript
			.map(k => `${k}: revert !important;`).join(' ') +
	'}'
);
// 2026-08-23
// language=CSS
GM_addStyle([
	//`*` // 2026-08-23
	`:is(h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6)` // 2026-08-23
// language=Javascript
].join(',') + `{${Object.entries({
	'line-height': 1.2 // 2026-08-26
	,'letter-spacing': 'revert' // 2026-08-23
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2025-06-10
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`#user-top-navigation-container .nav-container > [data-cy='header']`
		,`.air3-banner` // 2025-04-15
		,`.air3-search`
		,`.microapp-slot-innova`
		,`.nav-notifications .nav-dot`
		,`.nav-uma`
		,`.up-skip-nav`
		,`[data-cy='help-menu']`
		,`[data-test='SaveJob']`
		// 2025-03-04
		//  1) «Our records indicate that one or more of your payment methods on file
		//  is associated with Russia or Belarus».
		// 2) https://support.upwork.com/hc/en-us/requests/51272840
		,`div:has(> .up-smf [role='alert'] a[href='https://www.upwork.com/nx/payments/deposit-methods'])`
		,`footer.up-footer`
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// 2026-08-23
// language=CSS
GM_addStyle([
	`.layout:has(> .ng-sidebar-layout-wrapper)` // 2026-08-23
	,`.main-content-container` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-08-23
// language=CSS
GM_addStyle([
	`.main-content-container` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// language=CSS
GM_addStyle([
	'[role="alert"]'
	,'main > .container'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-08-23
// language=CSS
GM_addStyle([
	`.main-content` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-08-23
// language=CSS
GM_addStyle([
	//`*` // 2026-08-23
	`.main-content-container` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{border-radius: unset !important;}')
;
// 2026-08-26
// language=CSS
GM_addStyle([
	`[class*=line-height]` // 2026-08-26
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-08-23
// language=CSS
GM_addStyle([
	`.main-content-container` // 2026-08-23
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-height', 'height', 'min-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-08-23
// language=CSS
GM_addStyle([
	`.main-content-container` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{transition: unset !important;}')
;
// 2026-08-23
// language=CSS
GM_addStyle([
	`.main-content-container` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{transform: unset !important;}')
;
// 2026-08-23
// language=CSS
GM_addStyle([
	`.main-content-container` // 2026-08-23
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2024-12-25
// language=CSS
GM_addStyle([
	'header .nav-container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'align-items': 'center'
			,'display': 'flex'
			,'flex-wrap': 'wrap'
			// language=Javascript
			,'height': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2024-12-25
// language=CSS
GM_addStyle('#user-top-navigation-container header > [class^="nav-v"] {height: auto !important;}');
// 2024-12-25
// language=CSS
GM_addStyle('#user-top-navigation-container .nav-item-label {padding-bottom: 0 !important; padding-top: 0 !important;}');