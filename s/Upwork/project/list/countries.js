// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/project/list/countries.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/search/jobs*
// @name Upwork / Project / List / Countries
// ==/UserScript==
// 2025-10-05
// 1) https://g.co/gemini/share/ede314ebdbc2
// 2) https://g.co/gemini/share/a3e668c14254
// 3) «Sometimes, when you use more than one userscript on the same web page, they need to run in a particular order.
// You can change the order using the Violentmonkey dashboard.
// Click and drag the bounding box of each script in the list to move it up or down in the list.»
// https://github.com/OpenUserJs/OpenUserJS.org/wiki/Violentmonkey-for-Chrome#user-content-trouble-shooting
// 4) https://g.co/gemini/share/0433ff10fc5f
// 5) https://g.co/gemini/share/049320c5e4e5
// 2025-10-26
['df', 'upwork', 'project', 'list'].reduce((o, k) => o[k] ??= {}, unsafeWindow).countries = [
	// 2025-10-02 https://www.iban.com/country-codes
	[
		'Afghanistan', 'AFG'
		,'Albania', 'ALB'
		,'Algeria', 'DZA'
		,'Angola', 'Angola'
		,'Armenia', 'ARM'
		,'Azerbaijan', 'AZE'
		,'Bangladesh', 'BGD'
		,'Belize', 'BLZ'
		,'Benin', 'BEN'
		,'Bhutan', 'BTN'
		,'Botswana', 'BWA'
		,'Brazil', 'BRA'
		,'Burkina Faso', 'BFA'
		,'Burundi', 'BDI'
		,'Cabo Verde', 'CPV'
		,'Cambodia', 'KHM'
		,'Cameroon', 'CMR'
		,'Central African Republic', 'CAF'
		,'China', 'CHN'
		,'Colombia', 'COL'
		,'Congo', 'COD'
		,'Djibouti', 'DJI'
		,'Ecuador', 'ECU'
		,'Egypt', 'EGY'
		,'Equatorial Guinea', 'GNQ'
		,'Eritrea', 'ERI'
		,'India', 'IND'
		,'Indonesia', 'IDN'
		,'Eswatini', 'SWZ'
		,'Ethiopia', 'ETH'
		,'Gabon', 'GAB'
		,'Georgia', 'GEO'
		,'Ghana', 'GHA'
		,'Greece', 'GRC'
		,'Guatemala', 'GTM'
		,'Guinea', 'GIN'
		,'Haiti', 'HTI'
		,'Honduras', 'HND'
		,'Indonesia', 'IDN\t'
		,'Nigeria', 'NGA'
		,'Pakistan', 'PAK'
		,'Philippines', 'PHL'
		,'Ukraine', 'UKR'
		,'Uzbekistan', 'UZB'
		,'Vietnam', 'VNM'
	]
	,[

		'CZE'
		,'Estonia', 'EST'
		,'Germany', 'DEU'
		,'Hungary', 'HUN'
		,'Israel', 'ISR'
		,'Netherlands', 'NLD'
		,'Poland', 'POL'
		,'Saudi Arabia', 'SAU'
		,'United Arab Emirates', 'ARE'
	]
];