const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const trip = {
  title:"2026 福岡聖誕叮叮噹",
  subtitle:"4天3夜・聖誕旅行",
  start:"2026-12-15T00:00:00+09:00",
  end:"2026-12-18T23:59:59+09:00",
  dateRange:"2026/12/15（二）～ 12/18（五）",
  destination:"福岡・博多",
  flight:{
    outbound:{number:"虎航 IT270",route:"高雄小港 → 福岡",time:"15:25 → 18:55",code:"W5KCGS"},
    return:{number:"虎航 IT271",route:"福岡 → 高雄小港",time:"19:55 → 21:55",code:"W5KCGS"}
  },
  hotel:{
    name:"西鐵飯店 Croom博多 祇園櫛田神社前",
    en:"Nishitetsu Hotel Croom Hakata Gion Kushida Shrine",
    address:"6-30 Gionmachi, Hakata Ward, Fukuoka 812-0038",
    phone:"+81 92-235-5050",
    booking:"5694420651",
    room:"雙床房－附榻榻米區",
    checkin:"15:00 起",
    checkout:"12/18 11:00",
    note:"大廳在二樓；櫛田神社前站步行約2分鐘，5號出口有扶梯。",
    image:"./hotel.jpg?v=4"
  }
};

const days = [
  {
    day:1,date:"12/15（二）",title:"機場 → 飯店 → 博多聖誕市集",meet:"起床時間：09:00",image:"./day1-landmark.jpg?v=5",
    items:[
      {time:"出發前",icon:"🧳",name:"準備出發",detail:"往小港車程約 1 小時；可在車上完成線上報到。記得錢包、信用卡與行程表。"},
      {time:"15:25",icon:"✈️",name:"虎航 IT270",detail:"高雄小港機場 → 福岡機場，預計 18:55 抵達。",map:"高雄國際機場"},
      {time:"抵達後",icon:"🛂",name:"福岡機場入境",detail:"完成入境流程後前往地鐵。機場管制區（包含行李等候區）請勿拍照。",map:"福岡空港"},
      {time:"約 30 分",icon:"🚇",name:"前往飯店",detail:"福岡機場搭機場線至博多站（2站），轉七隈線至櫛田神社前站（1站）；5號出口有扶梯。",map:"櫛田神社前駅"},
      {time:"入住",icon:"🏨",name:"西鐵飯店 Croom博多 祇園櫛田神社前",detail:"雙床房附榻榻米區。對面有24H藥妝，附近有 MaxValu、7-11、全家。",map:"Nishitetsu Hotel Croom Hakata Gion Kushida Shrine"},
      {time:"12:00–23:00",icon:"🎄",name:"博多聖誕市集",detail:"JR博多站前廣場，第一晚感受聖誕氣氛。",map:"JR博多駅前広場"}
    ]
  },
  {
    day:2,date:"12/16（三）",title:"太宰府天滿宮 → 竈門神社 → 博多運河城",meet:"集合時間：08:30～08:40",image:"./day2-landmark.jpg?v=5",
    items:[
      {time:"09:00–21:00",icon:"🍙",name:"Omusubi Yamaya 博多MING店",detail:"JR博多站內 MING 1樓；地址：博多区博多駅中央街1-1。",map:"Omusubi Yamaya 博多MING店"},
      {time:"09:42",icon:"🚆",name:"前往太宰府",detail:"博多站搭地鐵至天神站，步行到西鐵天神站；平日 09:42 有直達太宰府列車。出發前確認「旅人列車」運行日曆。",map:"西鉄福岡（天神）駅"},
      {time:"上午",icon:"⛩️",name:"太宰府天滿宮",detail:"參拜、散步與拍照。",map:"太宰府天満宮"},
      {time:"約10分鐘",icon:"🚌",name:"竈門神社",detail:"從太宰府站搭往内山（竈門神社前）的巴士；回程確認往西鉄都府楼前駅方向班次。",map:"竈門神社"},
      {time:"備用",icon:"🏛️",name:"九州國立博物館",detail:"09:30～17:00，可作為備用行程，外觀拍照或入內參觀。",map:"九州国立博物館"},
      {time:"下午～晚上",icon:"🛍️",name:"博多運河城",detail:"逛街、B1官方一番賞、4F二手一番賞。",map:"キャナルシティ博多"},
      {time:"18:00 起",icon:"✨",name:"聖誕水舞燈光秀",detail:"每日 18:00、19:00、20:00、21:00。",map:"キャナルシティ博多"}
    ]
  },
  {
    day:3,date:"12/17（四）",title:"紅葉八幡宮 → 天神商圈 → 福岡塔",meet:"集合時間：09:30",image:"./day3-landmark.jpg?v=5",
    items:[
      {time:"10:00–19:00",icon:"🥐",name:"FULL FULL",detail:"早餐／麵包，原行程記載步行約3分鐘。",map:"The Full Full Hakata"},
      {time:"上午",icon:"⛩️",name:"紅葉八幡宮",detail:"從祇園方向前往，原行程：走路約10分 → 地鐵機場線 → 藤崎 → 步行約11分。",map:"紅葉八幡宮"},
      {time:"中午",icon:"🛍️",name:"天神地下街",detail:"逛天神商圈。",map:"天神地下街"},
      {time:"逛街",icon:"🐹",name:"福岡 CHIIKAWA LAND",detail:"福岡 PARCO 本館8樓；福岡市中央区天神2丁目11-1。",map:"ちいかわらんど 福岡パルコ店"},
      {time:"逛街",icon:"🎁",name:"Mina 天神",detail:"7樓：扭蛋、一番賞。",map:"ミーナ天神"},
      {time:"09:30–22:00",icon:"🗼",name:"福岡塔",detail:"最終入館 21:30。附近有 BOSS E・ZO FUKUOKA；可安排暖暮拉麵、天婦羅たかお、九州迴轉壽司等。",map:"福岡タワー"}
    ]
  },
  {
    day:4,date:"12/18（五）",title:"櫛田／住吉神社 → LaLaport → 回家",meet:"回程班機：19:55",image:"./day4-landmark.jpg?v=7",
    items:[
      {time:"08:00 起",icon:"☕",name:"Bread, Espresso & Hakata &&",detail:"早餐，原行程記載步行約5分鐘。",map:"パンとエスプレッソと博多っと"},
      {time:"09:00 起",icon:"⛩️",name:"櫛田神社散步",detail:"原行程記載從飯店步行約8分鐘。",map:"櫛田神社"},
      {time:"10:50",icon:"🧳",name:"飯店 Check-out",detail:"整理行李，準備離開飯店。"},
      {time:"退房後",icon:"🛍️",name:"LaLaport 福岡",detail:"逛街；4F 一番賞，營業時間 10:00～21:00。",map:"ららぽーと福岡"},
      {time:"17:00 前",icon:"⏰",name:"抵達福岡機場",detail:"原行程特別提醒：5點前一定要到機場。搭車時先線上報到，並預留辦理退稅與安檢時間。",map:"福岡空港"},
      {time:"19:55",icon:"✈️",name:"虎航 IT271",detail:"福岡機場 → 高雄小港機場，預計 21:55 抵達。",map:"福岡空港"}
    ]
  }
];

