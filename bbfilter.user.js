 // ==UserScript==
// @name         bbfilter
// @namespace    https://github.com/dwibby/
// @version      0.3
// @description  Filters bb articles
// @author       dwibby
// @match        *://boingboing.net/blog*
// @grant        none
// @run-at       document-idle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

$(document).ready(function(){
  $("a[rel*='author']:contains('Boing Boing\\'s Shop')").parents(".byline").parents("article").hide();
});
