// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/backupninja.js
// @icon https://0xacab.org/uploads/-/system/appearance/header_logo/1/0xacab_72x72.png
// @match *://0xacab.org/liberate/backupninja/*
// @name Backupninja
// ==/UserScript==
// 2024-09-19
// "Improve the appearance of the Backupninja's code repository (`0xacab.org/liberate/backupninja`)":
// https://github.com/dmitrii-fediuk/vm/issues/46
// language=CSS
GM_addStyle('header, .top-bar-fixed {position: initial !important;}');
// language=CSS
GM_addStyle('.layout-page {padding-top: 0 !important;}');
