const $ = (s)=>document.querySelector(s);
const $$ = (s)=>document.querySelectorAll(s);

let trip = {};
let itinerary = [];
let favorites = {};
let currentPage = "home";
let selectedDay = 1;
let favoriteTab = "food";

async function loadData(){
  const [t,i,f] = await Promise.all([
    fetch("data/trip.json").then(r=>r.json()),
    fetch("data/itinerary.json").then(r=>r.json()),
    fetch("data/favorites.json").then(r=>r.json())
  ]);
  trip=t; itinerary=i; favorites=f;
  render();
}

function setPage(page){
  currentPage=page;
  $$(".nav-item").forEach(b=>b.classList.toggle("active", b.dataset.page===page));
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}

function render(){
  const titles={home:"首頁",itinerary:"行程",map:"地圖",favorites:"收藏",more:"更多"};
  $("#pageTitle").textContent=titles[currentPage];
  const main=$("#mainContent");
  if(currentPage==="home") main.innerHTML=homeView();
  if(currentPage==="itinerary") main.innerHTML=itineraryView();
  if(currentPage==="map") main.innerHTML=mapView();
  if(currentPage==="favorites") main.innerHTML=favoritesView();
  if(currentPage==="more") main.innerHTML=moreView();
  bindDynamic();
}

function homeView(){
  const d=itinerary[0];
  return `
    <section class="hero">
      <span class="pill">${trip.subtitle}</span>
      <h1>${trip.title}</h1>
      <p>${trip.dateRange}</p>
      <div class="stat-row">
        <div class="stat"><small>距離出發還有</small><strong>${trip.countdown} 天</strong></div>
        <div class="stat"><small>目的地</small><strong>${trip.destination}</strong></div>
      </div>
    </section>

    <div class="grid4">
      <button class="quick" data-open="flight"><b>✈️</b>航班</button>
      <button class="quick" data-open="hotel"><b>🏨</b>住宿</button>
      <button class="quick" data-page-jump="itinerary"><b>🗓️</b>行程</button>
      <button class="quick" data-page-jump="map"><b>🗺️</b>地圖</button>
    </div>

    <div class="section-title"><h2>今日行程預覽</h2><button data-page-jump="itinerary">查看全部</button></div>
    <div class="card"><strong>DAY ${d.day}｜${d.date}</strong><div class="muted">${d.title}</div></div>
    ${timelineHtml(d.items.slice(0,4))}
    <div class="notice">💡 ${trip.quote}</div>
  `;
}

function itineraryView(){
  const day=itinerary.find(x=>x.day===selectedDay);
  return `
    <div class="day-tabs">
      ${itinerary.map(x=>`<button class="${x.day===selectedDay?'active':''}" data-day="${x.day}">Day ${x.day}</button>`).join("")}
    </div>
    <div class="section-title"><h2>DAY ${day.day}｜${day.date}</h2></div>
    <div class="card"><strong>${day.title}</strong></div>
    ${timelineHtml(day.items)}
  `;
}

function timelineHtml(items){
  return `<div class="timeline">
    ${items.map(it=>`
      <div class="event">
        <div class="dot">${it.type}</div>
        <div class="event-card">
          <div class="time">${it.time}</div>
          <h3>${it.name}</h3>
          <div class="muted">${it.detail}</div>
          <div class="actions">
            <a class="btn btn-soft" href="${it.map}" target="_blank" rel="noopener">📍 Google Maps</a>
          </div>
        </div>
      </div>`).join("")}
  </div>`;
}

function mapView(){
  const all=itinerary.flatMap(d=>d.items.map(it=>({...it,day:d.day})));
  return `
    <div class="seg-tabs">
      <button class="active">全部</button>
      ${itinerary.map(d=>`<button data-day-map="${d.day}">Day ${d.day}</button>`).join("")}
    </div>
    <div class="map-placeholder" id="mapList">
      ${all.map(p=>pinHtml(p)).join("")}
    </div>
    <div class="notice">此 V1 不需要 Google Maps API 金鑰；點「開啟地圖」即可直接導航。</div>
  `;
}
function pinHtml(p){return `<div class="pin" data-map-day="${p.day}"><strong>${p.type} ${p.name}</strong><div class="muted">Day ${p.day}・${p.time}</div><a href="${p.map}" target="_blank" rel="noopener">開啟地圖 →</a></div>`}

