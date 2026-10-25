// ✏️ EDIT EVERYTHING HERE — no need to touch HTML for basic details.
// Items marked (EDIT) are placeholders: replace them with your real details.
window.WEDDING = {
  bride: "Nilam",
  groom: "Shubham",
  tagline: "Together with their families, invite you to celebrate their wedding",
  dateTime: "2026-12-02T19:00:00",            // (EDIT time) main ceremony, local time
  dateLabel: "Wednesday, 2 December 2026",
  venueShort: "Jaunpur, Uttar Pradesh",
  venueName: "Jaunpur",                        // (EDIT) add exact hall / house name
  venueAddress: "Uttar Pradesh, India",        // (EDIT) add full address
  mapLink: "https://maps.google.com/?q=Jaunpur+Uttar+Pradesh",
  mapEmbed: "https://www.google.com/maps?q=Jaunpur+Uttar+Pradesh&output=embed",
  events: [   // (EDIT) times and places. theme = peach | yellow | mint | maroon
    { name: "Tilak",   nameHi: "तिलक",  icon: "🙏", iso: "2026-11-30T11:00:00", theme: "peach",  place: "Jaunpur", placeHi: "जौनपुर" },
    { name: "Haldi",   nameHi: "हल्दी",  icon: "🌼", iso: "2026-12-01T11:00:00", theme: "yellow", place: "Jaunpur", placeHi: "जौनपुर" },
    { name: "Mehndi",  nameHi: "मेहंदी", icon: "🌿", iso: "2026-12-01T16:00:00", theme: "mint",   place: "Jaunpur", placeHi: "जौनपुर" },
    { name: "Wedding", nameHi: "विवाह",  icon: "🪔", iso: "2026-12-02T19:00:00", theme: "maroon", place: "Jaunpur", placeHi: "जौनपुर" }
  ],
  story: [                                      // (EDIT) write your own story
    { title: "How we met",      text: "Write a few lines about where and how your story began." },
    { title: "The proposal",    text: "Write about the moment you both knew." },
    { title: "Forever begins",  text: "Two families, one celebration. We can't wait to share it with you." }
  ],
  // Ganesh ji picture for the opening seal. Put a square-ish image here; until then the seal shows ॐ.
  ganeshImage: "images/ganesh.png",
  // Krishna ji picture for the second opening seal (symbol shown until the image exists).
  krishnaImage: "images/krishna.png",

  // Hindi version of the text above (shown when the guest taps the language button)
  hi: {
    bride: "नीलम", groom: "शुभम",
    tagline: "दोनों परिवार आपको सादर आमंत्रित करते हैं, इनके विवाह उत्सव में पधारें",
    dateLabel: "बुधवार, 2 दिसंबर 2026",
    venueShort: "जौनपुर, उत्तर प्रदेश", venueName: "जौनपुर", venueAddress: "उत्तर प्रदेश, भारत",
    dressCode: "भारतीय पारंपरिक परिधान। गहरे रंग और सुनहरी आभा।",
    rsvpDeadline: "15 नवंबर 2026", hosts: "नीलम और शुभम के परिवारजन",
    story: [
      { title: "हम कैसे मिले",     text: "यहाँ कुछ पंक्तियाँ लिखें कि आपकी कहानी कहाँ और कैसे शुरू हुई।" },
      { title: "वह खास पल",       text: "उस पल के बारे में लिखें जब आप दोनों को पता चल गया।" },
      { title: "नई शुरुआत",       text: "दो परिवार, एक उत्सव। आपके साथ यह खुशी बाँटने का इंतज़ार है।" }
    ]
  },

  // Photo on the first page, inside the arch above the names (round frame). Remove the line to hide it.
  heroPhoto: { src: "images/hero.jpg", pos: "50% 20%" },

  // Polaroid collage: up to 7 photos, placed in this order (file names must match exactly).
  //   1 = big centre, slightly tall   2 = top-right, landscape      3 = bottom-left, tall
  //   4 = top-left, tall              5 = bottom-right, landscape   6 = middle-left, landscape
  //   7 = middle-right, tall
  // Photos are cropped to fit their frame. pos = part to keep ("x y", 0% = left/top, 100% = right/bottom).
  photos: [
    { src: "images/photo5.jpeg", pos: "50% 0%" },
    { src: "images/photo1.jpeg", pos: "50% 30%" },
    { src: "images/photo2.jpeg" },
    { src: "images/photo3.jpeg" },
    { src: "images/photo4.jpeg" },
    { src: "images/photo6.jpeg" },
    { src: "images/photo7.jpeg" }
  ],
  // Background music: put an mp3 in the audio/ folder and keep the name below (or change it).
  // It starts when guests tap "Tap to open". Remove the line to have no music.
  music: "audio/music.mp3",

  dressCode: "Festive Indian attire. Think jewel tones and gold.",
  rsvpWhatsApp: "919999999999",   // (EDIT) country code + number, no + or spaces
  rsvpDeadline: "15 November 2026",
  hosts: "The families of Nilam and Shubham"
};
