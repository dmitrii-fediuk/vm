// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/pikabu.ru.js
// @icon https://cs.pikabu.ru/assets/images/apple-touch-icon-152x152.png
// @match *://pikabu.ru/*
// @name pikabu.ru
// ==/UserScript==
// 2024-05-30 "Hide the right sidebar from pikabu.ru": https://github.com/dmitrii-fediuk/vm/issues/28
// language=CSS
GM_addStyle('.main {float: none !important; padding: 0 !important; width: 100% !important;}');
// 2024-08-21 "Improve the appearance of articles on `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/27
// language=CSS
GM_addStyle('main, article {margin: 0 !important;}');
// 2024-08-21
// language=CSS
GM_addStyle('.sidebar {display: none !important;}');
// 2024-05-30, 2024-08-21 "Hide the «Theme picker» sticky block from `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/30
// language=CSS
GM_addStyle('.theme-picker {display: none !important;}');
// 2024-05-30 "Hide the left sidebar from pikabu.ru": https://github.com/dmitrii-fediuk/adblock/issues/32
// language=CSS
GM_addStyle('.app__inner {padding: 0 !important;}');
// 2024-08-21 "Hide the header from `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/26
// language=CSS
GM_addStyle('header.header {display: none !important;}');
// 2024-08-21 "Hide the «Яндекс ID» popup from `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/31
// language=CSS
GM_addStyle('iframe {display: none !important;}');
// 2024-08-21 "Hide the article's author popup from `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/32
// language=CSS
GM_addStyle('.overlay {display: none !important;}');
// 2024-08-21 "Hide the advertisements block below articles on `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/33
// language=CSS
GM_addStyle('#comments ~ * {display: none !important;}');
// 2024-08-21 "Hide extra articles below the primary one on `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/34
// language=CSS
GM_addStyle('.related-stories-feed {display: none !important;}');
// 2024-08-21 "Hide the advertisements block below extra articles on `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/35
// language=CSS
GM_addStyle('.page-story_w-story {display: none !important;}');
// 2024-08-21 "Hide the footer from `pikabu.ru`": https://github.com/dmitrii-fediuk/vm/issues/36
// language=CSS
GM_addStyle('footer {display: none !important;}');