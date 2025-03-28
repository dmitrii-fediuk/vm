// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/chat.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/u/1/app/*
// @name Google / Gemini / Chat / 2
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-03-29
if (true) {
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