(()=>{"use strict";window.addEventListener("load",(o=>{(()=>{const o=new URLSearchParams(window.location.search),e={};e.medium={utm:o.get("utm_medium"),localStorage:localStorage.getItem("utm_medium"),label:"utm_medium"},e.campaign={utm:o.get("utm_campaign"),localStorage:localStorage.getItem("utm_campaign"),label:"utm_campaign"};for(let o in e)e[o].utm&&(l=e[o].utm,t=e[o].localStorage,a=e[o].label,console.log("\nUTM HANDLER -------------------------\x3e"),console.log(`${a}:`,l),console.log("localStorage:",t),l||t?l&&!t?(localStorage.setItem(a,l),console.log("utm PRESENT > storing UTM")):!l&&t?console.log("localStorage PRESENT > doing nothing"):l&&t&&(l!==t?(localStorage.setItem(a,l),console.log("BOTH PRESENT > utm DIFFERENT from localStorage > storing new utm")):console.log("BOTH PRESENT and MATCHING > doing nothing")):console.log("BOTH NULL > doing nothing"));var l,t,a})()}))})();