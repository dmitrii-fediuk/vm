// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/backupninja.js
// @icon https://0xacab.org/uploads/-/system/appearance/header_logo/1/0xacab_72x72.png
// @match *://0xacab.org/*
// @name Backupninja
// ==/UserScript==
// 2024-09-19
// 1) "Improve the appearance of the Backupninja's code repository (`0xacab.org/liberate/backupninja`)":
// https://github.com/dmitrii-fediuk/vm/issues/46
// 2.1) "The Backupninja's issues tracker": https://df.tips/t/2371
// 2.2) https://0xacab.org/liberate/backupninja/-/issues
// 3.1) "The `backupninja-systemd` fork of Backupninja": https://df.tips/t/2372
// 3.2) https://0xacab.org/illuusio/backupninja
// 3.3) https://0xacab.org/illuusio/backupninja/-/issues
// language=CSS
GM_addStyle('.gl-fixed, header, .right-sidebar, .top-bar-fixed {position: initial !important;}');
// language=CSS
GM_addStyle('.content-wrapper, .layout-page {padding: 0 !important;}');
