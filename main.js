/* ============================================================
   main.js — আমার বাগান ফুল ও ফল নার্সারি v1
   SPA section system, WhatsApp/FB messaging, e-commerce shop
   ============================================================ */

/* ── CONFIGURATION — update these with your real numbers ── */
const WA_NUMBER   = '8801601268502';   /* Replace with real WhatsApp number e.g. 01601268502*/
const FB_PAGE     = 'nayeemagro1';   /* Replace with real Facebook page username */
const FB_MSG_URL  = `https://m.me/${FB_PAGE}`;

/* ── CARE GUIDE DATA (was trainingPrograms) ── */
const careGuides = [
  { num:'০১', title:'বারোমাসি আম গাছের যত্ন — রোপণ থেকে ফলন পর্যন্ত', tip:'সূর্যালোক', regular:'☀️ ৬ ঘণ্টা রোদ', special:'💧 সপ্তাহে ২-৩ বার সেচ', featured:true },
  { num:'০২', title:'ড্রাগন ফল চাষ — কম পানিতে বেশি ফলন', tip:'সহজ চাষ', regular:'☀️ ৪-৬ ঘণ্টা রোদ', special:'💧 কম পানি দরকার' },
  { num:'০৩', title:'লেবু ও সিডলেস লেবু — সারাবছর ফলন পদ্ধতি', tip:'সারাবছর', regular:'☀️ ৫ ঘণ্টা রোদ', special:'💧 নিয়মিত সেচ' },
  { num:'০৪', title:'গোলাপ চাষ — সুন্দর ফুলের জন্য সঠিক যত্ন', tip:'জনপ্রিয়', regular:'☀️ ৬ ঘণ্টা রোদ', special:'🌱 মাসে একবার সার' },
  { num:'০৫', title:'অর্কিড যত্ন — আভিজাত্যময় ফুলের রহস্য', tip:'আভিজাত্য', regular:'☀️ পরোক্ষ আলো', special:'💧 সপ্তাহে একবার' },
  { num:'০৬', title:'ছাদ বাগান সেটআপ — ড্রিপ ইরিগেশন সহ সম্পূর্ণ গাইড', tip:'স্মার্ট বাগান', regular:'⚙️ অটো সেটআপ', special:'💡 বিশেষজ্ঞ পরামর্শ' },
];

