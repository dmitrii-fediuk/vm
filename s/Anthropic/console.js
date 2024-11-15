// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Anthropic/docs.js
// @icon https://mintlify.s3-us-west-1.amazonaws.com/anthropic/_generated/favicon/apple-touch-icon.png?v=3
// @match *://console.anthropic.com/*
// @name Anthropic / Console
// ==/UserScript==
// 2024-11-15 "Improve `console.anthropic.com`": https://github.com/dmitrii-fediuk/vm/issues/66
// language=CSS
GM_addStyle([
	'.bg-bg-100'
	,'.bg-gradient-to-b'
	,'.from-bg-100'
	,'.to-bg-000'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'--tw-gradient-from': 'none'
			,'--tw-gradient-to': 'none'
			,'background-color': 'initial'
			,'background-image': 'none'
			,'color': 'black'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
GM_addStyle([
	'.text-text-300'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'color': 'black'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
