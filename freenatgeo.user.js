// ==UserScript==
// @name        freenatgeo
// @namespace   com.sparkydots.greasemonkey.noreg
// @description Bypass registration on National Geographic website, read article
// @include     /^https?://[a-z0-9]+\.nationalgeographic\.com/.*$/
// @version     1
// ==/UserScript==

if (XXSPRK === undefined) {
  var XXSPRK = {};
}
if (XXSPRK.natgeo === undefined) {
  XXSPRK.natgeo = {};
}
XXSPRK.natgeo.xom = function() {
  var found = false;
  var x = document.images;
  for (i=0; i < x.length; i++) {
    if (x[i].src.indexOf("monet") > -1) {
	  x[i].style.visibility = 'hidden';
	  found = true;
	}
  }  
  x = document.getElementsByTagName('div');
  for (i=0; i < x.length; i++) {
    if (x[i].id.indexOf("monet") > -1) {
	  x[i].style.visibility = 'hidden';
	}
  }  
  if (found) {
    document.getElementsByTagName('body')[0].style.overflowX = 'scroll';
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  }
  console.log('found? ' + found);
};

GM_registerMenuCommand("Remove forced registration", XXSPRK.natgeo.xom, "R");