/* ── SHOP PRODUCTS — Garden plants & accessories ── */
const products = [
  /* ফলের গাছ */
  { id:1,  name:'বারোমাসি আম (কলম)',    cat:'ফলের গাছ',  icon:'🥭', price:350,  desc:'উন্নত জাত, কলম চারা, ১-২ বছরে ফল' },
  { id:2,  name:'সিডলেস লেবু',          cat:'ফলের গাছ',  icon:'🍋', price:180,  desc:'বীজমুক্ত, সারাবছর ফলন, উচ্চ রোগ প্রতিরোধ ক্ষমতা' },
  { id:3,  name:'ড্রাগন ফল (লাল)',      cat:'ফলের গাছ',  icon:'🐉', price:280,  desc:'কম পানিতে দ্রুত ফলন, এপ্রিল–জুন' },
  { id:4,  name:'মাল্টা (উন্নত জাত)',   cat:'ফলের গাছ',  icon:'🍊', price:420,  desc:'সুমিষ্ট, রসালো, শীতকালীন ফল' },
  { id:5,  name:'পেয়ারা (থাই বারোমাসি)',cat:'ফলের গাছ',  icon:'🍐', price:200,  desc:'বড় আকার, মিষ্টি, সারাবছর ফলন' },
  { id:6,  name:'আমড়া (দেশি)',          cat:'ফলের গাছ',  icon:'🌿', price:150,  desc:'দেশীয় প্রজাতি, টক-মিষ্টি স্বাদ' },
  { id:7,  name:'কলা (সাগর কলা)',       cat:'ফলের গাছ',  icon:'🍌', price:120,  desc:'দ্রুত বর্ধনশীল, ৮-১০ মাসে ফল' },
  { id:8,  name:'পেঁপে (হাইব্রিড)',     cat:'ফলের গাছ',  icon:'🍈', price:80,   desc:'হাইব্রিড জাত, ৬ মাসে ফলন শুরু' },

  /* ফুলের গাছ */
  { id:9,  name:'গোলাপ (বিভিন্ন রঙ)',   cat:'ফুলের গাছ', icon:'🌹', price:100,  desc:'দেশি ও বিদেশি জাত, সারাবছর ফোটে' },
  { id:10, name:'অর্কিড',               cat:'ফুলের গাছ', icon:'🌸', price:500,  desc:'আভিজাত্য ও দীর্ঘস্থায়ী সৌন্দর্য' },
  { id:11, name:'মানিপ্ল্যান্ট',        cat:'ফুলের গাছ', icon:'🌿', price:100,  desc:'ঘরের বাতাস বিশুদ্ধ রাখে, সহজ যত্ন' },
  { id:12, name:'বেলি ফুল',             cat:'ফুলের গাছ', icon:'🤍', price:120,  desc:'সুগন্ধি, সন্ধ্যায় ফোটে, সহজ পরিচর্যা' },
  { id:13, name:'সূর্যমুখী',            cat:'ফুলের গাছ', icon:'🌻', price:60,   desc:'দ্রুত বর্ধনশীল, বীজ থেকে ৬০-৭০ দিনে ফুল' },
  { id:14, name:'ক্যাকটাস (বিভিন্ন)',  cat:'ফুলের গাছ', icon:'🌵', price:150,  desc:'কম যত্নে সুন্দর, ইনডোর পারফেক্ট' },

  /* সার ও মাটি */
  { id:15, name:'জৈব কম্পোস্ট সার (৫ কেজি)',  cat:'সার ও মাটি', icon:'🌱', price:180, desc:'শতভাগ প্রাকৃতিক, গাছের জন্য সেরা' },
  { id:16, name:'ভার্মি কম্পোস্ট (৫ কেজি)',    cat:'সার ও মাটি', icon:'🪱', price:220, desc:'কেঁচো সার, উচ্চমানের জৈব পুষ্টি' },
  { id:17, name:'বোনমিল সার (১ কেজি)',         cat:'সার ও মাটি', icon:'🦴', price:120, desc:'ফসফরাস সমৃদ্ধ, শিকড় বিকাশে সহায়ক' },
  { id:18, name:'কোকো পিট (৫ কেজি)',           cat:'সার ও মাটি', icon:'🌾', price:200, desc:'হালকা পটিং মিক্স, পানি ধারণ ক্ষমতা বেশি' },
  { id:19, name:'রেডি মিক্স পটিং সয়েল',       cat:'সার ও মাটি', icon:'🪣', price:250, desc:'গাছ লাগানোর জন্য রেডি, ব্যালেন্সড pH' },

  /* কীটনাশক */
  { id:20, name:'নিম তেল কীটনাশক (৫০০ মিলি)',  cat:'কীটনাশক',    icon:'🌿', price:160, desc:'প্রাকৃতিক, পরিবেশবান্ধব, সকল পোকা নাশ' },
  { id:21, name:'জৈব ছত্রাকনাশক (২৫০ মিলি)',    cat:'কীটনাশক',    icon:'🍃', price:140, desc:'ছত্রাক ও রোগ প্রতিরোধে কার্যকর' },
  { id:22, name:'বায়ো পেস্টিসাইড স্প্রে',       cat:'কীটনাশক',    icon:'🧴', price:200, desc:'রেডি-টু-ইউজ স্প্রে, তৎক্ষণাৎ কার্যকর' },

  /* বাগান সরঞ্জাম */
  { id:23, name:'ড্রিপ ইরিগেশন কিট (১০ গাছ)',  cat:'সরঞ্জাম',     icon:'💧', price:650,  desc:'অটোমেটিক সেচ ব্যবস্থা, পানি সাশ্রয়ী' },
  { id:24, name:'গার্ডেনিং টুলস সেট (৫ পিস)',   cat:'সরঞ্জাম',     icon:'🔨', price:380,  desc:'খুরপি, কোদাল, কাঁচি, স্প্রেয়ার সহ' },
  { id:25, name:'প্লাস্টিক ফ্লাওয়ার পট (বড়)',  cat:'সরঞ্জাম',     icon:'🪴', price:120,  desc:'১২ ইঞ্চি, টেকসই, ড্রেনেজ হোল সহ' },
  { id:26, name:'সিরামিক পট (সুন্দর ডিজাইন)',   cat:'সরঞ্জাম',     icon:'🏺', price:280,  desc:'ইনডোর/আউটডোর, বিভিন্ন ডিজাইন' },
  { id:27, name:'গার্ডেন স্প্রেয়ার (১.৫ লিটার)',cat:'সরঞ্জাম',     icon:'🚿', price:180,  desc:'প্রেশার স্প্রেয়ার, সেচ ও কীটনাশকে' },
  { id:28, name:'ব্যাম্বু গার্ডেন স্টিক (১০ পিস)',cat:'সরঞ্জাম',   icon:'🪵', price:80,   desc:'গাছ সাপোর্টের জন্য, বাঁশের তৈরি' },
];

