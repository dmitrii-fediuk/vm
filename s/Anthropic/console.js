// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Anthropic/docs.js
// @icon https://mintlify.s3-us-west-1.amazonaws.com/anthropic/_generated/favicon/apple-touch-icon.png?v=3
// @match *://console.anthropic.com/*
// @name Anthropic / Console
// ==/UserScript==
// 2024-11-15 "Improve `console.anthropic.com`": https://github.com/dmitrii-fediuk/vm/issues/66
GM_addStyle([
	'.from-bg-100'
	,'.to-bg-000'
	,'.bg-gradient-to-b'
]
	 // language=Javascript
	.join(',')
	+ '{'
	+ [
		'--tw-gradient-from: none'
		,'--tw-gradient-to: none'
		,'background-image: none'
	]
		 // language=Javascript
		.join(' !important; ')
	+ '}'
);