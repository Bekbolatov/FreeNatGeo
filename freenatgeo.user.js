// ==UserScript==
// @name        freenatgeo
// @namespace   com.sparkydots.greasemonkey.noreg
// @description Bypass registration on National Geographic website, read article
// @include     /^https?://[a-z0-9]+\.nationalgeographic\.com/.*$/
// @version     1
// ==/UserScript==


var XXSPRK = {};
XXSPRK.numTries = 0;
XXSPRK.maxTries = 50;
XXSPRK.delay = 100;
XXSPRK.clear = function() {
  $('img[src*="monet"]').hide();
  $('div[id*="monet"]').hide();
  $('body').css('overflow-y', 'scroll');
  $('body').css('overflow-x', 'scroll');
};
XXSPRK.tryClear = function() {
  if ($('img[src*="monet"]').size() > 0) {
    XXSPRK.clear();
	console.log("XXSPRK: clearing");
  } else {
    if (XXSPRK.numTries < XXSPRK.maxTries) {
	  XXSPRK.numTries = XXSPRK.numTries + 1;
	  console.log("XXSPRK: will try again in " + XXSPRK.delay);
	  setTimeout(XXSPRK.tryClear, XXSPRK.delay);
	} else {
	  console.log("XXSPRK: giving up");
	}
  }
}
XXSPRK.tryClear();
