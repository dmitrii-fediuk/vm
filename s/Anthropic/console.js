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
	'header > div:has([aria-label="Anthropic logo"])'
	,'header button:has(> svg > path[d^="M228.54"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.bg-gradient-to-b'
	,'[class*="bg-bg-"]'
	,'[class*="from-bg-"]'
	,'[class*="text-oncolor-"]'
	,'[class*="to-bg-"]'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'--tw-gradient-from': 'none'
			,'--tw-gradient-to': 'none'
			,'background-color': 'white'
			,'background-image': 'none'
			,'color': 'black'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
GM_addStyle([
	'[class*="text-text-"]'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'color': 'black'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
GM_addStyle([
	'.transition-all'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'transition': 'none'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
GM_addStyle([
	'button'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'--tw-ring-color': 'none'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
GM_addStyle([
	'[class*="font-"]'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);