/* ── Gallery photos ── */
const galleryPhotos = [
  'photo_01.jpg','photo_02.jpg','photo_03.jpg','photo_04.jpg','photo_05.jpg',
  'photo_06.jpg','photo_07.jpg','photo_08.jpg','photo_09.jpg','photo_10.jpg',
  'photo_11.jpg','photo_12.jpg','photo_13.jpg','photo_14.jpg','photo_15.jpg',
  'photo_16.jpg','photo_17.jpg','photo_18.jpg','photo_19.jpg','photo_20.jpg',
  'photo_22.jpg','photo_23.jpg','photo_24.jpg','photo_25.jpg','photo_26.jpg',
  'photo_27.jpg','photo_30.jpg','photo_101.jpg','photo_221.jpg','photo_22999.jpg',
  '2.jpg','3.jpg','4.jpg','5.jpg','a.jpg','photo_04.1.jpg','photo_06.1.jpg',
];

/* ============================================================
   SPA SECTION SYSTEM
   ============================================================ */
function showSection(id) {
  document.querySelectorAll('.spa-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('sec-' + id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('nav-active');
    if (a.getAttribute('onclick') && a.getAttribute('onclick').includes(`'${id}'`)) {
      a.classList.add('nav-active');
    }
  });
  const nl = document.getElementById('navLinks');
  if (nl) {
    nl.classList.remove('open');
    document.querySelectorAll('.nav-toggle span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function contactAbout(subject) {
  const el = document.getElementById('cInterest');
  if (el) {
    for (let i = 0; i < el.options.length; i++) {
      if (el.options[i].value === subject || el.options[i].text === subject) {
        el.selectedIndex = i;
        break;
      }
    }
  }
  showSection('contact');
}
window.contactAbout = contactAbout;

/* ============================================================
   WHATSAPP & FACEBOOK MESSAGING
   ============================================================ */
function buildContactMessage() {
  const name     = (document.getElementById('cName')?.value     || '').trim();
  const phone    = (document.getElementById('cPhone')?.value    || '').trim();
  const interest = (document.getElementById('cInterest')?.value || '').trim();
  const msg      = (document.getElementById('cMsg')?.value      || '').trim();

  if (!name || !phone) { alert('অনুগ্রহ করে আপনার নাম ও ফোন নম্বর দিন।'); return null; }

  let text = `হ্যালো আমার বাগান! নাঈম এগ্রো,  🌱\n\nনাম: ${name}\nফোন: ${phone}`;
  if (interest) text += `\nআগ্রহ: ${interest}`;
  if (msg)      text += `\nবার্তা: ${msg}`;
  text += '\n\n(ওয়েবসাইট থেকে পাঠানো হয়েছে)';
  return text;
}

function sendViaWhatsApp() {
  const text = buildContactMessage();
  if (!text) return;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function sendViaFacebook() {
  const text = buildContactMessage();
  if (!text) return;
  const url = `https://m.me/${FB_PAGE}?ref=${encodeURIComponent('website_contact')}`;
  window.open(url, '_blank');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('বার্তা কপি হয়েছে!\nখোলা Messenger চ্যাটে পেস্ট করুন।');
    }).catch(() => {});
  }
}

/* Product order via WhatsApp */
function orderViaWA(productName, price) {
  const text = `হ্যালো আমার বাগান! নাঈম এগ্রো,  🌿\n\nঅর্ডার করতে চাই:\n*${productName}*\nমূল্য: ৳${price.toLocaleString()}\n\nপণ্যের প্রাপ্যতা ও ডেলিভারি সম্পর্কে জানাবেন।\n\n(ওয়েবসাইট থেকে)`;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

/* Product order via Messenger */
function orderViaFB(productName, price) {
  const text = `হ্যালো আমার বাগান! নাঈম এগ্রো,  🌿\nপণ্য: ${productName} — ৳${price.toLocaleString()}\nপণ্যের প্রাপ্যতা নিশ্চিত করুন।`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('অর্ডার বার্তা কপি হয়েছে!\nMessenger চ্যাটে পেস্ট করুন।');
    }).catch(() => {});
  }
  window.open(`https://m.me/${FB_PAGE}`, '_blank');
}

window.sendViaWhatsApp = sendViaWhatsApp;
window.sendViaFacebook = sendViaFacebook;
window.orderViaWA = orderViaWA;
window.orderViaFB = orderViaFB;

/* ============================================================
   BUILD CARE GUIDE CARDS (was buildTraining)
   ============================================================ */
