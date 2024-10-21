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