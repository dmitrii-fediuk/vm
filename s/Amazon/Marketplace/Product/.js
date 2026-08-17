// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Amazon/Marketplace/Product/.js
// @icon https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://amazon.com&size=128
// 2026-08-09
// 1) https://share.gemini.google/tmihP6EMtJKP
// 2) https://share.gemini.google/5xxwkWUNgfC6
// @include /^https:\/\/(?:www\.)?amazon\.[^\/]+\/(?:[^?\x23]*\/)?dp\/.*$/
// @name Amazon / Marketplace / Product
// ==/UserScript==
// 2026-08-09 "Improve Improve Amazon Marketplace": https://github.com/dmitrii-fediuk/vm/issues/135
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
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
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'display': 'flex'
			,'flex-direction': 'row'
			,'flex-wrap': 'wrap'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: .25rem 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-direction: column-reverse !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-height', 'height', 'min-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{max-width: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	//`.overflow-y-scroll` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{overflow-y: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`*` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{scrollbar-width: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{z-index: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'height': 'auto'
			// language=Javascript
			,'width': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
			// language=Javascript
			,'font-size': '1.5rem'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2026-08-09
			,'font-weight': 'bold' // 2026-08-09
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '175%'
			// language=CSS
			,'line-height': 1.25
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['font-size', 'font-weight', 'line-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
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
	`#nav-main` // 2026-08-09
	,`#pqv-feedback` // 2026-08-09
	,`#pqv-ingress` // 2026-08-09
	,`#primeDPUpsellStaticContainerNPA` // 2026-08-09
	,`#rhf ~ *` // 2026-08-09
	,`#rhf` // 2026-08-09
	,`#shortcut-menu` // 2026-08-09
	,`:has(> iframe):not(body)` // 2026-08-09
	,`[data-feature-name='desktop-dp-ilm']` // 2026-08-09
	,`[data-feature-name='nile-inline']` // 2026-08-09
	,`[data-feature-name='nile-inline-btf']` // 2026-08-09
	,`[data-feature-name='sims-discoveryAndInspiration']` // 2026-08-09
	,`[data-feature-name='sims-productBundle']` // 2026-08-09
	,`[data-feature-name='sims-simsContainer']` // 2026-08-09
	,`[data-feature-name='sims-sponsoredProducts2']` // 2026-08-09
	,`[data-feature-name^='dp-ads-']` // 2026-08-09
]);