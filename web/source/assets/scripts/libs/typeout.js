/**
 * Type Out
 * @author Darcy Clarke
 *
 * Copyright (c) 2014 Darcy Clarke
 * Dual licensed under the MIT and GPL licenses.
 * http://darcyclarke.me/
 */

 (function(a){a.fn.typeOut=function(b){return this.each(function(){var c=a(this),d=/(<\/?\w+(?:(?:\s+\w+(?:\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)/gim,e=/(&#?[a-z0-9]+;)/gim,f=a.extend({delay:90,preserve:false,marker:"_"},b),g=function(){var a=c.html().trim().split(d),b=[],f=0;a.map(function(c,d){if(c.indexOf("<")<0){a[d]=c.split(e);a[d].map(function(a,c){if(a.indexOf("&")<0){a=a.split("");a.map(function(a){if(a!="")b.push(a)})}else{b.push(a)}})}else{if(a[d]!="")b.push(a[d])}});return b}(),h=function(a){c.html(c.html().slice(0,-1)+g[a]+f.marker);a=a+1;if(a<g.length){setTimeout(function(){h(a)},f.delay)}else{c.html(c.html().slice(0,-1))}};f.marker=f.marker!=""?f.marker:" ";g=f.preserve?g:c.text().split("");c.html("");if(g.length>=1)h(0)})}})(jQuery);