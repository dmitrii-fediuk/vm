// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Docs.js
// @icon https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico
// @match *://docs.google.com/*
// @name Google / Docs
// ==/UserScript==
// 2024-12-02 "Improve Google Docs": https://github.com/dmitrii-fediuk/vm/issues/72
// language=CSS
GM_addStyle([
	'#addBulletButton'
	,'#addChecklistButton'
	,'#addNumberedBulletButton'
	,'#alignButton'
	,'#bgColorButton'
	,'#bulletedListPresetMenuButton'
	,'#checklistPresetMenuButton'
	,'#clearFormattingButton'
	,'#commentSeparator'
	,'#docs-branding-container'
	,'#docs-omnibox-toolbar'
	,'#docs-toolbar-mode-switcher'
	,'#formatPainterButton'
	,'#indentButton'
	,'#insertCommentButton'
	,'#insertImageButton'
	,'#insertLinkButton'
	,'#lineSpacingMenuButton'
	,'#numberedListPresetMenuButton'
	,'#outdentButton'
	,'#printButton'
	,'#redoButton'
	,'#spellGrammarCheckButton'
	,'#undoButton'
	,'.docs-companion-app-switcher-container'
	,'.docs-folder-container'
	,'.docs-save-indicator-container'
	,'.docs-star-container'
	,'.docs-titlebar-buttons'
	,'.left-sidebar-container'
	,'.miniChapterSwitcherContainerView'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'#docs-menubar'
	,'#docs-titlebar-container'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// language=CSS
GM_addStyle('.left-sidebar-container {width: 0 !important;}');
// language=CSS
GM_addStyle([
	'div:has(> #docs-header-container)'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			//'float': 'left'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
(function() {
    'use strict';
    // Function to remove left offset
    function removeLeftOffset() {
        // Get all elements with the specified class
        const elements = document.querySelectorAll('.docs-ui-hit-region-surface');
        // Iterate through elements and modify their style
        elements.forEach(element => {
            const currentStyle = element.getAttribute('style');
            if (currentStyle) {
                // Remove 'left: 89px;' from the style string
                const newStyle = currentStyle.replace(/left:\s*89px;\s*/g, '');
                element.setAttribute('style', newStyle);
            }
        });
    }
    // Run initially
    removeLeftOffset();
    // Observe DOM changes to handle dynamically added elements
    const observer = new MutationObserver(removeLeftOffset);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
// language=CSS
//GM_addStyle('.docs-ui-hit-region-surface {left: 0 !important;}');