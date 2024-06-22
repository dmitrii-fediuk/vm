// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/data.tuik.gov.tr.js
// @icon https://data.tuik.gov.tr/img/favicon.ico
// @match *://data.tuik.gov.tr/Search/Search?*
// @name Turkish Statistical Institute
// ==/UserScript==
// 2024-06-22 "Remove the header from the search result pages of the Turkish Statistical Institute website (`data.tuik.gov.tr`)":
// https://github.com/dmitrii-fediuk/vm/issues/4
// language=CSS
GM_addStyle('header {display: none !important;}');