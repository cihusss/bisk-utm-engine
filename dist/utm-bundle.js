(()=>{"use strict";window.addEventListener("load",(o=>{(()=>{const o=new URLSearchParams(window.location.search),l={};["utm_medium","utm_campaign"].forEach((e=>{l[e]={utm:o.get(e),localStorage:localStorage.getItem(e),label:e}}));for(let o in l)l[o].utm&&(e=l[o].utm,t=l[o].localStorage,n=l[o].label,console.log("\nUTM HANDLER -------------------------\x3e"),console.log(`${n}:`,e),console.log("localStorage:",t),e||t?e&&!t?(localStorage.setItem(n,e),console.log("utm PRESENT > storing UTM")):!e&&t?console.log("localStorage PRESENT > doing nothing"):e&&t&&(e!==t?(localStorage.setItem(n,e),console.log("BOTH PRESENT > utm DIFFERENT from localStorage > storing new utm")):console.log("BOTH PRESENT and MATCHING > doing nothing")):console.log("BOTH NULL > doing nothing"));var e,t,n})()}))})();