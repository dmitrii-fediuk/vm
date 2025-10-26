// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/project/list.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/search/jobs*
// @name Upwork / Project / List
// ==/UserScript==
// 2024-10-13, 2024-12-24 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
const ᛡ = unsafeWindow.df.upwork.project.list; // 2025-10-26
// 2025-06-06
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		'.jobs-grid-container > :has([data-test="filter-active-item"])' // 2025-03-18 Filters at the header
		,'.nav-parent-wrapper'
		,':has(> .main-header)' // 2025-03-18 The header
		,':has(> button[data-ev-label="save"])' // 2025-03-18 «Save job»
		,'[data-test$="JobsButtons"]'
		,'[data-test$="JobsTopButtons"]' // 2025-09-08
		,'[data-test="Header"]'
		,'[data-test="JobActionSave"]'
		,'[data-test="JobInfo"] > :not([data-test="job-type-label"])' // 2025-03-18
		,'[data-test="JobInfoClient"] > :not([data-test="location"])' // 2025-03-18
		,'[data-test="JobInfoClientMore"]' // 2025-03-18
		,'[data-test="JobsPage"] > [data-test="FiltersActive"]'
		,'[data-test="JobsPage"] > [data-test="FiltersList"]'
		// 2024-12-27
		// I hide it because my JavaScript below automatically clicks the «Just not interested» option from this menu
		// when the `JobActionFeedback` button is clicked, so there's no need for the menu to appear.
		,'[data-test="JobActionFeedback"] [data-test="UpCPopover"]'
		,'[data-test="jobs-buttons-component"]' // 2025-03-18 «Save search», «Saved jobs»
		,'[data-test="location"] [data-test="UpCIcon"]' // 2025-03-18
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// language=CSS
GM_addStyle([
	// 2025-03-18
	// 1) https://chatgpt.com/c/67d96e8a-21f0-8003-989e-3b8092908b16
	// 2) https://chatgpt.com/c/67d96f52-f018-8003-9e88-db94cbe22861
	'.is-clamped'
	,'[data-test="JobsPage"] > div:last-of-type'
	,'[data-test="JobsPage"]'
]
	 // language=Javascript
	.join(',') + '{display: initial !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	'#main [data-test="job-pubilshed-date"]' // 2025-03-18
	,'#main article' // 2025-03-18
	,'article [data-test*="JobDescription"]'
	,'article [data-test="JobInfo"]'
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
	'#main > .container'
	,'[data-test="LazyHydrate"]'
	,'[data-test="proposals-tier"]'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'#main article' // 2025-03-18
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2024-12-25, 2025-03-18
// language=CSS
GM_addStyle('body {padding: 0.5rem !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('#main article {padding: 0.25rem 0 !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('[data-test="location"] {padding: 0 1rem 0 0 !important;}');
// 2024-12-25
// language=CSS
GM_addStyle('[data-test="proposals-tier"] {padding: 0.5rem 0 0 0 !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('[data-test="JobTileDetails"] {display: flex; flex-direction: row; flex-wrap: wrap;}');
// 2025-03-19
// language=CSS
GM_addStyle([
	'#main p.text-body-sm'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '110%'
			// language=CSS
			,'line-height': 1.2
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-19
// language=CSS
GM_addStyle('p.text-body-sm br {display: block !important; content: ""; height: 1px !important;}');
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
			,'left': '60%'
			,'margin-top': '0.5rem'
			// language=CSS
			,'opacity': 0.5 // 2025-03-18
			,'position': 'absolute'
			,'z-index': 1
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-18
(() => {
	const process = (() => {
		/**
		 * 2025-10-02 https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita#Table
		 * @return {boolean}
		 */
		const fCountries = (() => {
			const l = +new URL(location).searchParams.get('df-countries');
			// 2025-10-02 https://g.co/gemini/share/e0109654ff2a
			const countries = l ? ᛡ.countries.slice(0, l).flat() : [];
			// 2025-10-02 https://g.co/gemini/share/c73dc86cff0a
			return a => {
				const c = l && a.querySelector('li[data-test="location"] > div > span')
					?.textContent
					?.replace(/Location/, '')
					?.trim()
				;
				return !l || !countries.includes(c);
			};
		})();
		// 2025-10-02
		const qTerms = a => a.querySelector('li[data-test="job-type-label"] > strong');
		/**
		 * 2025-03-18
		 * @return {boolean}
		 */
		const fRate = (() => {
			// 2025-10-02 https://g.co/gemini/share/6984ff9b61f7
			const minRate = +new URL(location).searchParams.get('df-rate-min');
			return a => {
				const m = qTerms(a)?.textContent?.trim()?.match(/^Hourly:.*?\$(\d+)\.00/);
				return !minRate || !m || minRate <= +m[1];
			};
		})();
		/**
		 * 2025-10-02
		 * @return {boolean}
		 */
		const fRateNotSpecified = (() => {
			const enable = new URL(location).searchParams.has('df-rate-not-specified');
			const h = 'Hourly';
			// 2025-10-02 https://g.co/gemini/share/c9bf80c6789f
			return a => !enable || h === (qTerms(a)?.textContent.trim() ?? h);
		})();
		/**
		 * 2025-10-02 https://g.co/gemini/share/cf6a1129ba3d
		 * @return {boolean}
		 */
		const fTags = (() => {
			const enable = new URL(location).searchParams.has('df-tags');
			return a => !enable ||
				![...a.querySelectorAll('[data-test*="TokenClamp"] button[data-test="token"]')]
					.some(t => ᛡ.tags.includes(t.textContent.trim()))
			;
		})();
		/**
		 * 2025-03-18
		 * @return {boolean}
		 */
		const fPhrases = (() => {
			const enable = new URL(location).searchParams.has('df-phrases');
			const banned = ᛡ.phrases.map(s => ({m: s.includes(' '), s: s.toUpperCase()}));
			return a => !enable || !(['h2', 'p.text-body-sm'].some(s => {
				const e = a.querySelector(s);
				// 2025-03-18
				// `e` is `null` if the project is already hidden via the UI («Just not interested»).
				let r = !!e;
				if (r) {
					const t = e.textContent.toUpperCase();
					// 2025-03-23
					// 2025-10-26 https://gemini.google.com/share/15c71ac2197f
					const ta = t.match(/\w+|\p{Extended_Pictographic}/gu);
					//return banned.some(b => b.m ? t.includes(b.s) : ta.includes(b.s));
					r = banned.some(b => {
						// 2025-03-23
						// 2025-10-26
						// 1.1) If the banned phrase consists of multiple words,
						// we search for it in the project text without modification.
						// 1.2) Otherwise (if the banned phrase consists of a single word),
						// we split the project's text into an array of all words and emojies,
						// and then look for the banned word in this array.
						// 2.1)
						// 2.2) https://gemini.google.com/share/f44517aab02b
						const r = b.m ? t.includes(b.s) : ta.includes(b.s);
						if (r) {
							console.log(b.s);
						}
						return r;
					});
				}
				return r;
			}));
		})();
		// 2025-03-19
		const format = a => {
			const p = a.querySelector('p.text-body-sm');
			// 2025-03-18 `p` is `null` if the project is already hidden via the UI («Just not interested»).
			if (p) {
				// 2025-03-19
				// 1) https://stackoverflow.com/a/784547
				// 2.1) https://claude.ai/chat/5d359891-1f1d-400f-bc3b-e8b30fa92867
				// 2.2) https://chatgpt.com/c/67d9e839-2800-8003-9a50-5a9edd88c3a2
				p.innerHTML = p.textContent.replace(/(?:\r\n|\r|\n)/g, '<br/>');
			}
		};
		// 2025-03-18, 2025-10-02 https://g.co/gemini/share/60eb4bcb2b7f
		const filters = [fCountries, fRate, fRateNotSpecified, fPhrases, fTags];
		return c => c.querySelectorAll('article').forEach(a =>
			filters.every(f => f(a)) ? format(a) : a.style.display = 'none'
		);
	})();
	setTimeout(() => {process(document.querySelector('.card-list-container'));}, 50);
	// 2025-03-18 https://chatgpt.com/c/67d98719-3eec-8003-9df4-844aa046c43b
	(new MutationObserver(mm => {
		// 2025-03-18 https://grok.com/chat/293ac71e-03ab-475a-ab7e-0030d1035357
		mm.forEach(m => {
			let n;
			if (
				m.target.parentNode.classList.contains('jobs-grid-container')
				&& 1 === m.addedNodes.length
				&& (n = m.addedNodes[0]).classList.contains('card-list-container')
				&& n.children.length
				&& 'ARTICLE' === n.firstChild.tagName
			) {
				process(n);
			}
		});
	})).observe(document.querySelector('.jobs-grid-container'), {
		// 2025-03-18 https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe#attributes
		attributes: false
		// 2025-03-18 https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe#childlist
		,childList: true
		,subtree: true
	});
})();
(() => {
	const stopEvent = e => {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
	};
	// 2025-06-06
	const hideArticle = a => {
		const e = a.querySelector('button[data-ev-label="dropdown_secondary_toggle"] svg');
		if (e) {
			// 2025-06-06
			// 1) https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
			// 2) https://g.co/gemini/share/689b763bc005
			e.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
		}
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
			// 2025-06-06
			else if ('Escape' === e.key) {
				stopEvent(e);
				hideArticle(article);
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
					if (i) {
						i.click();
					}
					else {
						//debugger;
					}
				// 2025-06-06
				// Previously, I had `50` here.
				// Now I need `500` for `hideArticle()` to work.
				}, 500);
			}
		}
	}, true);
})();