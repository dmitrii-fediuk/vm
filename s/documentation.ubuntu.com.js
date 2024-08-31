// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/documentation.ubuntu.com.js
// @icon https://documentation.ubuntu.com/server/_static/favicon.png
// @match *://documentation.ubuntu.com/*
// @name documentation.ubuntu.com
// ==/UserScript==
// 2024-08-31
// 1) "Hide the left sidebar from `documentation.ubuntu.com`": https://github.com/dmitrii-fediuk/vm/issues/44
// 2) "Improve the appearance of `documentation.ubuntu.com`": https://github.com/dmitrii-fediuk/vm/issues/45
// language=CSS
GM_addStyle('aside.sidebar-drawer, a.back-to-top, .github-issue-link-container, header {display: none !important;}');
// language=CSS
GM_addStyle('.content {width: initial !important;}');
