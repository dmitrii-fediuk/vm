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
			// 2025-10-02 https://www.iban.com/country-codes
			const ll = [
				[
					'Egypt', 'EGY'
					,'India', 'IND'
					,'Indonesia', 'IDN'
					,'Pakistan', 'PAK'
					,'Philippines', 'PHL'
					,'Vietnam', 'VNM'
				]
				,[
					'Brazil', 'BRA'
					,'China', 'CHN'
					,'CZE'
					,'Germany', 'DEU'
					,'Israel', 'ISR'
					,'Netherlands', 'NLD'
					,'Poland', 'POL'
					,'Saudi Arabia', 'SAU'
					,'Ukraine', 'UKR'
					,'United Arab Emirates', 'ARE'
				]
			];
			// 2025-10-02 https://g.co/gemini/share/e0109654ff2a
			const countries = l ? ll.slice(0, l).flat() : [];
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
			const banned = [
				'2D Animation'
				,'3D Design'
				,'3D Modeling'
				,'A/B Testing'
				,'AI Video Generation'
				,'AI Video Generator'
				,'AI-Generated Video'
				,'Acting'
				,'Adobe After Effects'
				,'Adobe Illustrator'
				,'Adobe Photoshop'
				,'Amazon Listing Optimization'
				,'Android App Development'
				,'Animation'
				,'Art & Design'
				,'Audio Engineering'
				,'Audio Production'
				,'Autodesk Fusion 360'
				,'Blockchain Development'
				,'Blog Writing'
				,'Business Proposal Writing'
				,'CNC Programming'
				,'Circuit Design'
				,'Cold Calling'
				,'Comedy Writing'
				,'Content Writing'
				,'Biochemistry'
				,'Biology'
				,'Chemistry'
				,'Conversion Rate Optimization'
				,'Copywriting'
				,'Creative Strategy'
				,'Creative Writing'
				,'DApps'
				,'DaVinci Resolve'
				,'Digital Project Management'
				,'Dropshipping'
				,'Electrical Engineering'
				,'Elementor'
				,'Email Automation'
				,'Email Campaign Setup'
				,'Email Communication'
				,'Email Copywriting'
				,'Email Marketing Strategy'
				,'Email Marketing'
				,'Event Management'
				,'Event Planning'
				,'Event Setup'
				,'Executive Support'
				,'Facebook Ads Manager'
				,'Facebook Advertising'
				,'Fashion Design'
				,'Figma'
				,'Financial Analysis'
				,'Financial Projection'
				,'Google Ads'
				,'Grant Writing'
				,'Graphic Design'
				,'HubSpot'
				,'Human Resource Management'
				,'Influencer Outreach'
				,'Internet Marketing'
				,'Landing Page'
				,'Lead Generation Analysis'
				,'Lead Generation Content Creation'
				,'Lead Generation Strategy'
				,'Lead Generation'
				,'LinkedIn Recruiting'
				,'MQL 4'
				,'Market Analysis'
				,'Market Research'
				,'Marketing Automation'
				,'Mechanical Engineering'
				,'Motion Graphics'
				,'Outbound Sales'
				,'Outreach Strategy'
				,'PCB Design'
				,'Pay Per Click Advertising'
				,'Penetration Testing'
				,'Photo Editing'
				,'Photography'
				,'Project Management'
				,'Public Relations'
				,'QA Testing'
				,'Recruiting'
				,'SEO Backlinking'
				,'SEO Keyword Research'
				,'Sales'
				,'Science Tutoring'
				,'Scriptwriting'
				,'Search Engine Marketing Strategy'
				,'Search Engine Optimization'
				,'Singing'
				,'Sketch'
				,'Social Media Marketing'
				,'SolidWorks'
				,'Sound Mixing'
				,'Stock Market'
				,'Structural Engineering'
				,'Telemarketing'
				,'Trading Automation'
				,'Trading Strategy'
				,'Translation'
				,'UI Animation'
				,'UI Graphics'
				,'User Experience Design'
				,'User Interface Design'
				,'Video Editing & Production'
				,'Video Editing'
				,'Video Post-Editing'
				,'Videography'
				,'Virtual Assistance'
				,'Voice Acting'
				,'Voice-Over'
				,'Web Design'
				,'Webinar'
				,'Wix'
				,'Zoom Video Conferencing'
				,'iOS Development'
			];
			return a => !enable ||
				![...a.querySelectorAll('[data-test*="TokenClamp"] button[data-test="token"]')]
					.some(t => banned.includes(t.textContent.trim()))
			;
		})();
		/**
		 * 2025-03-18
		 * @return {boolean}
		 */
		const fPhrases = (() => {
			const enable = new URL(location).searchParams.has('df-phrases');
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