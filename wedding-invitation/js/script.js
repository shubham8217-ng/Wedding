(() => {
  const C = window.WEDDING, $ = id => document.getElementById(id);
  const when = new Date(C.dateTime);

  // Fill content from config
  document.title = `${C.bride} & ${C.groom} | Wedding Invitation`;
  $("monogram").textContent = `${C.bride[0]} & ${C.groom[0]}`;
  $("tagline").textContent = C.tagline;
  $("bride").textContent = C.bride;
  $("groom").textContent = C.groom;
  $("dateLabel").textContent = C.dateLabel;
  $("venueShort").textContent = C.venueShort || C.venueName;
  $("venueFull").textContent = `${C.venueName}, ${C.venueAddress}`;
  $("mapFrame").src = C.mapEmbed;
  $("mapBtn").href = C.mapLink;
  $("dress").textContent = `Dress code: ${C.dressCode}`;
  $("rsvpNote").textContent = `Please reply by ${C.rsvpDeadline}.`;
  $("hosts").textContent = `With love, ${C.hosts}`;

  $("timeline").innerHTML = C.events.map(e =>
    `<li class="${e.name === "Wedding" ? "main" : ""}"><h3>${e.name}</h3><p>${e.date}, ${e.time}<br>${e.place}</p></li>`
  ).join("");


  // First-page photo: the frame always shows; a placeholder appears until the file exists
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

  // Our story
  $("story").innerHTML = C.story.map(x => `<article><h3>${x.title}</h3><p>${x.text}</p></article>`).join("");

  // Polaroid collage (static). Slots: left %, top %, width %, rotation, photo shape (width / height)
  const SLOTS = [
    [24, 30, 52, -4, 0.9],  [60, 3, 40, 7, 1.15],  [4, 66, 44, 3, 0.8],  [12, 0, 38, -3, 0.85],
    [52, 68, 46, -4, 1.1],  [0, 22, 34, -7, 1.1], [72, 36, 30, 4, 0.85]
  ];
  $("gallery").innerHTML = C.photos.slice(0, SLOTS.length).map((p, i) => {
    p = typeof p === "string" ? { src: p } : p;
    const [l, t, w, r, ar] = SLOTS[i];
    return `<figure data-name="${p.src}" style="left:${l}%;top:${t}%;width:${w}%;--r:${r}deg;--ar:${ar};z-index:${20 - i}"><div class="ph" data-n="${p.src}"><img src="${p.src}" alt="${C.bride} and ${C.groom}" style="object-position:${p.pos || "50% 25%"}" onerror="this.closest('figure').classList.add('empty');this.remove()"></div></figure>`;
  }).join("");

  // Background music (starts when the doors open; browsers only allow sound after a tap)
  const bgm = $("bgm"), mBtn = $("musicBtn");
  let musicOn = false;
  if (C.music) {
    bgm.src = C.music; bgm.volume = 0.6;
    bgm.addEventListener("error", () => { mBtn.hidden = true; });
  }
  const setMusic = on => {
    musicOn = on; mBtn.classList.toggle("off", !on); mBtn.setAttribute("aria-pressed", String(on));
    if (on) bgm.play().catch(() => setMusic(false)); else bgm.pause();
  };
  const startMusic = () => { if (C.music) { mBtn.hidden = false; setMusic(true); } };
  mBtn.addEventListener("click", () => setMusic(!musicOn));

  // Open the doors
  $("openBtn").addEventListener("click", () => {
    $("gate").classList.add("open");
    startMusic();
    document.body.classList.remove("locked");
    setTimeout(() => $("gate").classList.add("gone"), 1500);
  });

  // Countdown
  const tick = () => {
    let s = Math.max(0, Math.floor((when - Date.now()) / 1000));
    const d = Math.floor(s / 86400); s %= 86400;
    const h = Math.floor(s / 3600); s %= 3600;
    $("cd-d").textContent = d; $("cd-h").textContent = h;
    $("cd-m").textContent = Math.floor(s / 60); $("cd-s").textContent = s % 60;
  };
  tick(); setInterval(tick, 1000);

  // Add to calendar (.ics download)
  $("calBtn").addEventListener("click", () => {
    const f = d => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const end = new Date(when.getTime() + 4 * 3600e3);
    const ics = ["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT",
      `DTSTART:${f(when)}`,`DTEND:${f(end)}`,
      `SUMMARY:Wedding of ${C.bride} & ${C.groom}`,
      `LOCATION:${C.venueName}, ${C.venueAddress}`,"END:VEVENT","END:VCALENDAR"].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = "wedding.ics"; a.click();
  });

  // RSVP via WhatsApp (works on static hosting, no backend)
  $("rsvpForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const text = `Hi! RSVP for ${C.bride} & ${C.groom}'s wedding.\nName: ${f.get("name")}\nGuests: ${f.get("guests")}\nResponse: ${f.get("attend")}` +
      (f.get("msg") ? `\nMessage: ${f.get("msg")}` : "");
    window.open(`https://wa.me/${C.rsvpWhatsApp}?text=${encodeURIComponent(text)}`, "_blank");
  });

  // Share
  $("shareBtn").addEventListener("click", async () => {
    const data = { title: document.title, text: `You're invited to ${C.bride} & ${C.groom}'s wedding`, url: location.href };
    if (navigator.share) { try { await navigator.share(data); } catch {} }
    else { await navigator.clipboard.writeText(location.href); $("shareBtn").textContent = "Link copied"; }
  });
})();
