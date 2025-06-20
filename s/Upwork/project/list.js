// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/project/list.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/search/jobs*
// @name Upwork / Project / List
// ==/UserScript==
// 2024-10-13, 2024-12-24 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
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
		 * 2025-03-18
		 * @return {boolean}
		 */
		const fRate = (() => {
			const minRate = parseInt(new URL(location.href).searchParams.get('df-rate-min'));
			return a => {
				let r = true;
				if (minRate) {
					const rateE = a.querySelector('li[data-test="job-type-label"] > strong');
					if (rateE) {
						const rateS = rateE.textContent.trim();
						if (rateS.startsWith('Hourly:')) {
							const m = rateS.match(/\$(\d+)\.00/);
							r = !m || minRate <= parseInt(m[1]);
						}
					}
				}
				return r;
			};
		})();
		/**
		 * 2025-03-18
		 * @return {boolean}
		 */
		const fPhrases = (() => {
			const enable = new URL(location.href).searchParams.has('df-phrases');
			const banned = [
				'🚀', '🎯', '🔥', '💡', '📌'
				,'30 minute'
				,'45-Minute'
				,'30 year old speaker'
				,'3D Renderer'
				,'A startup'
				,'ASAP'
				,'Agile'
				,'Android'
				,'Animation Expert'
				,'Artist'
				,'Become part of our'
				,'Betting'
				,'Blogger'
				,'Brand Communication'
				,'Brand Identity'
				,'Brand Partnership'
				,'Business Development'
				,'Business Startup'
				,'Calendly'
				,'Call to discuss'
				,'Campaign'
				,'Career advice'
				,'CFO'
				,'Chemist'
				,'Circuit'
				,'CISO'
				,'CMO'
				,'Coaching'
				,'Cold Calling'
				,'Cold Calls'
				,'Cold Email'
				,'Comic Book'
				,'Communications Specialist'
				,'Company Logo'
				,'Competitive salary'
				,'Co-owner'
				,'Confluence'
				,'Consultation'
				,'Content Creation'
				,'Content Writer'
				,'Copywriter'
				,'Cost optimization'
				,'Cost-effective'
				,'CPA'
				,'CRO'
				,'Cybersecurity strategy'
				,'Dating App'
				,'Deadline'
				,'Dermatologist'
				,'Design Expert'
				,'Development Agency'
				,'Digital Advertiser'
				,'Digital Advertising'
				,'Digital Course'
				,'Digital Marketing'
				,'Digital Transformation'
				,'Dispute Resolution'
				,'Dynamic team'
				,'Email Marketing'
				,'Entwickler'
				,'Facebook'
				,'Figma'
				,'FinOps'
				,'Financial Model'
				,'Financial Plan'
				,'Financial Report'
				,'Food Formulator'
				,'Footage'
				,'Founder'
				,'Fractional COO'
				,'Fractional CTO'
				,'Fundraising'
				,'Google Ads'
				,'Google Tag Manager'
				,'Grant Research'
				,'Grant Writer'
				,'Grant Writing'
				,'Guest Poster'
				,'Guest Speaker'
				,'Head of Marketing'
				,'Help me'
				,'High Ticket Closer'
				,'How to Apply'
				,'Hubspot'
				,'iCloud'
				,'Ideal candidate'
				,'Immediate Start'
				,'Immigration'
				,'Innovative'
				,'Instagram'
				,'Interior Design'
				,'Interior Designer'
				,'Interview'
				,'Interviews'
				,'Investment Banker'
				,'iOS Devices'
				,'I’m developing'
				,'Japanese'
				,'Jira'
				,'Job Responsibilities'
				,'Jobseeker'
				,'Join our'
				,'Join us'
				,'Jump on a call'
				,'iOS application'
				,'Key Responsibilities'
				,'Klaviyo'
				,'Landing Page Designer'
				,'Lead Generation'
				,'Licensed Therapist'
				,'Market Analysis'
				,'Market Research'
				,'Marketer'
				,'Marketing Agency'
				,'Marketing Expert'
				,'Marketing Powerhouse'
				,'Marketing Team'
				,'Mechanical Engineer'
				,'Media Ads'
				,'Media Buyer'
				,'Media Coverage'
				,'Media Expert'
				,'Media Marketing'
				,'Medical Device'
				,'Mentor'
				,'Mentorship'
				,'Meta Ads'
				,'minutes calls'
				,'Mission'
				,'Mobile Platform'
				,'Moderator'
				,'My clients'
				,'My name is'
				,'N8n'
				,'NDA'
				,'Norwegian'
				,'Online courses'
				,'Our client'
				,'Our customers'
				,'Our team'
				,'Outbound calling'
				,'Paid media'
				,'Partnership Opportunity'
				,'Patent Attorney'
				,'Patent Search'
				,'Photographer'
				,'Pitch deck'
				,'Pitchbook'
				,'Post Production'
				,'Potential for equity'
				,'Preparing Proposal'
				,'Professional Proposal'
				,'Promotional Materials'
				,'Promotional Videos'
				,'PPC'
				,'PR Specialist'
				,'Press Release'
				,'Product Research'
				,'Product Testing'
				,'Profit Percentage'
				,'Project Manager'
				,'Proposal Write'
				,'Quick Job'
				,'Recruiting'
				,'Redesign a website'
				,'Referral Partnership'
				,'Relationship Manager'
				,'Revenue Split'
				,'Residential Contractor'
				,'Resume Builder'
				,'Resume Site'
				,'Sales Strategies'
				,'Search Arbitrage'
				,'SEM'
				,'SEO Consultant'
				,'SEO Expert'
				,'SEO Specialist'
				,'Schedule a brief discussion'
				,'Shooting Content'
				,'Shopify Customizations'
				,'Should not take longer than'
				,'Slack'
				,'Slide presentation'
				,'Social Media'
				,'Software consultancy'
				,'Sourcing Specialist'
				,'Standup'
				,'Stock options'
				,'Strategic Partnership'
				,'Structural Engineer'
				,'Supplement Manufacturer'
				,'T-Shirt Design'
				,'Tax Optimization'
				,'Tax Structures'
				,'Teach me'
				,'Team meeting'
				,'Team of development professionals'
				,'Telecom'
				,'The candidate should provide'
				,'The ideal freelancer'
				,'TikTok'
				,'to partner with'
				,'Trading'
				,'Trainer'
				,'Transgender'
				,'U.S.-based lawyer'
				,'Urgent'
				,'Urgently'
				,'Venture Researcher'
				,'Video Content Creator'
				,'Videographer'
				,'Visual Identity'
				,'Voice'
				,'Voiceover'
				,'We are an accomplished team'
				,'We have developed'
				,'We only hire'
				,'Web Designer'
				,'Web3'
				,'Webflow Designer'
				,'Well funded'
				,'Whatsapp'
				,'Work with a team'
				,'Workshop'
				,'You will be responsible'
				,'Your expertise will be crucial'
				,'Your expertise will help us'
				,'Your insights will help us'
				,'YouTube Thumbnail'
				,'Zoom'
			].map(s => ({m: s.includes(' '), s: s.toUpperCase()}));
			return a => !enable || !(['h2', 'p.text-body-sm'].some(s => {
				const e = a.querySelector(s);
				// 2025-03-18 `e` is `null` if the project is already hidden via the UI («Just not interested»).
				let r = !!e;
				if (r) {
					const t = e.textContent.toUpperCase();
					// 2025-03-23 https://chatgpt.com/c/67df4ec4-a640-8003-8f17-7e3d5ba0d5e7
					const ta = t.match(/\w+|\p{Extended_Pictographic}/gu);
					//return banned.some(b => b.m ? t.includes(b.s) : ta.includes(b.s));
					r = banned.some(b => {
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
		// 2025-03-18
		// 1) https://chatgpt.com/c/67d953fa-c3e8-8003-858a-d60b7a270c03
		// 2) https://claude.ai/chat/a79fe12b-9d97-4a6b-87fb-304eb27c0807
		// 3) https://grok.com/chat/1f2223eb-d192-4d35-a49a-9bcc8729e1b4
		return c => c.querySelectorAll('article').forEach(a => {
			if (!fRate(a) || !fPhrases(a)) {
				// 2025-03-18 https://chatgpt.com/c/67d984ba-4f08-8003-a6dc-e3d70688ceab
				a.style.display = 'none';
			}
			else {
				format(a);
			}
		});
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
						debugger;
					}
				// 2025-06-06
				// Previously, I had `50` here.
				// Now I need `500` for `hideArticle()` to work.
				}, 500);
			}
		}
	}, true);
})();