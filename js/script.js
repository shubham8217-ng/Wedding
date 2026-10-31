(() => {
  const C = window.WEDDING, $ = id => document.getElementById(id), when = new Date(C.dateTime);
  let lang = "en"; try { lang = localStorage.getItem("lang") || "en"; } catch {}

  const UI = {
    en: { nDate:"Date", nStory:"Story", nEvents:"Events", nPhotos:"Photos", nVenue:"Venue", nRsvp:"RSVP", lang:"हिंदी",
      tap:"Click here to view invitation", cdTitle:"Counting down to the wedding", d:"days", h:"hours", m:"minutes", s:"seconds", cal:"Add to calendar", bNote:"Tap a blessing card to read it", pSub:"More photos will be added with time, by God's grace and the blessings of our parents and well-wishers.", map:"View map",
      hStory:"Our story", hEvents:"The celebrations", hPhotos:"Moments together", hVenue:"Venue", dir:"Get directions",
      hRsvp:"Will you join us?", lName:"Your name", lGuests:"Number of guests", lAtt:"Attending?", yes:"Yes, we'll be there",
      no:"Sorry, we can't make it", lMsg:"Message for the couple (optional)", send:"Send RSVP on WhatsApp", share:"Share this invitation",
      dress:"Dress code: ", reply:d => `Please reply by ${d}.`, love:"With love, " },
    hi: { nDate:"तिथि", nStory:"कहानी", nEvents:"कार्यक्रम", nPhotos:"तस्वीरें", nVenue:"स्थान", nRsvp:"उपस्थिति", lang:"English",
      tap:"निमंत्रण देखने के लिए यहाँ क्लिक करें", cdTitle:"विवाह में शेष समय", d:"दिन", h:"घंटे", m:"मिनट", s:"सेकंड", cal:"कैलेंडर में जोड़ें", bNote:"आशीर्वाद पढ़ने के लिए कार्ड छुएँ", pSub:"ईश्वर की कृपा और माता-पिता व शुभचिंतकों के आशीर्वाद से समय के साथ और तस्वीरें जुड़ती रहेंगी।", map:"नक्शा देखें",
      hStory:"हमारी कहानी", hEvents:"उत्सव", hPhotos:"साथ बिताए पल", hVenue:"स्थान", dir:"रास्ता देखें",
      hRsvp:"क्या आप आएँगे?", lName:"आपका नाम", lGuests:"अतिथियों की संख्या", lAtt:"उपस्थित होंगे?", yes:"हाँ, हम आएँगे",
      no:"क्षमा करें, हम नहीं आ पाएँगे", lMsg:"वर-वधू के लिए संदेश (वैकल्पिक)", send:"WhatsApp पर उत्तर भेजें", share:"निमंत्रण साझा करें",
      dress:"पहनावा: ", reply:d => `कृपया ${d} तक उत्तर दें।`, love:"प्रेम सहित, " }
  };
  const MON = {
    en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    hi: ["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्तूबर","नवंबर","दिसंबर"]
  };
  const H = k => (lang === "hi" && C.hi && C.hi[k]) || C[k];
  const pick = (en, hi) => (lang === "hi" && hi) || en;

  // Calendar file (.ics) for one event
  const ics = (title, start, loc) => {
    const f = d => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const body = ["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT",`DTSTART:${f(start)}`,`DTEND:${f(new Date(start.getTime() + 3 * 3600e3))}`,
      `SUMMARY:${title}`,`LOCATION:${loc}`,"END:VEVENT","END:VCALENDAR"].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([body], { type: "text/calendar" }));
    a.download = "event.ics"; a.click();
  };

  // Collage slots: left %, top %, width %, rotation, photo shape (width / height)
  const SLOTS = [
    [24, 23, 52, -4, 0.9], [60, 2.3, 40, 7, 1.15], [4, 51, 44, 3, 0.8], [12, 0, 38, -3, 0.85],
    [52, 52.5, 46, -4, 1.1], [0, 17, 38, -7, 1.05], [66, 27.8, 34, 4, 0.85], [26, 75.5, 48, 2, 1]
  ];
  const gallery = () => {
    $("gallery").innerHTML = C.photos.slice(0, SLOTS.length).map((p, i) => {
      p = typeof p === "string" ? { src: p } : p;
      const [l, t, w, r, ar] = SLOTS[i], st = `left:${l}%;top:${t}%;width:${w}%;--r:${r}deg;--ar:${ar};z-index:${20 - i}`;
      if (p.blessing) {
        const b = p.blessing;
        return `<figure class="bcard ${b.theme}" data-i="${i}" tabindex="0" role="button" style="${st}"><div class="bc"><b>${pick(b.title, b.titleHi)}</b><span>${pick(b.text, b.textHi)}</span></div></figure>`;
      }
      return `<figure data-name="${p.src}" style="${st}"><div class="ph" data-n="${p.src}"><img src="${p.src}" alt="${C.bride} and ${C.groom}" style="object-position:${p.pos || "50% 25%"}" onerror="this.closest('figure').classList.add('empty');this.remove()"></div></figure>`;
    }).join("");
  };

  // All text that changes with language
  const render = () => {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => (el.textContent = UI[lang][el.dataset.i18n]));
    $("langBtn").textContent = UI[lang].lang;
    document.title = `${H("bride")} & ${H("groom")}`;
    $("tagline").textContent = H("tagline");
    $("bride").textContent = H("bride"); $("groom").textContent = H("groom");
    $("dateLabel").textContent = H("dateLabel");
    $("venueShort").textContent = H("venueShort") || H("venueName");
    $("venueFull").textContent = `${H("venueName")}\n${H("venueAddress")}`;
    $("dress").textContent = UI[lang].dress + H("dressCode");
    $("hosts").textContent = UI[lang].love + H("hosts");
    $("story-list").innerHTML = H("story").map(x => `<article><h3>${x.title}</h3><p>${x.text}</p></article>`).join("");
    $("event-list").innerHTML = C.events.map((e, i) => {
      const d = new Date(e.iso);
      const tm = d.toLocaleTimeString(lang === "hi" ? "hi-IN" : "en-IN", { hour: "numeric", minute: "2-digit" });
      return `<article class="acard ${e.theme}"><span class="ic">${e.icon}</span><h3>${pick(e.name, e.nameHi)}</h3>
        <b class="day">${d.getDate()}</b><span class="mon">${MON[lang][d.getMonth()]} ${d.getFullYear()}</span>
        <span class="pill">${tm}</span><p>${pick(e.place, e.placeHi)}</p>
        <p class="addr">${pick(e.address, e.addressHi) || ""}</p>
        <button class="mini" data-i="${i}">${UI[lang].cal}</button>
        <a class="mini" target="_blank" rel="noopener" href="https://maps.google.com/?q=${encodeURIComponent(e.mapQ || e.place)}">${UI[lang].map}</a></article>`;
    }).join("");
    gallery();
  };
  render();
  $("mapFrame").src = C.mapEmbed; $("mapBtn").href = C.mapLink;

  $("langBtn").addEventListener("click", () => {
    lang = lang === "en" ? "hi" : "en";
    try { localStorage.setItem("lang", lang); } catch {}
    render();
  });
  $("event-list").addEventListener("click", e => {
    const b = e.target.closest(".mini"); if (!b) return;
    const ev = C.events[b.dataset.i];
    ics(`${ev.name}: ${C.bride} & ${C.groom}`, new Date(ev.iso), (ev.address || ev.place).replace(/\n/g, ", "));
  });
  // Blessing cards: tap to read the full message
  const modal = $("modal");
  const openB = el => { const b = C.photos[el.dataset.i].blessing; $("mTitle").textContent = pick(b.title, b.titleHi); $("mText").textContent = pick(b.text, b.textHi); modal.hidden = false; };
  $("gallery").addEventListener("click", e => { const el = e.target.closest(".bcard"); if (el) openB(el); });
  $("gallery").addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("bcard")) { e.preventDefault(); openB(e.target); } });
  modal.addEventListener("click", e => { if (e.target === modal || e.target.id === "mClose") modal.hidden = true; });
  document.addEventListener("keydown", e => { if (e.key === "Escape") modal.hidden = true; });

  $("calBtn").addEventListener("click", () => ics(`Wedding of ${C.bride} & ${C.groom}`, when, `${C.venueName}, ${C.venueAddress}`.replace(/\n/g, ", ")));

  // Ganesh ji and Krishna pictures in the opening seals (a symbol shows until the image exists)
  [["ganesh", "om", C.ganeshImage], ["krishna", "fb2", C.krishnaImage]].forEach(([id, fb, src]) => {
    if (!src) return;
    const im = $(id); if (!im) return;
    im.onload = () => { im.hidden = false; $(fb).hidden = true; };
    im.src = src;
  });

  // First-page photo: frame always shows, placeholder until the file exists
  if (C.heroPhoto) {
    const box = $("heroPhoto"), img = new Image();
    box.hidden = false; box.parentNode.classList.add("has-photo");
    box.dataset.name = C.heroPhoto.src;
    img.alt = `${C.bride} and ${C.groom}`;
    img.style.objectPosition = C.heroPhoto.pos || "50% 20%";
    img.onload = () => box.appendChild(img);
    img.onerror = () => box.classList.add("empty");
    img.src = C.heroPhoto.src;
  }

  // Opening video: stays still for people who prefer reduced motion
  const mv = $("medalVid");
  if (mv && matchMedia("(prefers-reduced-motion: reduce)").matches) { mv.removeAttribute("autoplay"); mv.pause(); }

  // Falling petals (skipped for people who prefer reduced motion)
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const box = document.createElement("div"), cols = ["#F6B6C8", "#FFD9E3", "#F2A93B", "#E8789B"];
    box.className = "petals";
    for (let i = 0; i < 16; i++) {
      const p = document.createElement("i"), s = 10 + Math.random() * 12;
      p.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s * 1.3}px;background:${cols[i % 4]};animation-duration:${9 + Math.random() * 9}s;animation-delay:${-Math.random() * 14}s;--dx:${(Math.random() - 0.5) * 160}px`;
      box.appendChild(p);
    }
    document.body.appendChild(box);
  }

  // Background music (starts when the doors open; browsers only allow sound after a tap)
  const bgm = $("bgm"), mBtn = $("musicBtn");
  let musicOn = false;
  if (C.music) { bgm.src = C.music; bgm.volume = 0.6; bgm.addEventListener("error", () => { mBtn.hidden = true; }); }
  const setMusic = on => {
    musicOn = on; mBtn.classList.toggle("off", !on); mBtn.setAttribute("aria-pressed", String(on));
    if (on) bgm.play().catch(() => setMusic(false)); else bgm.pause();
  };
  mBtn.addEventListener("click", () => setMusic(!musicOn));

  // Open the doors
  $("openBtn").addEventListener("click", () => {
    $("gate").classList.add("open");
    $("nav").hidden = false;
    if (C.music) { mBtn.hidden = false; setMusic(true); }
    document.body.classList.remove("locked");
    setTimeout(() => $("gate").classList.add("gone"), 1500);
  });

  // Sections fade up as you scroll
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".block, footer").forEach(el => { el.classList.add("rv"); io.observe(el); });
  }

  // Countdown
  const tick = () => {
    let s = Math.max(0, Math.floor((when - Date.now()) / 1000));
    const d = Math.floor(s / 86400); s %= 86400;
    const h = Math.floor(s / 3600); s %= 3600;
    $("cd-d").textContent = d; $("cd-h").textContent = h;
    $("cd-m").textContent = Math.floor(s / 60); $("cd-s").textContent = s % 60;
  };
  tick(); setInterval(tick, 1000);

  // Share
  $("shareBtn").addEventListener("click", async () => {
    const data = { title: document.title, text: `You're invited to ${C.bride} & ${C.groom}'s wedding`, url: location.href };
    if (navigator.share) { try { await navigator.share(data); } catch {} }
    else { await navigator.clipboard.writeText(location.href); $("shareBtn").textContent = "✓"; }
  });
})();
