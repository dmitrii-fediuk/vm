// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/new.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/app
// @match *://gemini.google.com/u/*/app
// @name Google / Gemini / New
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-06-15
const p = () => {
	// 2025-03-28
	// language=CSS
	GM_addStyle([
		'#chat-history'
		,'.parent-condensed-prompt-card-container' // 2025-08-02
		,'chat-window-content'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
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
		setTimeout(p, 200);
	})
});