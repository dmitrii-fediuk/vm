// 2024-05-30 "Hide the right sidebar from pikabu.ru": https://github.com/dmitrii-fediuk/adblock/issues/32
// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/pikabu.ru.js
// @icon https://cs.pikabu.ru/assets/images/apple-touch-icon-152x152.png
// @match *://pikabu.ru/*
// @name pikabu.ru
// ==/UserScript==
// language=CSS
GM_addStyle('.main {float: none !important; padding: 0 !important; width: 100% !important;}');