const favoritesSeed = [
  {id:"food1",cat:"想吃",icon:"🍜",name:"Shin Shin 拉麵",note:"福岡必吃候選"},
  {id:"food2",cat:"想吃",icon:"🍤",name:"天麩羅処ひらお",note:"福岡必吃候選"},
  {id:"food3",cat:"想吃",icon:"🍢",name:"屋台",note:"夜間餐食候選"},
  {id:"food4",cat:"想吃",icon:"🥐",name:"The Full Full Hakata",note:"麵包／甜點"},
  {id:"food5",cat:"想吃",icon:"☕",name:"MUEN COFFEE",note:"咖啡候選"},
  {id:"shop1",cat:"想買",icon:"🐹",name:"吉伊卡哇",note:"博多車站、駿河屋／PARCO"},
  {id:"shop2",cat:"想買",icon:"🎁",name:"一番賞",note:"博多巴士總站7樓、運河城、LaLaport等"}
];

const packingSeed = [
  "護照／電子登機證","錢包／信用卡","日幣現金","手機／充電線","行動電源","eSIM","旅行保險資料","行程表","常用藥品","100ml以下液體分裝與透明夾鏈袋"
];

let state = {
  page:"home",
  day:1,
  favTab:"全部",
  openDays: new Set([1]),
  liked: new Set(JSON.parse(localStorage.getItem("fukuoka-liked") || "[]")),
  checks: JSON.parse(localStorage.getItem("fukuoka-checks") || "{}")
};

