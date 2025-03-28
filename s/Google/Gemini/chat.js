// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/chat.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/u/1/app/*
// @name Google / Gemini / Chat
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-03-28
// language=CSS
GM_addStyle([
	'.boqOnegoogleliteOgbOneGoogleBar'
	,'.query-content > :has(> button[aria-label="Edit"])'
	,'.response-container-header'
	,'.side-nav-menu-button > button[data-test-id="side-nav-menu-button"]'
	,'hallucination-disclaimer'
	,'top-bar-actions'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.side-nav-menu-button'
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.side-nav-menu-button'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.model-thoughts'
	,'.side-nav-menu-button'
	,'.user-query-container'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.query-content'
	,'.response-container'
	,'.user-query-bubble-with-background'
	,'[data-test-id="thoughts-header-button"]'
	,'bard-mode-switcher .current-mode-title'
	,'infinite-scroller'
	,'user-query'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.user-query-bubble-with-background'
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-03-28
// 1) https://chatgpt.com/c/67e4b4cc-4a38-8003-9d53-d5eac3ac47b8
// 2) Similar to:
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-27/s/Claude.js#L96-L102
// language=CSS
GM_addStyle([
	'body'
	,'html'
	,'main'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'display': 'block'
			,'height': 'auto'
			,'overflow-y': 'visible'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-28
// language=CSS
GM_addStyle([
	'.conversation-container'
	,'.user-query-bubble-with-background'
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
// 2025-03-28
// language=CSS
GM_addStyle([
	'.bard-mode-menu-button'
	,'.side-nav-menu-button'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['height', 'max-height',' min-height']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);
// 2025-03-28
// language=CSS
GM_addStyle('body {padding: 0 0 0 1rem !important; width: auto !important;}');
// 2025-03-28 https://chatgpt.com/c/67e63433-b778-8003-9129-50e335c342b0
// language=CSS
GM_addStyle('infinite-scroller {overflow-y: auto !important;}');
// 2025-03-28
// language=CSS
GM_addStyle([
	'.markdown p'
	,'p.query-text-line:not(:has(> br))'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle('.user-query-bubble-with-background {background-color: rgba(232, 232, 232, 0.5) !important;}');
// 2025-03-28
// language=CSS
GM_addStyle('.query-text {line-height: 1.2 !important;}');
// 2025-03-28
// language=CSS
GM_addStyle('p.query-text-line br {display: block !important; content: ""; height: 1px !important;}');
// 2025-03-28
// language=CSS
GM_addStyle([
	'.query-text.collapsed'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'-webkit-line-clamp': 'none'
			,'display': 'block'
			,'line-clamp': 'none'
			,'overflow': 'initial'
			,'text-overflow': 'initial'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-28 https://chatgpt.com/c/67e62607-5b70-8003-9805-1775f9b2b1db
(() => {
	const p = () => {
		const c = document.querySelector('.conversation-container');
		if (c) {
			const observer = new MutationObserver(mm => {
				mm.forEach(m => {
					if ('attributes' === m.type && 'style' === m.attributeName) {
						c.style.removeProperty('min-height');
					}
				});
			});
			observer.observe(c, {attributes: true, attributeFilter: ['style']});
		}
		return !!c;
	};
	// 2025-03-28 https://chatgpt.com/c/67e62a28-c3b8-8003-bda7-3589b21ff431
	const i = setInterval(() => p() ? clearInterval(i) : null, 50);
})();