(e=>{e.d.addEventListener("DOMContentLoaded",(async()=>{e.root=e.d.createElement("solr-tmp"),e.root.innerHTML=e.html,e.d.body.appendChild(e.root.firstChild),e.d.querySelector(".env-indicator").classList.add(e.envs.find((t=>e.host.includes(t)))||e.envs.pop()),e.clean=await new Promise((t=>{let n;const i=setInterval((()=>{n=e.d.getElementById("clean"),n&&(clearInterval(i),t(n))}),e.interval);setTimeout((()=>n?null:t(!1)),e.timeout)})),e.clean&&(e.clean.addEventListener("change",(t=>{const{target:n}=t;n.checked&&(confirm(e.text.clean)||(n.checked=!1))})),e.entity=e.d.getElementById("entity"),e.entity&&e.entity.addEventListener("change",(t=>{const{target:n}=t;n.value&&(confirm(e.text.entity)||(n.value=""))})))}))})({d:document,envs:["local","bench","preview","stage","test","prod"],host:window.location.host,html:'<div class="solr-mod-root"><div class="env-indicator"></div></div>',interval:10,text:{clean:"Are you sure you want to run a clean import?\n\nWarning:  This will destroy all entities from the index.",entity:"Are you sure you want to only import one type of entity?\n\nWarning:  This will destroy all entities from the index."},timeout:5e3});