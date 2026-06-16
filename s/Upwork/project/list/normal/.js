// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/project/list/normal/.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/search/jobs*
// @name Upwork / Project / List / Normal
// ==/UserScript==
// 2024-10-13, 2024-12-24 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
const ᛡ = unsafeWindow.df.upwork.project.list; // 2025-10-26
const dfNL = `df-nl`; // 2026-06-13
// language=CSS
const df_C_JobTileActions = `.job-tile-actions`; // 2026-06-17
// language=CSS
const df_DT_Badges = `[data-test*='JobTileBadges']`; // 2026-06-15
// language=CSS
const df_DT_Date = `[data-test='job-pubilshed-date']`; // 2026-06-13
// language=CSS
const df_DT_Featured = `[data-test*='JobBadgePremium']`; // 2026-06-15
// language=CSS
const df_DT_JobInfo = `[data-test='JobInfo']`; // 2026-06-15
// language=CSS
const dfProject = `article[data-test='JobTile']`; // 2026-06-13
// language=CSS
const dfText = `p.text-body-sm`; // 2026-06-16
// 2025-06-06
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`${df_C_JobTileActions}:has(button[data-test='job-toggle-collapsed'])` // 2026-06-13
		,`${df_DT_Badges}:has(${df_DT_Featured}:only-child)` // 2026-06-15
		,`${df_DT_JobInfo} > [data-test='duration-label']` // 2026-06-15
		,`${df_DT_JobInfo} > [data-test='experience-level']` // 2026-06-15
		,`${df_DT_JobInfo} > [data-test='is-fixed-price'] > .mr-1` // 2026-06-15
		,`${df_DT_JobInfo} > [data-test='is-fixed-price']::before` // 2026-06-15
		,`.jobs-grid-container > :has([data-test='filter-active-item'])` // 2025-03-18 Filters at the header
		,`.nav-parent-wrapper`
		,`:has(> .main-header)` // 2025-03-18 The header
		,`:has(> button[data-ev-label='save'])` // 2025-03-18 «Save job»
		,`[data-test$='JobsButtons']`
		,`[data-test$='JobsTopButtons']` // 2025-09-08
		,`[data-test*='TokenClamp']` // 2026-06-13
		,`[data-test='Header']`
		,`[data-test='JobActionSave']`
		,`[data-test='JobInfoClient'] > :not([data-test='location'])` // 2025-03-18
		,`[data-test='JobInfoClientMore']` // 2025-03-18
		,`[data-test='JobsPage'] > [data-test='FiltersActive']`
		,`[data-test='JobsPage'] > [data-test='FiltersList']`
		// 2024-12-27
		// I hide it because my JavaScript below automatically clicks the «Just not interested» option from this menu
		// when the `JobActionFeedback` button is clicked, so there`s no need for the menu to appear.
		,`[data-test='JobActionFeedback'] [data-test='UpCPopover']`
		,`[data-test='job-feedback-label']` // 2026-06-13 I have already skipped this project
		,`[data-test='jobs-buttons-component']` // 2025-03-18 «Save search», «Saved jobs»
		,`[data-test='location'] [data-test='UpCIcon']` // 2025-03-18
		,df_DT_Featured // 2026-06-15
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
// 2026-06-15 The previous value: 400.
}, 600);
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
	`#main article` // 2025-03-18
	,`${df_DT_Date}:not(#a)` // 2025-03-18
	,`[class*='mb-']:not(#a)` // 2026-06-15
	,`article ${df_DT_JobInfo}`
	,`article [data-test*='JobDescription']`
	,`article [data-test='JobInfoClient']`
	,`article [data-test='JobInfoClientMore']`
	,`article [data-test='JobTileHeader']`
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
// 2026-05-04
// language=CSS
GM_addStyle([
	`.visited` // 2026-06-13
	,`:hover:not(#A)` // 2026-05-04
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'#main article' // 2025-03-18
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-06-13
// language=CSS
GM_addStyle([
	`:hover` // 2026-06-13
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-06-15
// language=CSS
GM_addStyle([
	df_DT_JobInfo // 2026-06-15
]
	 // language=Javascript
	.join(',') + '{column-gap: .5rem !important;}')
;
// 2026-06-13
// language=CSS
GM_addStyle([
	`:hover` // 2026-06-13
]
	 // language=Javascript
	.join(',') + '{text-decoration: none !important;}')
;
// 2024-12-25, 2025-03-18
// language=CSS
GM_addStyle('body {padding: 0.5rem !important;}');
// 2026-06-13
// language=CSS
GM_addStyle(`.${dfNL} {margin: 0.5rem 0 !important;}`);
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
	dfText // 2025-03-19
// language=Javascript
].join(',') + `{${Object.entries({
	'font-family': 'Segoie UI'
	,'font-size': '120%'
	,'line-height': 1.2
	,'letter-spacing': '.03em' // 2026-05-04
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2026-06-15
if (true) {
	// language=CSS
	GM_addStyle(`${df_C_JobTileActions} {display: none !important;}`);
}
// 2026-06-15 For testing
else {
	// 2024-12-28
	// language=CSS
	GM_addStyle([
		df_C_JobTileActions
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'display': 'block'
				// language=Javascript
				,'left': '60%'
				,'margin-top': '.5rem'
				// language=CSS
				,'opacity': .5 // 2025-03-18
				,'position': 'absolute'
				,'z-index': 1
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
}
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
			const v0 = +new URL(location).searchParams.get('df-rate-min-ge');
			const v1 = +new URL(location).searchParams.get('df-rate-max-ge');
			return a => {
				let r = true;
				if (v0 || v1) {
					let terms = qTerms(a)?.textContent?.trim();
					const h = 'Hourly: ';
					if (terms && terms.startsWith(h)) {
						terms = terms.replace(h, '');
						const bb = terms.split(' - ').map(b => parseFloat(b.replace('$', '')));
						if (bb.length) {
							r = (!v0 || v0 <= bb[0]) && (!v1 || 2 > bb.length || v1 <= bb[1]);
						}
					}
				}
				return r;
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
		 * 2026-06-15
		 * @return {boolean}
		 */
		const fLength = (() => {
			const v = +new URL(location).searchParams.get('df-length');
			return a => {
				let r = true;
				if (v) {
					const e = a.querySelector(dfText);
					// 2026-06-15 Do not hide skipped projects: just show them as skipped.
					if (e) {
						r = v < e.textContent.trim().length;
					}
				}
				return r;
			};
		})();
		/**
		 * 2025-10-02 https://g.co/gemini/share/cf6a1129ba3d
		 * @return {boolean}
		 */
		const fTags = (() => {
			const enable = new URL(location).searchParams.has('df-tags');
			return a => !enable ||
				![...a.querySelectorAll('[data-test*="TokenClamp"] button[data-test="token"]')].some(t => {
					t = t.textContent.trim();
					// 2025-10-27
					// 1) https://gemini.google.com/share/569fcfda03fe
					// 2.1) It correctly handles partial phrases like «2D».
					// 2.2) For speed purposes, it intentionally does not correctly handle
					// partial phrases with special characters, such as «A/B».
					// 2.2.1) It splits «A/B» into 2 words: «A», «B».
					// 2.2.2) It splits «Voice-Over» into 2 words: «Voice», «Over».
					// 2.3)	https://gemini.google.com/share/98d684c5a283
					const ww = t.match(/\w+/g);
					return ᛡ.tags.exact.includes(t) || ᛡ.tags.partial.some(w => ww.includes(w));
				})
			;
		})();
		/**
		 * 2025-03-18
		 * @return {boolean}
		 */
		const fPhrases = (() => {
			const enable = new URL(location).searchParams.has('df-phrases');
			const banned = ᛡ.phrases.map(s => ({m: s.includes(' '), s: s.toUpperCase()}));
			return a => !enable || !(['h2', dfText].some(s => {
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
						// 2.1) https://gemini.google.com/share/fc90073bf8f3
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
			// 2026-06-13
			const modify = (s, action) => {
				const i = a.querySelector(s);
				if (i) {
					action(i);
				}
			};
			// 2025-03-19
			// language=CSS
			modify(dfText, i => {// language=Javascript
				i.innerHTML = i.textContent
					// 2025-03-19 https://stackoverflow.com/a/784547
					// 2026-06-13 https://gemini.google.com/share/8660a99264ca
					.replace(/\r?\n|\r|<br>/g, '<br/>')
					// 2026-06-13 https://gemini.google.com/share/bceb5af402b2
					.replace(/(?:<br\/>){2,}/g, `<div class='${dfNL}'></div>`)
				;
			});
			// 2026-06-13
			modify(df_DT_Date, i => {
				i.innerHTML = i.textContent.trim().replace('Posted ', '');
			});
		};
		// 2025-03-18, 2025-10-02 https://g.co/gemini/share/60eb4bcb2b7f
		const filters = [fCountries, fRate, fRateNotSpecified, fLength, fPhrases, fTags];
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
	const hideProject = a => {
		const e = a.querySelector('button[data-ev-label="dropdown_secondary_toggle"] svg');
		if (e) {
			// 2025-06-06
			// 1) https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
			// 2) https://g.co/gemini/share/689b763bc005
			e.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
		}
	};
	const openProject = b => {
		const l = b.closest(dfProject).querySelector(`a[data-test='job-tile-title-link UpLink']`);
		if (l) {
			// 2025-01-04
			// «https://www.upwork.com/jobs/Assisted-Enhancements-for-Lightweight-App_~021875527601805661470/?referrer_url_path=%2Fnx%2Fsearch%2Fjobs» → «https://www.upwork.com/jobs/~021875527601805661470»
			const u = new URL(l.href);
			const m = u.pathname.match(/_~(\d+)(?=\/|$)/);
			window.open(`${u.origin}/jobs/~${m[1]}`, '_blank');
		}
	};
	(() => {
		let x = 0, y = 0, p;
		const updateProject = () => {p = document.elementFromPoint(x, y)?.closest(dfProject);};
		// 2026-06-16 https://gemini.google.com/share/720476d8112b
		['mousemove', 'mouseenter'].forEach(i => {
			document.addEventListener(i, e => {
				x = e.clientX; y = e.clientY;
				updateProject();
			}, true);
		});
		document.addEventListener('scroll', updateProject, true);
		document.addEventListener('keydown', e => {
			if ('Enter' === e.key) {
				stopEvent(e);
				openProject(p);
			}
			// 2025-06-06
			else if ('Escape' === e.key) {
				stopEvent(e);
				hideProject(p);
			}
		}, true);
	})();
	document.addEventListener('click', e => {
		const i = e.target;
		const menuItemClass = 'air3-menu-item';
		if (!i.classList.contains(menuItemClass) && i.closest('article')) {
			if (!i.closest(`button[data-ev-label='dropdown_secondary_toggle']`)) {
				stopEvent(e);
				openProject(i);
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
				// Now I need `500` for `hideProject()` to work.
				}, 500);
			}
		}
	}, true);
})();