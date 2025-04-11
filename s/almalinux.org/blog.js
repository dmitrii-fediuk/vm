// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/archive.is/common.js
// @icon https://almalinux.org/fav/apple-touch-icon.png
// 2025-04-11 https://chatgpt.com/c/67f90c02-eb2c-8003-912b-607eae8ec098
// @match https://almalinux.org/blog/*
// @name almalinux.org / Blog
// ==/UserScript==
// 2025-04-11 "Improve `almalinux.org`": https://github.com/dmitrii-fediuk/vm/issues/103
// language=CSS
GM_addStyle([
	'#al-motd'
	,'#al-primary-navbar'
	,'#further-updates'
	,'#further-updates ~ *'
	,'.al-article-content > .mx-auto:first-child:has(> img:only-child)'
	,'.al-body-container ~ *'
	,'.al-body-container article ~ *'
	,'footer.al-primary-footer'
	,'img[alt="profile"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([

]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
	'.al-page-blog-post > .container'
	,'img[alt="profile"] + div'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
	'.al-article-content'
	,'.al-page-blog-post > .container'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
	'body'
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
	'*'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-11
// language=CSS
GM_addStyle([
	'.al-page-blog-post > .container'
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
// 2025-04-11
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-11
// language=CSS
GM_addStyle('h1 {font-size: 1.5rem !important;}');
// 2025-04-11
// language=CSS
GM_addStyle('h2 {font-size: 1.2rem !important; margin: 0.3rem 0 !important;}');
// 2025-04-11
// language=CSS
GM_addStyle('h3 {margin: 0.25rem 0 !important;}');
// 2025-04-11
// language=CSS
GM_addStyle('h4 {margin: 0.2rem 0 !important;}');
// 2025-04-11
// language=CSS
GM_addStyle('li, p, ul {margin: 0.25rem 0 !important;}');