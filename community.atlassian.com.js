// 2024-05-29 "Hide the right sidebar from community.atlassian.com": https://github.com/dmitrii-fediuk/adblock/issues/30
// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/community.atlassian.com.js
// @icon https://community.atlassian.com/html/@0601DBABBD46E593B9DCC88D6227A033/assets/apple-touch-icon.svg
// @match *://community.atlassian.com/*
// @name community.atlassian.com
// ==/UserScript==
// 2024-05-20
// 1.1) https://violentmonkey.github.io/api/gm#gm_addstyle
// 1.2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/gm.md#gm_addstyle
// 2) https://www.jetbrains.com/help/idea/using-language-injections.html#use-language-injection-comments
// language=CSS
GM_addStyle('.lia-quilt-column-atl-message-view-main {padding: 0 !important; width: 100% !important;}');