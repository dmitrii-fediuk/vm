// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/turkiye.gov.tr/home.js
// @icon https://cdn.e-devlet.gov.tr/themes/izmir/images/favicons/favicon-196x196.1.8.0.png
// 2025-04-11 https://chatgpt.com/c/67f90733-5ca8-8003-aa11-1ed2a0e22ea1
// @match https://www.turkiye.gov.tr/
// @name turkiye.gov.tr / Home
// ==/UserScript==
// 2025-04-15 "Improve `turkiye.gov.tr`": https://github.com/dmitrii-fediuk/vm/issues/104
// language=CSS
GM_addStyle([
	'#homepageActionsBlock > #homepageActionsList > li > a > .menu-icon' // 2025-04-15
	,'#homepageBannersBlock' // 2025-04-15
	,'#homepageSearchBlock > em.first'  // 2025-04-15
	,'#homepageShortcutsBlock figure' // 2025-04-15
	,'#homepageShortcutsBlock li:has(> a[href="/e-devlette-engel-yok"])' // 2025-04-15
	,'#homepageSingleBannerBlock' // 2025-04-15
	,'#homepageSocialMediaBlock' // 2025-04-15
	,'#homepageStatisticsBlock' // 2025-04-15
	,'#homepageTopServicesList > li > a > img' // 2025-04-15
	,'#homepageTopServicesList > li > a > span' // 2025-04-15
	,'#homepage_mygov' // 2025-04-15
	,'#homepageinfoBlock' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageActionsBlock' // 2025-04-15
	,'#homepageHeroBlock' // 2025-04-15
	,'#homepageSearchBlock' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageActionsList' // 2025-04-15
	,'#homepageSearchBlock > em.first'  // 2025-04-15
	,'#homepageSearchBlock' // 2025-04-15
	,'#homepageShortcutsBlock > ul'  // 2025-04-15
	,'#homepageTopServicesBlock h2'  // 2025-04-15
	,'#homepageTopServicesList > li' // 2025-04-15
	,'#homepageTopServicesList' // 2025-04-15
	,'.homepageCardblockList > *' // 2025-04-15
	,'.homepageCardblockList' // 2025-04-15
	,'.homepageconceptList > *' // 2025-04-15
	,'.homepageconceptList' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageSearchBlock' // 2025-04-15
	,'#homepageSearchBlock > em.first'  // 2025-04-15
	,'#homepageServicesCard'  // 2025-04-15
	,'#homepageShortcutsBlock a > *' // 2025-04-15
	,'#homepageShortcutsBlock' // 2025-04-15
	,'#homepageTopServicesBlock'  // 2025-04-15
	,'#homepageTopServicesList > li > a > em' // 2025-04-15
	,'#homepageTopServicesList > li > a' // 2025-04-15
	,'.homepageCardblock' // 2025-04-15
	,'.homepageCardblockList .card-item' // 2025-04-15
	,'.homepageconceptList > .card-block' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageHeroBlock' // 2025-04-15
	,'#homepageTopServicesBlock'  // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	//'#searchForm' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{float: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageTopServicesList > li > a:before' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageActionsList' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{transform: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageTopServicesList > li > a > em' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{white-space: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageSearchBlock' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{z-index: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageActionsList' // 2025-04-15
	,'#homepageSearchBlock' // 2025-04-15
	,'#homepageShortcutsBlock > ul'  // 2025-04-15
	,'#homepageTopServicesList' // 2025-04-15
	,'.homepageCardblockList' // 2025-04-15
	,'.homepageconceptList' // 2025-04-15
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
// 2025-04-15
// language=CSS
GM_addStyle([
	'#homepageActionsBlock' // 2025-04-15
	,'#homepageHeroBlock' // 2025-04-15
	,'#homepageSearchBlock > em.first'  // 2025-04-15
	,'#homepageTopServicesList > li > a:before' // 2025-04-15
	,'#homepageTopServicesList > li' // 2025-04-15
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['height', 'max-height',' min-height']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;