function countdown(){
  const now = new Date();
  const start = new Date(trip.start);
  const diff = Math.ceil((start-now)/86400000);
  if(diff>0) return `${diff} 天`;
  if(now<=new Date(trip.end)) return "旅行中 🎄";
  return "已完成 ✨";
}
function mapUrl(q){ return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q); }
function setPage(page){
  state.page=page;
  $$(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.page===page));
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}
function render(){
  const titleMap={home:"首頁",itinerary:"行程",map:"地圖",favorites:"收藏",more:"更多"};
  $("#pageTitle").textContent=titleMap[state.page];
  if(state.page==="home") $("#content").innerHTML=homeView();
  if(state.page==="itinerary") $("#content").innerHTML=itineraryView();
  if(state.page==="map") $("#content").innerHTML=mapView();
  if(state.page==="favorites") $("#content").innerHTML=favoritesView();
  if(state.page==="more") $("#content").innerHTML=moreView();
  bindDynamic();
}
function homeView(){
  return `
    <section class="hero hero-photo" style="background-image:linear-gradient(135deg,rgba(45,12,30,.78),rgba(56,38,122,.64)),url('./hero-fukuoka.jpg?v=4')">
      <div class="eyebrow">🎄 ${trip.subtitle}</div>
      <h1>${trip.title}</h1>
      <p>${trip.dateRange}</p>
      <div class="hero-stats">
        <div class="hero-stat"><small>距離出發</small><strong>${countdown()}</strong></div>
        <div class="hero-stat"><small>目的地</small><strong>${trip.destination}</strong></div>
      </div>
    </section>
    <div class="grid4">
      <button class="quick" data-open="flight"><b>✈️</b>航班</button>
      <button class="quick" data-open="hotel"><b>🏨</b>住宿</button>
      <button class="quick" data-jump="itinerary"><b>🗓️</b>行程</button>
      <button class="quick" data-open="packing"><b>🧳</b>行李</button>
    </div>
    <div class="section-head"><h2>四天行程</h2><button class="link-btn" data-jump="itinerary">查看全部</button></div>
    ${days.map(d=>`
      <button class="card day-card image-day-card" data-day-open="${d.day}" style="width:100%;text-align:left;border:1px solid var(--line)">
        <img src="${d.image}" alt="Day ${d.day}">
        <div class="day-card-body"><span class="tag red">DAY ${d.day}</span><span class="tag">${d.date}</span>
        <h3 style="margin:8px 0 5px">${d.title}</h3><div class="muted">${d.meet}</div></div>
      </button>`).join("")}
    <div class="notice">🎅 聖誕旅行重點：Day 1 博多聖誕市集、Day 2 太宰府與運河城燈光秀、Day 3 天神與福岡塔、Day 4 LaLaport 後返台。</div>`;
}
function itineraryView(){
  return `
    <div class="section-head"><h2>每日行程</h2><span class="muted">點擊日期展開／收合</span></div>
    <div class="accordion-days">
      ${days.map(d=>`
        <section class="day-accordion ${state.openDays.has(d.day)?'open':''}">
          <button class="day-accordion-head" data-toggle-day="${d.day}">
            <div class="day-badge"><small>DAY</small><strong>${d.day}</strong></div>
            <div class="day-head-copy">
              <div class="day-date">${d.date}</div>
              <div class="day-title">${d.title}</div>
            </div>
            <span class="chev">${state.openDays.has(d.day)?'⌃':'⌄'}</span>
          </button>
          ${state.openDays.has(d.day)?`
            <div class="day-accordion-body">
              <img class="landmark-hero" src="${d.image}" alt="福岡當地景點照片">
              <div class="day-meet">${d.meet}</div>
              <div class="timeline">${d.items.map(eventHtml).join("")}</div>
            </div>`:""}
        </section>`).join("")}
    </div>`;
}
function eventHtml(it){
  return `<div class="event">
    <div class="dot">${it.icon}</div>
    <div class="event-card">
      <div class="time">${it.time}</div>
      <h3>${it.name}</h3>
      <div class="muted">${it.detail}</div>
      ${it.map?`<div class="actions"><a class="btn btn-soft" href="${mapUrl(it.map)}" target="_blank" rel="noopener">📍 Google Maps</a></div>`:""}
    </div>
  </div>`;
}
const locationMapSlugs = {"高雄國際機場": "kaohsiung-airport", "福岡空港": "fukuoka-airport", "櫛田神社前駅": "hotel-croom", "Nishitetsu Hotel Croom Hakata Gion Kushida Shrine": "hotel-croom", "JR博多駅前広場": "hakata-christmas-market", "Omusubi Yamaya 博多MING店": "omusubi-yamaya", "西鉄福岡（天神）駅": "nishitetsu-tenjin", "太宰府天満宮": "dazaifu-tenmangu", "竈門神社": "kamado-shrine", "九州国立博物館": "kyushu-national-museum", "キャナルシティ博多": "canal-city", "紅葉八幡宮": "momiji-hachimangu", "天神地下街": "tenjin-underground", "ちいかわらんど 福岡パルコ店": "chiikawa-land", "ミーナ天神": "mina-tenjin", "福岡タワー": "fukuoka-tower", "パンとエスプレッソと博多っと": "bread-espresso", "櫛田神社": "kushida-shrine", "ららぽーと福岡": "lalaport-fukuoka"};
function locationImage(q){ return "./"+(locationMapSlugs[q]||"fukuoka-airport")+".svg?v=5"; }

