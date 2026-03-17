/* ---- TIME ---- */
function updateTime() {
  const n = new Date();
  const days = ['اتوار','پیر','منگل','بدھ','جمعرات','جمعہ','ہفتہ'];
  const months = ['جنوری','فروری','مارچ','اپریل','مئی','جون','جولائی','اگست','ستمبر','اکتوبر','نومبر','دسمبر'];
  document.getElementById('topTime').textContent =
    days[n.getDay()] + ' ' + n.getDate() + ' ' + months[n.getMonth()] + ' ' + n.getFullYear() +
    ' — ' + String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
}
updateTime(); setInterval(updateTime, 30000);

/* ---- NAVIGATION ---- */
const pages = ['home','video','article','category'];
function nav(pg) {
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if(el) el.classList.remove('active');
  });
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  if(pg === 'home') {
    document.getElementById('page-home').classList.add('active');
    document.querySelector('.nav-btn').classList.add('active');
  } else if(pg === 'video') {
    document.getElementById('page-video').classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => { if(b.textContent === 'ویڈیو') b.classList.add('active'); });
    initVideo();
  } else if(pg === 'article') {
    document.getElementById('page-article').classList.add('active');
  } else if(catData[pg]) {
    showCat(pg);
  }
  window.scrollTo(0, 0);
}

/* ---- POLL ---- */
let pollVotes = [8421, 6234, 3612, 1808], pollVoted = false;
function vote(i) {
  if(pollVoted) return;
  pollVoted = true;
  pollVotes[i]++;
  const total = pollVotes.reduce((a,b)=>a+b,0);
  for(let j=0;j<4;j++){
    const pct = Math.round(pollVotes[j]/total*100);
    document.getElementById('pb'+j).style.width = pct + '%';
    document.getElementById('pb'+j).querySelector('.poll-pct').textContent = pct + '%';
    document.getElementById('pc'+j).textContent = pollVotes[j].toLocaleString();
    document.getElementById('pb'+j).style.background = j===i ? '#1a3f6f' : '#CC0000';
  }
}

/* ---- LIVE VIEW COUNT ---- */
setInterval(() => {
  const el = document.getElementById('liveViewCount');
  if(el) el.textContent = (44000 + Math.floor(Math.random()*3000)).toLocaleString() + ' ناظرین ابھی دیکھ رہے ہیں';
}, 3000);

