// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/JetBrains/intellij-support.js
// @icon https://www.jetbrains.com/apple-touch-icon.png
// @match *://intellij-support.jetbrains.com/*
// @name JetBrains / intellij-support
// ==/UserScript==
// 2025-03-25 "Improve `jetbrains.com`": https://github.com/dmitrii-fediuk/vm/issues/84
// language=CSS
GM_addStyle([
	'.article-content ~ *'
	,'.comments ~ *'
	,'.page__footer'
	,'.page__header'
	,'.post-footer'
	,'.subscribe-wrapper'
	,'.vote button'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.comment__header'
	,'.margin-bottom-vertical-unit'
	,'.margin-bottom-vertical-unit-half'
	,'.post-header'
	,'.vote'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.g-container'
	,'.page__content'
	,'.section-content'
	,'.vote-sum'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.margin-bottom-vertical-unit-half'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.vote-sum'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
		// language=CSS
		Object.entries({
			// language=Javascript
			'max-width': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-25
// language=CSS
GM_addStyle('body {padding: 0 1rem !important;}');
// 2025-03-25
// language=CSS
GM_addStyle('.article-content p {margin: 0.25rem 0 !important;}');
// 2025-03-25
// language=CSS
GM_addStyle('.markdown {line-height: 1.4 !important;}');
// 2025-03-25
// language=CSS
GM_addStyle('.vote-sum {font-weight: bold !important;}');
// 2025-03-25
// language=CSS
GM_addStyle('.vote-sum > span {line-height: 1 !important;}');
// 2025-03-25
document.querySelectorAll('footer.comment__footer').forEach(f => {
	const s = f.querySelector('.vote-sum > span');
	if (!s || !parseInt(s.textContent)) {
		f.style.display = 'none';
	}
});
