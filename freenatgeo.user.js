// ==UserScript==
// @name        freenatgeo
// @namespace   com.sparkydots.greasemonkey.noreg
// @description Bypass registration on National Geographic website, read article
// @include     nationalgeographic.com
// @version     1
// ==/UserScript==

$('img[src*="monet"]').hide();
$('div[id*="monet"]').hide();
$('body').css('overflow-y', 'scroll');
$('body').css('overflow-x', 'scroll');
