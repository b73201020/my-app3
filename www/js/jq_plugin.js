// JavaScript Document
/* [jQuery Cookie Plugin]
-------------------------------------------------------------*/
/*!
 * jQuery Cookie Plugin v1.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(d,j){function k(c){return c}function l(c){return decodeURIComponent(c.replace(m," "))}var m=/\+/g;d.cookie=function(c,b,a){if(1<arguments.length&&(!/Object/.test(Object.prototype.toString.call(b))||null==b)){a=d.extend({},d.cookie.defaults,a);null==b&&(a.expires=-1);if("number"===typeof a.expires){var f=a.expires,e=a.expires=new Date;e.setDate(e.getDate()+f)}b=String(b);return j.cookie=[encodeURIComponent(c),"=",a.raw?b:encodeURIComponent(b),a.expires?"; expires="+a.expires.toUTCString():
"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b||d.cookie.defaults||{};for(var f=a.raw?k:l,e=j.cookie.split("; "),g=0,h;h=e[g]&&e[g].split("=");g++)if(f(h.shift())===c)return f(h.join("="));return null};d.cookie.defaults={}})(jQuery,document);