function favoritesView(){
  const labels={food:"想吃",shopping:"想買",notes:"備忘錄"};
  const icons={food:"🍴",shopping:"🛍️",notes:"📝"};
  return `
    <div class="seg-tabs">
      ${Object.keys(labels).map(k=>`<button class="${k===favoriteTab?'active':''}" data-fav="${k}">${icons[k]} ${labels[k]}</button>`).join("")}
    </div>
    <div class="section-title"><h2>${labels[favoriteTab]}</h2></div>
    ${(favorites[favoriteTab]||[]).map(x=>`
      <div class="card favorite-card">
        <div class="favorite-thumb">${x.icon}</div>
        <div><strong>${x.name}</strong><div class="muted">${x.note}</div></div>
        <button aria-label="收藏">♡</button>
      </div>`).join("")}
  `;
}

function moreView(){
  return `
    <div class="more-list">
      <div class="more-item" data-open="flight"><span class="emoji">✈️</span><div><strong>航班資訊</strong><span class="muted">去回程航班與時間</span></div></div>
      <div class="more-item" data-open="hotel"><span class="emoji">🏨</span><div><strong>住宿資訊</strong><span class="muted">飯店、入住與退房</span></div></div>
      <div class="more-item"><span class="emoji">🚆</span><div><strong>交通資訊</strong><span class="muted">JR、地鐵、公車備註</span></div></div>
      <div class="more-item"><span class="emoji">💴</span><div><strong>花費紀錄</strong><span class="muted">V2 可新增表單與統計</span></div></div>
      <div class="more-item"><span class="emoji">🧳</span><div><strong>行李清單</strong><span class="muted">V2 可加入勾選功能</span></div></div>
      <div class="more-item"><span class="emoji">⚙️</span><div><strong>APP 設定</strong><span class="muted">名稱、日期、顏色等</span></div></div>
    </div>`;
}

function openModal(type){
  let html="";
  if(type==="flight"){
    html=`<h2>✈️ 航班資訊</h2>
      <div class="card"><strong>${trip.flight.outbound.route}</strong><p>${trip.flight.outbound.number}・${trip.flight.outbound.date}・${trip.flight.outbound.time}</p><div class="muted">${trip.flight.outbound.note}</div></div>
      <div class="card"><strong>${trip.flight.return.route}</strong><p>${trip.flight.return.number}・${trip.flight.return.date}・${trip.flight.return.time}</p><div class="muted">${trip.flight.return.note}</div></div>`;
  }
  if(type==="hotel"){
    html=`<h2>🏨 住宿資訊</h2>
      <div class="card"><strong>${trip.hotel.name}</strong><p>${trip.hotel.area}</p><div class="muted">入住：${trip.hotel.checkin}<br>退房：${trip.hotel.checkout}<br>${trip.hotel.note}</div></div>`;
  }
  $("#modalBody").innerHTML=html;
  $("#modal").showModal();
}

function bindDynamic(){
  $$("[data-page-jump]").forEach(el=>el.onclick=()=>setPage(el.dataset.pageJump));
  $$("[data-day]").forEach(el=>el.onclick=()=>{selectedDay=Number(el.dataset.day);render();});
  $$("[data-fav]").forEach(el=>el.onclick=()=>{favoriteTab=el.dataset.fav;render();});
  $$("[data-open]").forEach(el=>el.onclick=()=>openModal(el.dataset.open));
  $$("[data-day-map]").forEach(el=>el.onclick=()=>{
    const day=Number(el.dataset.dayMap);
    $$("[data-day-map]").forEach(x=>x.classList.toggle("active",x===el));
    document.querySelector(".seg-tabs button:first-child").classList.remove("active");
    $$("[data-map-day]").forEach(x=>x.style.display=Number(x.dataset.mapDay)===day?"block":"none");
  });
}

$$(".nav-item").forEach(b=>b.addEventListener("click",()=>setPage(b.dataset.page)));
$("#modalClose").onclick=()=>$("#modal").close();
$("#menuBtn").onclick=()=>setPage("more");
$("#notifyBtn").onclick=()=>alert("提醒功能可在 V2 加入。");

loadData().catch(err=>{
  console.error(err);
  $("#mainContent").innerHTML='<div class="card"><h2>資料載入失敗</h2><p>如果你是直接開啟檔案，請透過 GitHub Pages 或本機伺服器瀏覽。</p></div>';
});

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js").catch(()=>{});
}
