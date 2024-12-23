// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Adobe/experienceleague.js
// @icon https://experienceleague.adobe.com/favicon.ico
// @match *://developer.adobe.com/*
// @match *://experienceleague.adobe.com/*
// @name Adobe / experienceleague
// ==/UserScript==
// 2024-12-13 "Improve `experienceleague.adobe.com`": https://github.com/dmitrii-fediuk/vm/issues/76
// language=CSS
GM_addStyle([
	'.article-metadata-createdby-wrapper'
	,'.article-metadata-topics-wrapper'
	,'.doc-actions-mobile'
	,'.doc-pagination'
	,'.docs > header'
	,'.docs main > .rail.rail-left'
	,'.docs main > .rail.rail-right'
	,'.feedback-ui'
	,'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle('main {display: block !important; margin: 0 !important; padding: 0 1rem !important;}');
// language=CSS
GM_addStyle('main .section {padding: 0 !important;}');
// 2024-12-13
// 1) "How do I hide a DOM element inside a shadow root using Violentmonkey?" https://df.tips/t/2326
// 2) https://chatgpt.com/c/675bf7f8-a3d0-800c-be9b-8175c41b1c2b
const h = 'exl-header';
customElements.whenDefined(h).then(() => {
	const applyStyle = () => {
		const c = document.querySelector(h)?.shadowRoot;
		// language=CSS
		c?.appendChild(Object.assign(document.createElement('style'), {textContent: [
				'.adobe-logo'
				,'.brand'
				,'.language-selector'
				,'.nav'
				,'.product-toggle'
				,'.search'
			]
				// language=Javascript
				.join(',') + `{display: none !important;}`
		}));
		return !!c;
	};
	if(!applyStyle()) {
		const o = new MutationObserver(() => applyStyle() && o.disconnect());
		o.observe(document.documentElement, {childList:true, subtree:true});
	}
});