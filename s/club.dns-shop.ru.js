// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/club.dns-shop.ru.js
// @icon https://club.dns-shop.ru/favicon.svg
// @match *://club.dns-shop.ru/*
// @name club.dns-shop.ru
// ==/UserScript==
// 2024-06-24 "Improve `club.dns-shop.ru`": https://github.com/dmitrii-fediuk/vm/issues/6
// language=CSS
GM_addStyle('.post-page {padding: 0;}');
// language=CSS
GM_addStyle('.post-page__content {max-width: initial;}');
// language=CSS
GM_addStyle('.post-page__cover {padding: 1em;}');
// language=CSS
GM_addStyle('.sidebar-space {display: none;}');