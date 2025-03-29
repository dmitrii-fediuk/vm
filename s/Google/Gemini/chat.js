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
	,'.cdk-visually-hidden'
	,'.desktop-ogb-buffer'
	,'.query-content > :has(> button[aria-label="Edit"])'
	,'.response-container-header'
	,'.side-nav-menu-button > button[data-test-id="side-nav-menu-button"]'
	,'bard-sidenav'
	,'hallucination-disclaimer'
	,'input-container:before'
	,'mat-sidenav'
	,'top-bar-actions'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.chat-container'
	,'.horizontal-container'
	,'.query-content'
	,'.side-nav-menu-button'
	,'message-actions > mat-menu'
	,'user-query-content'
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
	'.code-block'
	,'.model-thoughts'
	,'.side-nav-menu-button'
	,'.user-query-container'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.code-block > .header-formatted'
	,'.query-content'
	,'.response-container'
	,'.user-query-bubble-with-background'
	,'[data-test-id="thoughts-header-button"]'
	,'bard-mode-switcher .current-mode-title'
	,'code'
	,'infinite-scroller'
	,'user-query'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.code-block'
	,'.code-block > *'
	,'.user-query-bubble-with-background'
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
	'#chat-history'
	,'body'
	,'chat-app'
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
// 2025-03-29
// language=CSS
//GM_addStyle('.side-nav-menu-button {margin: 0 0 0.5rem 0 !important;}');
// 2025-03-28 https://chatgpt.com/c/67e63433-b778-8003-9129-50e335c342b0
// language=CSS
GM_addStyle('infinite-scroller {overflow-y: auto !important;}');
// 2025-03-28
// language=CSS
GM_addStyle([
	'.bard-mode-menu-button'
	,'code:not(.code-container)'
]
	 // language=Javascript
	.join(',') + '{font-weight: bold !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.gds-title-s'
	,'.markdown'
	,'.mat-mdc-button'
	,'.query-text'
	,'body'
	,'code'
	,'code-block'
	,'pre'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'color': 'black'
			,'font-family': 'Segoie UI'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-29
// language=CSS
GM_addStyle([
	'.markdown'
]
	 // language=Javascript
	.join(',') + '{font-size: 120% !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'code'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'color': '#067D17'
			,'font-size': 'revert'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-28
// language=CSS
GM_addStyle([
	'.markdown ol'
	,'.markdown p'
	,'.markdown ul'
	,'p.query-text-line:not(:has(> br))'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.markdown li'
]
	 // language=Javascript
	.join(',') + '{margin: 0.15rem 0 !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'code:not(.code-container)'
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.code-block > *'
	,'code.code-container'
	,'code-block'
	//,'pre'
]
	 // language=Javascript
	.join(',') + '{background-color: rgb(249, 249, 249) !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle('.user-query-bubble-with-background {background-color: rgba(232, 232, 232, 0.5) !important;}');
// 2025-03-28
// language=CSS
GM_addStyle('.query-text {line-height: 1.2 !important;}');
// 2025-03-28
// language=CSS
GM_addStyle('.markdown {line-height: 1.4 !important;}');
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
if (false) {
	// 2025-03-29 https://chatgpt.com/c/67e73161-4c50-8003-baea-be7c9e86ec41
	(() => {
		const p = () => {
			const b = document.querySelector('.actions-container-v2');
			if (b) {
				const observer = new MutationObserver(mm => {
					mm.forEach(m => {
						if ('childList' === m.type) {
							m.removedNodes.forEach(rn => {
								if (1 === rn.nodeType && rn.classList && rn.classList.contains('buttons-container-v2')) {
									b.appendChild(rn);
								}
							});
						}
					});
				});
				observer.observe(b, {childList: true});
			}
			return !!b;
		};
		const i = setInterval(() => p() ? clearInterval(i) : null, 50);
	})();
}
if (false) {
	// 2025-03-29 https://claude.ai/chat/6168aef3-ffb8-47d3-b1af-cd5d71e53dba
	(() => {
		const p = () => {
			const b = document.querySelector('.actions-container-v2');
			if (b) {
				let v = null;
				const s = () => {
					const c = b.querySelector('.buttons-container-v2');
					if (c && !v) {
						v = c.cloneNode(true);
					}
					return !!c;
				};
				const r = () => {
					if (v && !b.querySelector('.buttons-container-v2')) {
						const e = b.querySelector('.spacer');
						if (e) {
							e.remove();
						}
						b.appendChild(v.cloneNode(true));
						b.classList.remove('mobile');
					}
				};
				s();
				const observer = new MutationObserver(mm => {
					mm.forEach(m => {
						if ('childList' === m.type || ('attributes' === m.type && 'class' === m.attributeName)) {
							s();
							r();
						}
					});
				});
				observer.observe(b, {
					childList: true,
					attributes: true,
					attributeFilter: ['class'],
					subtree: true
				});
			}
			return !!b;
		};
		const i = setInterval(() => p() ? clearInterval(i) : null, 50);
	})();
}
// https://gemini.google.com/u/1/app/abbf3acbb874b5ff
if (false) {
	(() => {
		const p = () => {
			const b = document.querySelector('.actions-container-v2');
			let result = false;
			if (b) {
				const initialM = b.querySelector('.buttons-container-v2');
				if (initialM) {
					const observer = new MutationObserver(mm => {
						mm.forEach(m => {
							if ('childList' === m.type) {
								const currentM = b.querySelector('.buttons-container-v2');
								if (!currentM) {
									b.appendChild(initialM);
								}
								const spacer = b.querySelector('.spacer');
								if (spacer) {
									b.removeChild(spacer);
								}
							}
						});
					});
					observer.observe(b, { childList: true });
					result = true;
				}
			}
			return result;
		};
		const i = setInterval(() => p() ? clearInterval(i) : null, 50);
	})();
}