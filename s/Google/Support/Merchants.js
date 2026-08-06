// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Support/Merchants.js
// @icon https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA
// @match *://support.google.com/merchants/*
// @name Google / Support / Merchants
// ==/UserScript==
// 2026-08-06 "Improve `support.google.com`": https://github.com/dmitrii-fediuk/vm/issues/87
// 2026-08-06
// language=CSS
GM_addStyle([
	`.scTailwindThreadMessageMessagelistheading` // 2026-08-06
	,`.scTailwindThreadThreadcontenttitle-back` // 2026-08-06
	,`:has(> .scTailwindThreadQuestionQuestioncarddisclaimer)` // 2026-08-06
	,`aside` // 2026-08-06
	,`sc-tailwind-thread-question-question-actions` // 2026-08-06
	,`sc-tailwind-thread-question-question-details` // 2026-08-06
	,`sc-tailwind-thread-question-state-chips` // 2026-08-06
	,`sc-tailwind-thread-thread-alert` // 2026-08-06
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-08-06
// language=CSS
GM_addStyle([
	`.scTailwindThreadQuestionQuestioncardtitle-container` // 2026-08-06
	,`sc-tailwind-thread-post-header` // 2026-08-06
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-08-06
// language=CSS
GM_addStyle([
	`.scTailwindThreadMessageMessagecardcontent` // 2026-08-06
	,`.scTailwindThreadQuestionQuestioncardcontent` // 2026-08-06
	,`.scTailwindThreadThreadcontentreplies-section` // 2026-08-06
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-08-06
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-08-06
// language=CSS
GM_addStyle([
	`*` // 2026-08-06
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-06-10
// language=CSS
GM_addStyle([
	`.scTailwindThreadThreadcontentwrapper` // 2026-08-06
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-08-06
// language=CSS
GM_addStyle(`:has(> br:only-child) {height: .25rem !important;}`);
// 2026-08-06
// language=CSS
GM_addStyle(`h1 {font-size: 1.5rem !important; line-height: 1.2 !important;}`);