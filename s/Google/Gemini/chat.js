// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/chat.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/app/*
// @match *://gemini.google.com/u/*/app/*
// @name Google / Gemini / Chat
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
const p = () => {
	// 2025-03-28
	// language=CSS
	GM_addStyle([
		'.avatar-gutter'
		,'.boqOnegoogleliteOgbOneGoogleBar'
		,'.buttons-container-v2:before'
		,'.cdk-visually-hidden'
		,'.desktop-ogb-buffer'
		,'.query-content > :has(> button[aria-label="Edit"])'
		,'.response-container-header'
		,'.side-nav-menu-button > button[data-test-id="side-nav-menu-button"]'
		,'bard-mode-switcher' // 2025-08-05
		,'bard-sidenav'
		,'bard-sidenav *' // 2025-08-05
		,'hallucination-disclaimer'
		,'input-container:before'
		,'mat-sidenav'
		,'message-actions .buttons-container-v2 > :not(' +
			'.menu-button-wrapper' +
			',:has(> [data-test-id=share-and-export-menu-button])' + // 2025-04-20
		')'
		,'model-thoughts'
		,'top-bar-actions'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;

	// 2025-03-28
	// language=CSS
	GM_addStyle([
		'bard-sidenav-container' // 2025-08-05
		,'.chat-container'
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
		'.content-container' // 2025-08-05
		,'.main-content' // 2025-08-05
		,'.side-nav-menu-button'
		,'bard-sidenav-content'
	]
		 // language=Javascript
		.join(',') + '{position: initial !important;}')
	;
	// 2025-03-28
	// language=CSS
	GM_addStyle([
		'.code-block'
		,'.model-thoughts'
		,'.response-container-footer'
		,'.side-nav-menu-button'
		,'.user-query-container'
		,'bard-mode-switcher'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// 2025-03-28
	// language=CSS
	GM_addStyle([
		'.actions-container-v2'
		,'.code-block > .header-formatted'
		,'.query-content'
		,'.response-container'
		,'.user-query-bubble-with-background'
		,'.user-query-container'
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
		,'bard-sidenav-content' // 2025-08-05
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
	// 2025-04-20
	// language=CSS
	GM_addStyle([
		'#chat-history' // 2025-04-20
		,'bard-sidenav-content' // 2025-08-05
	]
		 // language=Javascript
		.join(',') + '{overflow-x: visible !important;}')
	;
	// 2025-04-20
	// language=CSS
	GM_addStyle([
		'infinite-scroller' // 2025-04-20
	]
		 // language=Javascript
		.join(',') + '{overflow: unset !important;}')
	;
	// 2025-03-28 https://chatgpt.com/c/67e63433-b778-8003-9129-50e335c342b0
	// language=CSS
	//GM_addStyle('infinite-scroller {overflow-y: auto !important;}');
	// 2025-03-28, 2025-08-05
	GM_addStyle([
		'.conversation-container'
		,'.user-query-bubble-with-background'
		,'input-container'
		,'user-query' // 2025-08-05
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			['max-width', 'width', 'min-width']
				// language=Javascript
				.map(k => `${k}: 100% !important;`).join(' ') +
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
		'.current-mode-title'
		,'.gds-title-s'
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
		'body'
	]
		 // language=Javascript
		.join(',') + '{font-size: 120% !important;}')
	;
	// 2025-03-29
	// language=CSS
	GM_addStyle([
		'.mat-mdc-button'
		,'.query-text'
	]
		 // language=Javascript
		.join(',') + '{font-size: 100% !important;}')
	;
	// 2025-03-29
	// language=CSS
	GM_addStyle([
		'.markdown'
		,'.ql-editor'
	]
		 // language=Javascript
		.join(',') + '{font-size: 110% !important;}')
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
				,'font-family': 'Consolas'
				// language=Javascript
				,'font-size': '1rem'
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2025-03-29 https://chatgpt.com/c/67e7837a-75b4-8003-af6a-1d8a350d139c
	// language=CSS
	GM_addStyle([
		'code', 'pre'
	]
		 // language=Javascript
		.join(',') + '{tab-size: 4 !important;}')
	;
	// 2025-03-28
	// language=CSS
	GM_addStyle([
		'.markdown :is(ol, p, ul)'
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
};
// 2025-06-15
const waitForAddition = s => {
	return new Promise(resolve => {
		if (document.querySelector(s)) {
			resolve();
		}
		else {
			const observer = new MutationObserver(mm => {
				mm.forEach(m => {
					m.addedNodes.forEach(n => {
						if (Node.ELEMENT_NODE === n.nodeType && n.matches(s)) {
							observer.disconnect();
							resolve();
						}
					});
				});
			});
			observer.observe(document.body, {childList: true, subtree: true});
		}
	});
};
// 2025-06-15
const waitForRemoval = s => {
	return new Promise(resolve => {
		if (!document.querySelector(s)) {
			resolve();
		}
		else {
			const observer = new MutationObserver(mm => {
				mm.forEach(m => {
					m.removedNodes.forEach(n => {
						if (n.matches && n.matches(s)) {
							observer.disconnect();
							resolve();
						}
					});
				});
			});
			observer.observe(document.body, {childList: true, subtree: true});
		}
	});
};
// 2025-06-15
const t = 'mat-progress-bar';
waitForAddition(t).then(() => {
	waitForRemoval(t).then(() => {
		setTimeout(() => {
			if (!document.querySelector('deep-research-immersive-panel')) {
				p();
			}
		}, 200);
	})
});