// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/PubMed.js
// @icon https://cdn.ncbi.nlm.nih.gov/coreutils/nwds/img/favicons/favicon-144.png
// @match *://pubmed.ncbi.nlm.nih.gov/*
// @name PubMed
// ==/UserScript==
// 2024-06-08 "Hide the right sidebar from PubMed": https://github.com/dmitrii-fediuk/adblock/issues/48
// language=CSS
GM_addStyle('main#article-details {float: none !important; width: 100% !important;}');