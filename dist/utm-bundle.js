(()=>{"use strict";const o=o=>{"undefined"!=typeof MktoForms2&&MktoForms2.whenReady((function(e){for(let t in o)o[t].localStorage&&e.addHiddenFields({[o[t].label]:o[t].localStorage})}))};window.addEventListener("load",(e=>{(()=>{const e=new URLSearchParams(window.location.search),t={},l=["utm_source","utm_medium","utm_campaign","campaignid","vendorid","device","utm_content","utm_term","utm_matchtype"];l.forEach((o=>{t[o]={utm:e.get(o),localStorage:localStorage.getItem(o),label:o}})),console.log("utmData:",t);for(let e in t)t[e].utm&&(n=t[e].utm,a=t[e].localStorage,c=t[e].label,console.log("\nUTM HANDLER -------------------------\x3e"),console.log(`${c}:`,n),console.log("localStorage:",a),n||a?n&&!a?(localStorage.setItem(c,n),console.log("utm PRESENT > storing UTM")):!n&&a?console.log("localStorage PRESENT > doing nothing"):n&&a&&(n!==a?(localStorage.setItem(c,n),console.log("BOTH PRESENT > utm DIFFERENT from localStorage > storing new utm")):console.log("BOTH PRESENT and MATCHING > doing nothing")):console.log("BOTH NULL > doing nothing")),Object.keys(t).length===l.length&&(console.log("loop ends"),o(t));var n,a,c})()}))})();