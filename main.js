// ==UserScript==
// @name         Better Gcores
// @namespace    jerryshell
// @version      0.0.1
// @description  更好的机核网
// @author       github.com/jerryshell
// @match        *://*.gcores.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gcores.com
// @grant        none
// @license      GNU Affero General Public License v3.0
// ==/UserScript==

(function () {
    'use strict';
    new MutationObserver(() => {
        const commentsElement = document.querySelector('div.originalPage_comments');
        if (commentsElement) {
            commentsElement.remove();
        }
    }).observe(document.querySelector('body'), {
        childList: true,
        attributes: true,
        subtree: true,
    });
})();