function buildCareGuide() {
  const grid = document.getElementById('trainingGrid');
  if (!grid) return;
  careGuides.forEach(p => {
    const card = document.createElement('div');
    card.className = 'training-card' + (p.featured ? ' featured' : '');
    card.innerHTML = `
      ${p.featured ? '<div class="training-badge">সবচেয়ে জনপ্রিয়</div>' : ''}
      <span class="training-num">${p.num}</span>
      <h3>${p.title}</h3>
      <div class="training-classes">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        ${p.tip}
      </div>
      <div class="training-fees">
        <div class="fee-regular"><span>আলো</span><strong>${p.regular}</strong></div>
        <div class="fee-special"><span>সেচ / পানি</span><strong>${p.special}</strong></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ============================================================
   BUILD SHOP
   ============================================================ */
let activeCategory = 'সব';

function getCategories() {
  const cats = ['সব', ...new Set(products.map(p => p.cat))];
  return cats;
}

function buildShopFilters() {
  const filterDiv = document.getElementById('shopFilter');
  if (!filterDiv) return;
  getCategories().forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'shop-filter-btn' + (cat === 'সব' ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      document.querySelectorAll('.shop-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
    filterDiv.appendChild(btn);
  });
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = activeCategory === 'সব' ? products : products.filter(p => p.cat === activeCategory);
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    /* Try loading assets/products/{id}.jpg — fall back to emoji if missing */
    const imgHTML = `
      <img src="assets/products/${p.id}.jpg" alt="${p.name}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <span class="product-emoji-fallback" style="display:none">${p.icon}</span>`;
    card.innerHTML = `
      <div class="product-img-wrap">
        ${imgHTML}
        <span class="product-category-tag">${p.cat}</span>
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price">
          ৳ ${p.price.toLocaleString()}
          <small>মূল্য পরিবর্তনশীল — অর্ডারে নিশ্চিত করুন</small>
        </div>
        <div class="product-btns">
          <button class="prod-wa-btn" onclick="orderViaWA('${p.name.replace(/'/g,"\\'")}', ${p.price})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp-এ অর্ডার
          </button>
          <button class="prod-fb-btn" onclick="orderViaFB('${p.name.replace(/'/g,"\\'")}', ${p.price})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 2C6.813 2 3 5.813 3 10.5c0 4.196 2.947 7.698 6.879 8.377V13.75H7.625v-2.5h2.254V9.477c0-2.22 1.322-3.454 3.347-3.454.97 0 1.985.171 1.985.171v2.186h-1.118c-1.101 0-1.444.684-1.444 1.383v1.487h2.458l-.393 2.5h-2.065V18.9C18.053 18.22 21 14.7 21 10.5 21 5.813 17.187 2 11.5 2z"/></svg>
            Messenger-এ অর্ডার
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ============================================================
   BUILD GALLERY
   ============================================================ */
function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  galleryPhotos.forEach((file, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="assets/gallery/${file}" alt="আমার বাগান ছবি ${idx+1}" loading="lazy"
           onerror="this.parentElement.style.display='none'"/>
      <span class="gallery-zoom">⊕</span>
    `;
    item.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(item);
  });
}

/* ── Lightbox ── */
let currentPhoto = 0;
function openLightbox(idx) {
  currentPhoto = idx;
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  const cnt = document.getElementById('lbCounter');
  img.src = `assets/gallery/${galleryPhotos[currentPhoto]}`;
  cnt.textContent = `${currentPhoto + 1} / ${galleryPhotos.length}`;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
function shiftPhoto(dir) {
  currentPhoto = (currentPhoto + dir + galleryPhotos.length) % galleryPhotos.length;
  document.getElementById('lbImg').src = `assets/gallery/${galleryPhotos[currentPhoto]}`;
  document.getElementById('lbCounter').textContent = `${currentPhoto + 1} / ${galleryPhotos.length}`;
}
document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
document.getElementById('lbPrev')?.addEventListener('click', () => shiftPhoto(-1));
document.getElementById('lbNext')?.addEventListener('click', () => shiftPhoto(1));
document.getElementById('lightbox')?.addEventListener('click', e => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox')?.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') shiftPhoto(-1);
  if (e.key === 'ArrowRight') shiftPhoto(1);
});

/* ── NAVBAR ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    const isOpen = navLinks.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity   = isOpen ? '0' : '';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
}

/* ── SCROLL ── */
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) document.getElementById('navbar')?.classList.add('scrolled');
  else document.getElementById('navbar')?.classList.remove('scrolled');
  const btn = document.getElementById('backToTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  buildCareGuide();
  buildShopFilters();
  renderProducts();
  buildGallery();
  showSection('home');
});
