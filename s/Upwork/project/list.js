// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/default.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/search/jobs*
// @name Upwork / Project / List
// ==/UserScript==
// 2024-10-13, 2024-12-24 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// language=CSS
GM_addStyle([
	'.nav-parent-wrapper'
	,'[data-test$="JobsButtons"]'
	,'[data-test="Header"]'
	,'[data-test="JobActionSave"]'
	,'[data-test="JobsPage"] > [data-test="FiltersActive"]'
	,'[data-test="JobsPage"] > [data-test="FiltersList"]'
	// 2024-12-27
	// I hide it because my JavaScript below automatically clicks the «Just not interested» option from this menu
	// when the `JobActionFeedback` button is clicked, so there's no need for the menu to appear.
	,'[data-test="JobActionFeedback"] [data-test="UpCPopover"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'[data-test="JobsPage"]'
	,'[data-test="JobsPage"] > div:last-of-type'
]
	 // language=Javascript
	.join(',') + '{display: initial !important;}')
;
// language=CSS
GM_addStyle([
	'#main > .container'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle('[data-test="JobsList"] > article {padding: 0.5rem !important;}');
// 2024-12-25
// language=CSS
GM_addStyle([
	'article [data-test="JobInfo"]'
	,'article [data-test="JobInfoClient"]'
	,'article [data-test="JobInfoClientMore"]'
	,'article [data-test="JobTileHeader"]'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	'[data-test="LazyHydrate"]'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle('[data-test="proposals-tier"] {padding: 0.5rem 0 0 0 !important;}');
// 2024-12-25
// language=CSS
GM_addStyle('article [data-test$="JobDescription"] {margin: 0.5rem 0 !important;}');
// 2024-12-28
// language=CSS
GM_addStyle([
	'.job-tile-actions'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'display': 'block'
			// language=Javascript
			,'left': '50%'
			,'margin-top': '0.5rem'
			// language=CSS
			,'position': 'absolute'
			,'z-index': 1
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
(() => {
	const stopEvent = e => {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
	};
	const openArticle = b => {
		const article = b.closest('article[data-test="JobTile"]');
		if (article) {
			const l = article.querySelector('a[data-test="job-tile-title-link UpLink"]');
			if (l) {
				// 2025-01-04
				// «https://www.upwork.com/jobs/Assisted-Enhancements-for-Lightweight-App_~021875527601805661470/?referrer_url_path=%2Fnx%2Fsearch%2Fjobs» → «https://www.upwork.com/jobs/~021875527601805661470»
				const u = new URL(l.href);
				const m = u.pathname.match(/_~(\d+)(?=\/|$)/);
				window.open(`${u.origin}/jobs/~${m[1]}`, '_blank');
			}
		}
	};
	(() => {
		let x = 0, y = 0, article;
		const updateArticle = () => {
			article = document.elementFromPoint(x, y)?.closest('article[data-test="JobTile"]');
		};
		document.addEventListener('mousemove', e => {
			x = e.clientX; y = e.clientY;
			updateArticle();
		}, true);
		document.addEventListener('scroll', updateArticle, true);
		document.addEventListener('keydown', e => {
			if ('Enter' === e.key) {
				stopEvent(e);
				openArticle(article);
			}
		}, true);
	})();
	document.addEventListener('click', e => {
		const i = e.target;
		const menuItemClass = 'air3-menu-item';
		if (!i.classList.contains(menuItemClass) && e.target.closest('article')) {
			const downBtn = i.closest('button[data-ev-label="dropdown_secondary_toggle"]');
			if (!downBtn) {
				stopEvent(e);
				openArticle(e.target);
			}
			else {
				setTimeout(() => {
					const allItems = document.querySelectorAll('.' + menuItemClass);
					const i = [...allItems].find(i => 'Just not interested' === i.textContent.trim());
					i ? i.click() : null;
				}, 50);
			}
		}
	}, true);
})();