// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Mail/Search.js
// @icon https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico
// @match *://mail.google.com/*
// @name Google / Mail / Search
// ==/UserScript==
// 2025-03-24
// 1) "Improve Gmail": https://github.com/dmitrii-fediuk/vm/issues/73
// 2 https://grok.com/chat/7160441d-79e9-4dee-8a3f-266fdc81dcae
// 3) https://violentmonkey.github.io/api/matching/#matching-spa-sites-like-fb-github-twitter-youtube
const p = () => {
	if (location.hash.startsWith('#search/')) {
		console.log('Search');
	}
};
onUrlChange();
if (self.navigation) {
	navigation.addEventListener('navigatesuccess', p);
}
else {
	let h = location.h;
	new MutationObserver(() => h !== (h = location.hash) && p()).observe(
		document, {subtree: true, childList: true}
	);
}
// language=CSS
GM_addStyle([

]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