function mapView(){
  const points=days.flatMap(d=>d.items.filter(x=>x.map).map(x=>({...x,day:d.day,date:d.date})));
  return `<div class="seg-tabs">
      <button class="active" data-map-filter="all">全部</button>
      ${days.map(d=>`<button data-map-filter="${d.day}">Day ${d.day}</button>`).join("")}
    </div>
    <div class="map-list">${points.map(p=>`<div class="pin location-card" data-map-day="${p.day}">
      <div class="location-meta"><strong>${p.icon} ${p.name}</strong><div class="muted">Day ${p.day}・${p.date}・${p.time}</div></div>
      <img class="location-map-image" src="${locationImage(p.map)}" alt="${p.name} 地理位置圖">
      <a class="btn btn-soft location-open" href="${mapUrl(p.map)}" target="_blank" rel="noopener">📍 開啟 Google Maps</a>
    </div>`).join("")}</div>`;
}
function favoritesView(){
  const tabs=["全部","想吃","想買"];
  const list=favoritesSeed.filter(x=>state.favTab==="全部"||x.cat===state.favTab);
  return `<div class="seg-tabs">${tabs.map(t=>`<button data-favtab="${t}" class="${state.favTab===t?'active':''}">${t}</button>`).join("")}</div>
    <div class="section-head"><h2>旅行收藏</h2></div>
    ${list.map(x=>`<div class="card favorite-card">
      <div class="favorite-icon">${x.icon}</div>
      <div><strong>${x.name}</strong><div class="muted">${x.note}</div><span class="tag gold">${x.cat}</span></div>
      <button class="heart ${state.liked.has(x.id)?'on':''}" data-like="${x.id}">${state.liked.has(x.id)?'♥':'♡'}</button>
    </div>`).join("")}
    <div class="notice">💡 愛心收藏會儲存在這支手機的瀏覽器中。</div>`;
}
function moreView(){
  return `<div class="more-list">
    ${moreItem("✈️","航班資訊","IT270 / IT271","flight")}
    ${moreItem("🏨","住宿資訊","飯店、訂單、地址與電話","hotel")}
    ${moreItem("🧳","行李清單","可直接勾選","packing")}
    ${moreItem("⚠️","搭機注意事項","手提行李、液體與拍攝規定","rules")}
    ${moreItem("💴","預算備忘","機票、住宿與現金","budget")}
    ${moreItem("🍜","福岡必吃","餐廳候選清單","food")}
    ${moreItem("🖼️","旅行視覺","依行程生成的旅行海報與APP預覽","visuals")}
  </div>`;
}
function moreItem(icon,title,sub,type){
  return `<button class="more-item" data-open="${type}" style="width:100%;text-align:left;border:1px solid var(--line)">
    <span class="emoji">${icon}</span><div><strong>${title}</strong><span class="muted">${sub}</span></div><span>›</span>
  </button>`;
}
function openModal(type){
  let html="";
  if(type==="flight") html=`<h2>✈️ 航班資訊</h2>
    <div class="card"><span class="tag red">去程</span><h3>${trip.flight.outbound.number}</h3><b>${trip.flight.outbound.route}</b><p>${trip.flight.outbound.time}</p><div class="muted">訂位代號：${trip.flight.outbound.code}</div></div>
    <div class="card"><span class="tag red">回程</span><h3>${trip.flight.return.number}</h3><b>${trip.flight.return.route}</b><p>${trip.flight.return.time}</p><div class="muted">訂位代號：${trip.flight.return.code}</div></div>`;
  if(type==="hotel") html=`<h2>🏨 住宿資訊</h2>
    <div class="card"><img class="modal-cover" src="${trip.hotel.image}" alt="飯店"><h3>${trip.hotel.name}</h3><div class="muted">${trip.hotel.en}</div>
    <div class="detail-list">
      <div class="detail-row"><b>房型</b>${trip.hotel.room}</div>
      <div class="detail-row"><b>訂單編號</b>${trip.hotel.booking}</div>
      <div class="detail-row"><b>入住／退房</b>${trip.hotel.checkin} ／ ${trip.hotel.checkout}</div>
      <div class="detail-row"><b>地址</b>${trip.hotel.address}</div>
      <div class="detail-row"><b>電話</b><a href="tel:${trip.hotel.phone}">${trip.hotel.phone}</a></div>
      <div class="detail-row"><b>備註</b>${trip.hotel.note}</div>
    </div><div class="actions"><a class="btn btn-soft" target="_blank" href="${mapUrl(trip.hotel.name)}">📍 開啟地圖</a></div></div>`;
  if(type==="packing") html=`<h2>🧳 行李清單</h2><div class="checklist">${packingSeed.map((x,i)=>`<label class="checkrow"><input type="checkbox" data-check="${i}" ${state.checks[i]?'checked':''}><span>${x}</span></label>`).join("")}</div>`;
  if(type==="rules") html=`<h2>⚠️ 搭機注意事項</h2>
    <div class="notice"><b>手提行李</b><br>虎航無託運旅客：可攜帶兩件手提物品，總重不超過 10 公斤；包含一件手提行李與一件個人隨身物品，實際尺寸仍以航空公司規定為準。</div>
    <div class="notice"><b>液體／膠狀／噴霧</b><br>每個容器需小於 100 ml / g，全部裝入不超過 1 L（約20×20cm）的透明可密封夾鏈袋，限一袋。</div>
    <div class="notice"><b>機場拍攝</b><br>機場管制區內（包含行李等候區）請勿拍照。</div>`;
  if(type==="budget") html=`<h2>💴 預算備忘</h2><div class="expense-grid">
    <div class="expense"><small>機票／2人</small><strong>NT$30,474</strong></div>
    <div class="expense"><small>住宿／3晚</small><strong>NT$11,085</strong></div>
    <div class="expense"><small>日幣現金</small><strong>¥70,000</strong></div>
    <div class="expense"><small>玉山帳戶</small><strong>¥90,000</strong></div>
  </div><div class="notice">旅平險、不便險、eSIM、機場接送金額在原行程表中尚未填寫。</div>`;
  if(type==="visuals") html=`<h2>🖼️ 旅行視覺</h2><img class="poster-img" src="./travel-poster.png?v=4" alt="福岡旅行海報"><div class="notice">此視覺依照你提供的 2026 福岡聖誕叮叮噹行程內容生成，已內建在 APP 中。</div>`;
  if(type==="food") html=`<h2>🍜 福岡必吃候選</h2><div class="detail-list">
    ${["拉麵競技場","那かむら","爐端燒（たみじ屋、三光橋）","釜揚 牧のうんど","天麩羅処ひらお","Shake Shack 漢堡","Shin Shin 拉麵","屋台","The Full Full Hakata","MUEN COFFEE"].map(x=>`<div class="detail-row">${x}</div>`).join("")}
  </div>`;
  $("#modalBody").innerHTML=html;
  $("#modal").showModal();
  bindModal();
}
function bindModal(){
  $$("[data-check]").forEach(el=>el.onchange=()=>{
    state.checks[el.dataset.check]=el.checked;
    localStorage.setItem("fukuoka-checks",JSON.stringify(state.checks));
  });
}
function bindDynamic(){
  $$("[data-jump]").forEach(x=>x.onclick=()=>setPage(x.dataset.jump));
  $$("[data-day]").forEach(x=>x.onclick=()=>{state.day=Number(x.dataset.day);render();});
  $$("[data-toggle-day]").forEach(x=>x.onclick=()=>{
    const d=Number(x.dataset.toggleDay);
    state.openDays.has(d)?state.openDays.delete(d):state.openDays.add(d);
    render();
  });
  $$("[data-day-open]").forEach(x=>x.onclick=()=>{state.day=Number(x.dataset.dayOpen);setPage("itinerary");});
  $$("[data-open]").forEach(x=>x.onclick=()=>openModal(x.dataset.open));
  $$("[data-favtab]").forEach(x=>x.onclick=()=>{state.favTab=x.dataset.favtab;render();});
  $$("[data-like]").forEach(x=>x.onclick=()=>{
    const id=x.dataset.like;
    state.liked.has(id)?state.liked.delete(id):state.liked.add(id);
    localStorage.setItem("fukuoka-liked",JSON.stringify([...state.liked]));
    render();
  });
  $$("[data-map-filter]").forEach(btn=>btn.onclick=()=>{
    $$("[data-map-filter]").forEach(b=>b.classList.toggle("active",b===btn));
    const f=btn.dataset.mapFilter;
    $$("[data-map-day]").forEach(p=>p.style.display=(f==="all"||p.dataset.mapDay===f)?"block":"none");
  });
}
$$(".nav-item").forEach(x=>x.onclick=()=>setPage(x.dataset.page));
$("#menuBtn").onclick=()=>setPage("more");
$("#bellBtn").onclick=()=>openModal("rules");
$("#modalClose").onclick=()=>$("#modal").close();
render();

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
}
