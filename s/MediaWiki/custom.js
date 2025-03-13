// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/MediaWiki/custom.js
// @icon https://www.mediawiki.org/static/apple-touch/mediawiki.png
// @match *://*/*
// @name MediaWiki / Custom
// ==/UserScript==
// 2025-03-13 "Improve MediaWiki-based websites": https://github.com/dmitrii-fediuk/vm/issues/96
if (
	!document.querySelector('meta[name="generator"]')?.content?.startsWith('MediaWiki')
	|| ['wikipedia.org', 'wikimedia.org'].some(v => location.hostname.endsWith(v))
) {
	return;
}
// language=CSS
GM_addStyle([
	'#footer-icons'
	,'#footer-info-copyright'
	,'#footer-places'
	,'#mw-head-base'
	,'#mw-navigation'
	,'#mw-page-base'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-13
// language=CSS
GM_addStyle([
	'#footer'
	,'.mw-body'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-13
// language=CSS
GM_addStyle([
	'#footer'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-13
// language=CSS
GM_addStyle([
	'.mw-body'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-03-13
// language=CSS
GM_addStyle('.mw-body {padding: 0 1rem !important;}');
// 2025-03-13
// language=CSS
GM_addStyle('#footer-info-lastmod {text-align: center !important;}');
// 2025-03-13
// language=CSS
GM_addStyle('h1 {margin: 0.5rem 0 !important;}');
// 2025-03-13
// language=CSS
GM_addStyle('h2 {margin: 0.3rem 0 !important;}');