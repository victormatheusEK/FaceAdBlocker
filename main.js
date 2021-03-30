// ==UserScript==
// @name         VanderAds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Vander
// @match        https://www.facebook.com/
// @icon         https://www.google.com/s2/favicons?domain=facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        function vander(){
document.querySelectorAll('div').forEach(e => {
    if (e.getAttribute('role') === 'feed')
        e.querySelectorAll('div').forEach(el => {
            if(el.getAttribute('data-pagelet'))
            if(el.getAttribute('data-pagelet').startsWith('FeedUnit_')){
                let div = el.querySelector('div');
                let divi;
                for(let i = 0; i < 30; i++){
                    divi = div.querySelectorAll('a');
                    if(divi) {
                        div = divi;
                        break;
                    }
                    else{
                        divi = div.querySelector('div');
                        if (!divi) break;
                        div = divi;
                    }
                }
                if((div[3].href == 'https://www.facebook.com/#'))
                    el.remove();
            }
        })
})
}

setInterval(vander, 1000);
})();