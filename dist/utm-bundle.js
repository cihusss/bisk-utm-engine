(()=>{"use strict";window.addEventListener("load",(o=>{(()=>{const o=new URLSearchParams(window.location.search),e={};["utm_source","utm_medium","utm_campaign","campaignid","vendorid","device","utm_content","utm_term","utm_matchtype"].forEach((t=>{e[t]={utm:o.get(t),localStorage:localStorage.getItem(t),label:t}})),console.log("utmData:",e);for(let o in e)e[o].utm&&(t=e[o].utm,l=e[o].localStorage,a=e[o].label,console.log("\nUTM HANDLER -------------------------\x3e"),console.log(`${a}:`,t),console.log("localStorage:",l),t||l?t&&!l?(localStorage.setItem(a,t),console.log("utm PRESENT > storing UTM")):!t&&l?console.log("localStorage PRESENT > doing nothing"):t&&l&&(t!==l?(localStorage.setItem(a,t),console.log("BOTH PRESENT > utm DIFFERENT from localStorage > storing new utm")):console.log("BOTH PRESENT and MATCHING > doing nothing")):console.log("BOTH NULL > doing nothing"));var t,l,a;setTimeout((()=>{console.log("setTimeout()"),(o=>{"undefined"!=typeof MktoForms2&&MktoForms2.whenReady((function(e){for(let t in o)o[t].localStorage&&(console.log("injecting hidden fields to form:",o[t].label),console.log("utmData[key].localStorage:",o[t].localStorage),e.addHiddenFields({[o[t].label]:o[t].localStorage}))}))})(e)}),3e3)})()}))})();