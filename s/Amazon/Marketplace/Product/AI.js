// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Amazon/Marketplace/Product/AI.js
// @icon https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://amazon.com&size=128
// 2026-08-09
// 1) https://share.gemini.google/tmihP6EMtJKP
// 2) https://share.gemini.google/5xxwkWUNgfC6
// @include /^https:\/\/(?:www\.)?amazon\.[^\/]+\/(?:[^?\x23]*\/)?dp\/.*$/
// @name Amazon / Marketplace / Product / AI
// ==/UserScript==
// 2026-08-09 "Improve Improve Amazon Marketplace": https://github.com/dmitrii-fediuk/vm/issues/135
// 2025-09-05
// 1) https://g.co/gemini/share/9776258b5353
// 2) https://g.co/gemini/share/fdb2b22cbe50
const modify = (s, action) => {
	s = !Array.isArray(s) ? s : s.join(','); // 2026-08-09 https://share.gemini.google/tOXOcu2TdlcM
	const p = i => {
		i.matches?.(s) && action(i);
		i.querySelectorAll?.(s).forEach(action);
	};
	(new MutationObserver(mm => {
		mm.forEach(m => m.addedNodes.forEach(p));
	})).observe(document.documentElement, {childList: true, subtree: true});
	p(document.documentElement);
};
// 2026-08-09
const remove = s => modify(s, i => i.remove());
// language=CSS
remove([
	`:is(header, link, script, style)` // 2026-08-09
]);