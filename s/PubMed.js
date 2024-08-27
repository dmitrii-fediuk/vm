// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/PubMed.js
// @icon https://cdn.ncbi.nlm.nih.gov/coreutils/nwds/img/favicons/favicon-144.png
// @match *://*.ncbi.nlm.nih.gov/*
// @name PubMed
// ==/UserScript==
// 2024-06-08 "Hide the right sidebar from PubMed": https://github.com/dmitrii-fediuk/adblock/issues/48
// language=CSS
GM_addStyle('main#article-details {float: none !important; width: 100% !important;}');
// 2024-06-08 "Improve PubMed appearance": https://github.com/dmitrii-fediuk/vm/issues/1
// language=CSS
GM_addStyle('#article-page {width: auto !important;}');
// language=CSS
GM_addStyle('.article-page #heading {margin-bottom: 1rem !important;}');
// language=CSS
GM_addStyle('.article-page #abstract {margin: 0 !important;}');
// language=CSS
GM_addStyle('.article-page #abstract > h2.title {margin: 0 !important;}');
// language=CSS
GM_addStyle('.article-page #abstract p:first-of-type {margin-top: 0 !important;}');
// language=CSS
GM_addStyle('@media screen and (min-width: 1020px) {.search-form > .inner-wrap {padding: 0;}}');
// language=CSS
GM_addStyle('.search-page > .inner-wrap {width: initial;}');
// language=CSS
GM_addStyle('#search-results {width: calc(100% - 260px);}');
// 2024-08-28
// language=CSS
GM_addStyle('.pmc-alerts, .pmc-header, aside, [role="baner"] {display: none !important;}');
// 2024-06-08
// 1) "Hide the search form from article pages on PubMed": https://github.com/dmitrii-fediuk/vm/issues/2
// 2) https://stackoverflow.com/a/15503444
// 3) `pubmed.ncbi.nlm.nih.gov#?#FORM:-abp-has(+ [id="article-page-header"])` does not work in AdBlock (for an unknown reason).
// 2024-06-24 https://caniuse.com/css-has
// language=CSS
GM_addStyle('#search-form:has(+ #article-page-header) {display: none !important;}');