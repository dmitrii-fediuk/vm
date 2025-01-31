// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/registry.terraform.io.js
// @icon https://registry.terraform.io/images/favicons/apple-touch-icon.png
// @match *://registry.terraform.io/*
// @name Terraform / Registry
// ==/UserScript==
// 2024-10-21 "Improve `registry.terraform.io`": https://github.com/dmitrii-fediuk/vm/issues/58
// language=CSS
GM_addStyle([
	'.column-provider-docs-menu'
	,'article ~ .column'
	,'footer'
	,'header'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.columns-provider-docs'
	,'article'
	,'h1', 'h2', 'h3'
]
	 // language=Javascript
	.join(',') + '{display: block !important; margin: 0 !important; padding: 0 !important; width: initial !important;}')
;
// language=CSS
GM_addStyle('.section {margin: 0 0.5rem !important; padding: 0 !important;}');
// language=CSS
GM_addStyle('p {margin: 0 0 0.5rem 0 !important; padding: 0 !important;}');
// language=CSS
GM_addStyle('.button.is-primary {background: lightgray !important;}');