/* ---- CATEGORY DATA ---- */
const catData = {
  world:   { title:'دنیا',        desc:'دنیا بھر کی تازہ خبریں اور رپورٹس', stories:[
    {img:'https://images.unsplash.com/photo-1603789543379-52e1fe1b7e80?w=400&q=80',cat:'یورپ',title:'EU میں نئے انتخابات کا اعلان — کیا بدلے گا؟',meta:'1 گھنٹہ قبل'},
    {img:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80',cat:'امریکہ',title:'نیویارک میں سمندر کا بڑھتا خطرہ — رپورٹ',meta:'2 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',cat:'ماحول',title:'Amazon جنگل میں بڑے پیمانے پر کٹائی کی رپورٹ',meta:'3 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',cat:'معیشت',title:'دنیا کی بڑی معیشتوں میں نیا رخ — ایشیا آگے',meta:'5 گھنٹے قبل'},
  ]},
  politics:{ title:'سیاست',       desc:'سیاسی خبریں، تجزیے اور رپورٹس', stories:[
    {img:'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&q=80',cat:'پاکستان',title:'قومی اسمبلی میں نئی بل پیش کی گئی — بحث جاری',meta:'30 منٹ قبل'},
    {img:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80',cat:'خارجہ',title:'پاک-چین تعلقات میں نئی جہت — وزیراعظم کا دورہ',meta:'2 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80',cat:'اپوزیشن',title:'مخالفت نے نئے اتحاد کا اعلان کیا',meta:'4 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=400&q=80',cat:'انتخابات',title:'2028 کے انتخابات کی تیاریاں شروع',meta:'1 دن قبل'},
  ]},
  tech:    { title:'ٹیکنالوجی',   desc:'ٹیک کی دنیا کی تازہ خبریں', stories:[
    {img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80',cat:'AI',title:'ChatGPT کا نیا ورژن لانچ — پاکستان میں کب؟',meta:'1 گھنٹہ قبل'},
    {img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',cat:'گیجٹس',title:'Apple کا نیا پروڈکٹ — پاکستان میں قیمت؟',meta:'2 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80',cat:'سیکیورٹی',title:'پاکستان میں سائبر حملوں میں اضافہ',meta:'3 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',cat:'اسٹارٹ اپ',title:'پاکستان کا پہلا ٹیک یونیکورن — 1 ارب ڈالر',meta:'6 گھنٹے قبل'},
  ]},
  sports:  { title:'کھیل',        desc:'کھیل کی دنیا کی تازہ خبریں', stories:[
    {img:'https://images.unsplash.com/photo-1540747913346-19212a4b423e?w=400&q=80',cat:'کرکٹ',title:'پاکستان نے بھارت کو ہرایا — تاریخی جیت',meta:'2 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&q=80',cat:'فٹبال',title:'پاکستان فٹبال ٹیم — ورلڈ کپ 2030 کا خواب',meta:'4 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',cat:'ہاکی',title:'ہاکی میں نئی چیمپئن شپ — پاکستان کی ٹیم',meta:'1 دن قبل'},
    {img:'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80',cat:'اولمپکس',title:'LA اولمپکس 2028 — پاکستان کے امکانات',meta:'2 دن قبل'},
  ]},
  health:  { title:'صحت',         desc:'صحت اور طب کی خبریں', stories:[
    {img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',cat:'طب',title:'نئی کینسر ویکسین کلینیکل ٹرائل میں کامیاب',meta:'45 منٹ قبل'},
    {img:'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80',cat:'ذہنی صحت',title:'پاکستان میں ذہنی صحت کی صورتحال — رپورٹ',meta:'3 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80',cat:'ڈیجیٹل',title:'ٹیلی میڈیسن نے دور دراز علاقوں کو بدل دیا',meta:'5 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80',cat:'تحقیق',title:'ڈینگی سے بچاؤ کی نئی دوا — پاکستان میں تیار',meta:'1 دن قبل'},
  ]},
  entertainment:{ title:'انٹرٹینمنٹ', desc:'فلم، ڈرامہ، موسیقی اور ثقافت', stories:[
    {img:'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',cat:'سینما',title:'پاکستانی فلم نے بین الاقوامی ایوارڈ جیتا',meta:'1 دن قبل'},
    {img:'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80',cat:'موسیقی',title:'کوک اسٹوڈیو کا نیا سیزن — وائرل ہو گیا',meta:'2 دن قبل'},
    {img:'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80',cat:'ڈرامہ',title:'نئی پاکستانی ویب سیریز — Netflix پر لانچ',meta:'3 دن قبل'},
    {img:'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',cat:'موسیقی',title:'عاطف اسلم کا ورلڈ ٹور — 20 شہروں میں کنسرٹ',meta:'4 دن قبل'},
  ]},
  business:{ title:'کاروبار',     desc:'معیشت، مارکیٹس اور کاروبار', stories:[
    {img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80',cat:'مارکیٹس',title:'KSE-100 نئے آسمان — ایک لاکھ کا نشانہ',meta:'1 گھنٹہ قبل'},
    {img:'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80',cat:'تجارت',title:'پاکستان-UAE FTA معاہدہ — برآمدات میں اضافہ',meta:'3 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=400&q=80',cat:'رئیل اسٹیٹ',title:'لاہور میں جائیداد کا بوم — قیمتیں آسمان پر',meta:'5 گھنٹے قبل'},
    {img:'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80',cat:'زراعت',title:'پاکستان کی زراعت میں ٹیک انقلاب — سمارٹ فارمنگ',meta:'1 دن قبل'},
  ]},
  opinion: { title:'رائے',        desc:'مختلف نظریات اور تجزیے', stories:[
    {img:'https://randomuser.me/api/portraits/men/32.jpg',cat:'معیشت',title:'"پاکستان کی معیشت کا مستقبل" — کامران اکبر',meta:'آج'},
    {img:'https://randomuser.me/api/portraits/women/44.jpg',cat:'ٹیکنالوجی',title:'"AI کا انسانیت پر اثر" — ڈاکٹر عائشہ ملک',meta:'آج'},
    {img:'https://randomuser.me/api/portraits/men/67.jpg',cat:'دنیا',title:'"مسلمان دنیا میں نئی قوت" — طارق محمود',meta:'کل'},
    {img:'https://randomuser.me/api/portraits/women/22.jpg',cat:'کھیل',title:'"کھیل اور قومی شناخت" — ثنا جاوید',meta:'کل'},
  ]},
};

function showCat(cat) {
  const d = catData[cat];
  document.getElementById('catTitle').textContent = d.title;
  document.getElementById('catDesc').textContent  = d.desc;
  document.getElementById('catGrid').innerHTML = d.stories.map(s => `
    <div class="ncard" onclick="nav('article')">
      <div class="ncard-img"><img src="${s.img}" alt="" style="width:100%;height:160px;object-fit:cover;display:block;"></div>
      <div class="ncard-body"><div class="nc-cat">${s.cat}</div><div class="nc-title">${s.title}</div><div class="nc-meta">${s.meta}</div></div>
    </div>`).join('');
  document.getElementById('page-category').classList.add('active');
}

/* ================================================================
   VIDEO PLAYER  — Canvas-based animated scenes
   ================================================================ */
const videos = [
  { cat:'براہ راست', title:'قومی اسمبلی کا اجلاس — بجٹ پر اہم بحث جاری، وزیر خزانہ کا خطاب',
    dur:'LIVE', views:'45,230', isLive:true, duration:120, scene:'assembly',
    cols:['#1a237e','#283593','#1565c0'], headline:'قومی اسمبلی — بجٹ اجلاس' },
  { cat:'کھیل', title:'پاک-بھارت میچ کی خاص جھلکیاں — بابر اعظم کی شاندار سنچری',
    dur:'8:42', views:'1.2M', isLive:false, duration:90, scene:'cricket',
    cols:['#1b5e20','#2e7d32','#388e3c'], headline:'پاکستان بمقابلہ بھارت' },
  { cat:'ٹیکنالوجی', title:'مصنوعی ذہانت کا پاکستان پر اثر — ماہرین کی خاص گفتگو',
    dur:'15:20', views:'456K', isLive:false, duration:80, scene:'tech',
    cols:['#0d47a1','#1565c0','#1976d2'], headline:'AI اور پاکستان' },
  { cat:'خصوصی انٹرویو', title:'وزیر اعظم کا خصوصی انٹرویو — معیشت اور مستقبل پر گفتگو',
    dur:'22:15', views:'2.8M', isLive:false, duration:100, scene:'interview',
    cols:['#4a148c','#6a1b9a','#7b1fa2'], headline:'خصوصی انٹرویو' },
  { cat:'ماحول', title:'پاکستان میں سیلاب — خصوصی رپورٹ اور متاثرین کی آپ بیتی',
    dur:'11:05', views:'890K', isLive:false, duration:85, scene:'flood',
    cols:['#01579b','#0277bd','#0288d1'], headline:'سیلاب رپورٹ' },
  { cat:'صحت', title:'نئی کینسر ویکسین — ڈاکٹروں کی رائے اور کلینیکل ٹرائل',
    dur:'6:30', views:'334K', isLive:false, duration:75, scene:'health',
    cols:['#b71c1c','#c62828','#d32f2f'], headline:'طبی پیش رفت' },
  { cat:'کاروبار', title:'KSE-100 نے ایک لاکھ کا نشانہ — مارکیٹ تجزیہ خاص پروگرام',
    dur:'9:15', views:'721K', isLive:false, duration:88, scene:'market',
    cols:['#1b5e20','#2e7d32','#43a047'], headline:'مارکیٹ تجزیہ' },
];

let vCur=0, vPlaying=false, vAutoPlay=true, vElapsed=0, vRaf=null, vLastT=null, vCdTimer=null, vCd=5;
let vInited=false;
let C, CTX;

function drawScene(v, t, w, h, ctx2d) {
  const sc = v.scene, cols = v.cols;
  const fs = w < 200 ? 0.35 : 1;
  ctx2d.fillStyle = cols[0]; ctx2d.fillRect(0,0,w,h);

  if(sc==='assembly'){
    ctx2d.fillStyle=cols[1];
    for(let i=0;i<5;i++){ ctx2d.fillRect(w*.05+i*(w*.18), h*.55, w*.14, h*.3); }
    ctx2d.fillStyle='#fff';
    for(let i=0;i<20;i++){
      const x=w*.05+Math.random()*w*.9, y=h*.55+Math.random()*h*.25;
      ctx2d.fillRect(x,y,8*fs,12*fs);
    }
    const wave=Math.sin(t*2)*3*fs;
    ctx2d.fillStyle='#ffcc00'; ctx2d.fillRect(w*.35, h*.1+wave, w*.3, h*.08);
    ctx2d.fillStyle='#fff'; ctx2d.font=`bold ${14*fs}px Barlow`; ctx2d.textAlign='center';
    ctx2d.fillText('LIVE', w*.5, h*.18+wave);
  } else if(sc==='cricket'){
    ctx2d.fillStyle=cols[1]; ctx2d.fillRect(0,h*.6,w,h*.4);
    ctx2d.fillStyle='#8d6e63'; ctx2d.fillRect(w*.3,h*.3,w*.4,h*.4);
    ctx2d.fillStyle='#ef5350'; ctx2d.beginPath(); ctx2d.arc(w*.5, h*.45+Math.sin(t*3)*8*fs, 14*fs, 0, Math.PI*2); ctx2d.fill();
    ctx2d.fillStyle='#ffff00'; ctx2d.font=`bold ${20*fs}px Barlow Condensed`; ctx2d.textAlign='center';
    ctx2d.fillText('PAK 287/4', w*.5, h*.2);
    ctx2d.fillStyle='rgba(0,0,0,.6)'; ctx2d.fillRect(0,h*.78,w,h*.22);
    ctx2d.fillStyle='#fff'; ctx2d.font=`${13*fs}px Barlow`;
    ctx2d.fillText('Babar Azam 127* (98)', w*.5, h*.9);
  } else if(sc==='tech'){
    for(let i=0;i<12;i++){
      const x=w*.05+i*(w/13), y=h*.2+Math.sin(t+i)*h*.15;
      ctx2d.fillStyle=`rgba(100,200,255,${.3+Math.sin(t+i)*.2})`;
      ctx2d.fillRect(x, y, w*.05, h*.6);
    }
    ctx2d.fillStyle='rgba(0,0,0,.5)'; ctx2d.fillRect(w*.15,h*.25,w*.7,h*.5);
    ctx2d.strokeStyle='#00bcd4'; ctx2d.lineWidth=2*fs; ctx2d.strokeRect(w*.15,h*.25,w*.7,h*.5);
    ctx2d.fillStyle='#00e5ff'; ctx2d.font=`bold ${28*fs}px Barlow Condensed`; ctx2d.textAlign='center';
    ctx2d.fillText('AI', w*.5, h*.52);
    ctx2d.fillStyle='#fff'; ctx2d.font=`${12*fs}px Barlow`; ctx2d.fillText('مصنوعی ذہانت', w*.5, h*.68);
  } else if(sc==='interview'){
    ctx2d.fillStyle=cols[1]; ctx2d.fillRect(w*.05,h*.1,w*.4,h*.75);
    ctx2d.fillStyle='#ce93d8'; ctx2d.beginPath(); ctx2d.arc(w*.25,h*.28,28*fs,0,Math.PI*2); ctx2d.fill();
    ctx2d.fillStyle='#e1bee7'; ctx2d.fillRect(w*.15,h*.43,w*.2,h*.42);
    ctx2d.fillStyle=cols[2]; ctx2d.fillRect(w*.52,h*.1,w*.4,h*.75);
    ctx2d.fillStyle='#ffcc80'; ctx2d.beginPath(); ctx2d.arc(w*.72,h*.28,28*fs,0,Math.PI*2); ctx2d.fill();
    ctx2d.fillStyle='#ffe0b2'; ctx2d.fillRect(w*.62,h*.43,w*.2,h*.42);
    ctx2d.fillStyle='rgba(0,0,0,.7)'; ctx2d.fillRect(0,h*.82,w,h*.18);
    ctx2d.fillStyle='#fff'; ctx2d.font=`${12*fs}px Barlow`; ctx2d.textAlign='left';
    ctx2d.fillText('وزیر اعظم', w*.07, h*.93); ctx2d.textAlign='right'; ctx2d.fillText('نامہ نگار', w*.93, h*.93);
  } else if(sc==='flood'){
    const w1=Math.sin(t)*8*fs, w2=Math.sin(t+1)*6*fs;
    ctx2d.fillStyle='#1565c0'; ctx2d.fillRect(0,h*.4+w1,w,h*.6);
    ctx2d.fillStyle='#1976d2'; ctx2d.fillRect(0,h*.45+w2,w,h*.55);
    ctx2d.fillStyle='#795548'; ctx2d.fillRect(w*.1,h*.15,w*.2,h*.4);
    ctx2d.fillStyle='#5d4037'; ctx2d.fillRect(w*.1,h*.1,w*.2,h*.08);
    ctx2d.fillStyle='#6d4c41'; ctx2d.fillRect(w*.6,h*.2,w*.25,h*.3);
    ctx2d.fillStyle='#ef5350'; ctx2d.font=`bold ${18*fs}px Barlow Condensed`; ctx2d.textAlign='center';
    ctx2d.fillText('FLOOD ALERT', w*.5, h*.15);
  } else if(sc==='health'){
    ctx2d.fillStyle='#fff'; ctx2d.fillRect(w*.2,h*.15,w*.6,h*.65);
    ctx2d.fillStyle=cols[0]; ctx2d.fillRect(w*.44,h*.1,w*.12,h*.75); ctx2d.fillRect(w*.25,h*.37,w*.5,h*.12);
    const pulse=Math.sin(t*4)*5*fs;
    ctx2d.fillStyle='#ef5350'; ctx2d.beginPath(); ctx2d.arc(w*.15,h*.5,20*fs+pulse,0,Math.PI*2); ctx2d.fill();
    ctx2d.fillStyle='rgba(0,0,0,.6)'; ctx2d.fillRect(0,h*.78,w,h*.22);
    ctx2d.fillStyle='#fff'; ctx2d.font=`${12*fs}px Barlow`; ctx2d.textAlign='center';
    ctx2d.fillText('Cancer Vaccine: 90% Success', w*.5, h*.9);
  } else if(sc==='market'){
    ctx2d.fillStyle='#0a1628'; ctx2d.fillRect(0,0,w,h);
    const pts=[.3,.5,.35,.6,.45,.7,.4,.8,.55,.85,.5,.9];
    ctx2d.beginPath(); ctx2d.moveTo(0,h);
    pts.forEach((p,i)=>{ const x=(i/(pts.length-1))*w, y=h-(p+Math.sin(t+i)*.03)*h; ctx2d.lineTo(x,y); });
    ctx2d.lineTo(w,h); ctx2d.fillStyle='rgba(76,175,80,.3)'; ctx2d.fill();
    ctx2d.beginPath();
    pts.forEach((p,i)=>{ const x=(i/(pts.length-1))*w, y=h-(p+Math.sin(t+i)*.03)*h; i===0?ctx2d.moveTo(x,y):ctx2d.lineTo(x,y); });
    ctx2d.strokeStyle='#4caf50'; ctx2d.lineWidth=2*fs; ctx2d.stroke();
    ctx2d.fillStyle='#4caf50'; ctx2d.font=`bold ${22*fs}px Barlow Condensed`; ctx2d.textAlign='center';
    ctx2d.fillText('KSE-100  +1,247  ▲', w*.5, h*.2);
    ctx2d.fillStyle='#fff'; ctx2d.font=`${14*fs}px Barlow`; ctx2d.fillText('100,000', w*.5, h*.35);
  }

  /* bottom bar */
  const bh = fs<.5 ? 16 : 36;
  ctx2d.fillStyle='rgba(0,0,0,.75)'; ctx2d.fillRect(0,h-bh,w,bh);
  ctx2d.fillStyle='#CC0000'; ctx2d.fillRect(0,h-bh,fs<.5?30:80,bh);
  ctx2d.fillStyle='#fff'; ctx2d.font=`bold ${fs<.5?7:13}px Barlow Condensed`; ctx2d.textAlign='center';
  ctx2d.fillText(v.isLive?'LIVE':'KNN', fs<.5?15:40, h-bh+bh*.65);
  ctx2d.textAlign='right'; ctx2d.font=`${fs<.5?7:11}px Barlow`;
  ctx2d.fillText(v.headline, w-6, h-bh+bh*.65);
}

function initVideo() {
  if(vInited) return;
  vInited = true;
  C = document.getElementById('mainCanvas');
  CTX = C.getContext('2d');
  C.width  = C.offsetWidth  || 900;
  C.height = 400;
  buildPlaylist();
  selectVid(0);
}

function animate(ts) {
  if(!vLastT) vLastT=ts;
  const dt = (ts-vLastT)/1000; vLastT=ts;
  if(vPlaying) {
    vElapsed += dt;
    const v = videos[vCur];
    const pct = Math.min(vElapsed/v.duration, 1);
    document.getElementById('vprogFill').style.width = (pct*100).toFixed(1)+'%';
    const el=Math.floor(vElapsed), tot=v.duration;
    const em=Math.floor(el/60), es=el%60, tm=Math.floor(tot/60), ts2=tot%60;
    document.getElementById('vTimeTxt').textContent = v.isLive
      ? `${em}:${String(es).padStart(2,'0')} / LIVE`
      : `${em}:${String(es).padStart(2,'0')} / ${tm}:${String(ts2).padStart(2,'0')}`;
    if(pct>=1 && !v.isLive){ onEnded(); return; }
  }
  drawScene(videos[vCur], vElapsed, C.width, C.height, CTX);
  vRaf = requestAnimationFrame(animate);
}

function startAnim() {
  if(vRaf) cancelAnimationFrame(vRaf);
  vLastT=null; vRaf=requestAnimationFrame(animate);
}

function togglePlay() {
  vPlaying = !vPlaying;
  document.getElementById('vPlayIco').innerHTML = vPlaying
    ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
    : '<polygon points="5,3 19,12 5,21"/>';
}

function selectVid(i) {
  clearTimeout(vCdTimer); document.getElementById('cdBar').style.display='none';
  vCur=i; vElapsed=0; vPlaying=true;
  document.getElementById('vPlayIco').innerHTML='<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
  const v=videos[i];
  document.getElementById('vmCat').textContent   = v.cat;
  document.getElementById('vmTitle').textContent = v.title;
  document.getElementById('vmInfo').textContent  = v.views+' مرتبہ دیکھا · '+v.dur;
  document.getElementById('vprogFill').style.width='0%';
  document.querySelectorAll('.vp-item').forEach((el,j)=>el.classList.toggle('active',j===i));
  startAnim();
  const pi=document.getElementById('vpi'+i);
  if(pi) pi.scrollIntoView({block:'nearest',behavior:'smooth'});
}

function onEnded() {
  if(!vAutoPlay) return;
  vPlaying=false;
  const next=(vCur+1)%videos.length;
  vCd=5;
  const cdBar=document.getElementById('cdBar');
  cdBar.style.display='flex';
  document.getElementById('cdTitle').textContent = videos[next].title.substring(0,28)+'…';
  document.getElementById('cdNum').textContent   = vCd;
  const tc=document.getElementById('cdThumbCanvas');
  const tctx=tc.getContext('2d');
  drawScene(videos[next],0,56,36,tctx);
  vCdTimer=setInterval(()=>{
    vCd--;
    document.getElementById('cdNum').textContent=vCd;
    if(vCd<=0){ clearInterval(vCdTimer); selectVid(next); }
  },1000);
}

function prevVid(){ selectVid((vCur-1+videos.length)%videos.length); }
function nextVid(){ selectVid((vCur+1)%videos.length); }
function seekVid(e){ const w=e.currentTarget.offsetWidth; vElapsed=(e.offsetX/w)*videos[vCur].duration; }
function toggleAuto(){
  vAutoPlay=!vAutoPlay;
  document.getElementById('autoSwitch').classList.toggle('off',!vAutoPlay);
}

function buildPlaylist() {
  document.getElementById('vplaylistEl').innerHTML = videos.map((v,i)=>{
    const tc=document.createElement('canvas'); tc.width=96; tc.height=58;
    const tctx=tc.getContext('2d'); drawScene(v,0,96,58,tctx);
    return `<div class="vp-item${i===0?' active':''}" id="vpi${i}" onclick="selectVid(${i})">
      <div class="vp-thumb">
        <img src="${tc.toDataURL()}" width="96" height="58" style="display:block;">
        <div class="vp-overlay"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
        ${v.isLive?'<div class="vp-live">LIVE</div>':`<div class="vp-dur">${v.dur}</div>`}
      </div>
      <div class="vp-meta">
        <div class="vp-cat">${v.cat}</div>
        <div class="vp-title">${v.title}</div>
        <div class="vp-views">${v.views} ناظرین</div>
      </div>
    </div>`;
  }).join('');
}
