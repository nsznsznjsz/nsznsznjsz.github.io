function i(i,o,t){var n,a;void 0===o&&(o=50),void 0===t&&(t={});var e=null!=(n=t.isImmediate)&&n,r=t.maxWait,u=Date.now();function v(){if(void 0!==r){var i=Date.now()-u;if(i+o>=r)return r-i}return o}var c=function(){var o=[].slice.call(arguments),t=this,n=function(){a=void 0,u=Date.now(),e||i.apply(t,o)},r=e&&void 0===a;void 0!==a&&clearTimeout(a),a=setTimeout(n,v()),r&&i.apply(t,o)};return c.cancel=function(){void 0!==a&&clearTimeout(a)},c}export{i};
