// ✏️ EDIT EVERYTHING HERE — no need to touch HTML for basic details.
// Items marked (EDIT) are placeholders: replace them with your real details.
window.WEDDING = {
  bride: "Nilam",
  groom: "Shubham",
  tagline: "Together with their families, invite you to celebrate their wedding",
  dateTime: "2026-12-02T19:00:00",            // (EDIT time) main ceremony, local time
  dateLabel: "Wednesday, 2 December 2026",
  venueShort: "Alhadiya, Jaunpur, Uttar Pradesh",
  venueName: "Village - Alhadiya",
  venueAddress: "Post Office - Teji Bazar\nDistrict - Jaunpur, Uttar Pradesh\nPIN Code - 222141",
  mapLink: "https://maps.google.com/?q=Alhadia,+Uttar+Pradesh+222141",
  mapEmbed: "https://www.google.com/maps?q=Alhadia,+Uttar+Pradesh+222141&output=embed",
  events: [   // (EDIT) times. theme = peach | yellow | mint | maroon
    { name: "Tilak", nameHi: "तिलक", icon: "🙏", iso: "2026-11-30T11:00:00", theme: "peach",
      place: "Gondalpur, Jaunpur", placeHi: "गोंदलपुर, जौनपुर",
      address: "Village: Gondalpur, Block: Maharajganj\nTehsil: Badlapur, District: Jaunpur\nUttar Pradesh — 222145",
      addressHi: "ग्राम: गोंदलपुर, ब्लॉक: महाराजगंज\nतहसील: बदलापुर, जनपद: जौनपुर\nउत्तर प्रदेश — 222145",
      mapQ: "Gondalpur, Maharajganj, Badlapur, Jaunpur, Uttar Pradesh 222145" },
    { name: "Haldi", nameHi: "हल्दी", icon: "🌼", iso: "2026-12-01T11:00:00", theme: "yellow",
      place: "Gondalpur, Jaunpur", placeHi: "गोंदलपुर, जौनपुर",
      address: "Village: Gondalpur, Block: Maharajganj\nTehsil: Badlapur, District: Jaunpur\nUttar Pradesh — 222145",
      addressHi: "ग्राम: गोंदलपुर, ब्लॉक: महाराजगंज\nतहसील: बदलापुर, जनपद: जौनपुर\nउत्तर प्रदेश — 222145",
      mapQ: "Gondalpur, Maharajganj, Badlapur, Jaunpur, Uttar Pradesh 222145" },
    { name: "Mehndi", nameHi: "मेहंदी", icon: "🌿", iso: "2026-12-01T16:00:00", theme: "mint",
      place: "Gondalpur, Jaunpur", placeHi: "गोंदलपुर, जौनपुर",
      address: "Village: Gondalpur, Block: Maharajganj\nTehsil: Badlapur, District: Jaunpur\nUttar Pradesh — 222145",
      addressHi: "ग्राम: गोंदलपुर, ब्लॉक: महाराजगंज\nतहसील: बदलापुर, जनपद: जौनपुर\nउत्तर प्रदेश — 222145",
      mapQ: "Gondalpur, Maharajganj, Badlapur, Jaunpur, Uttar Pradesh 222145" },
    { name: "Wedding", nameHi: "विवाह", icon: "🪔", iso: "2026-12-02T19:00:00", theme: "maroon",
      place: "Alhadiya, Jaunpur", placeHi: "अल्हदिया, जौनपुर",
      address: "Village - Alhadiya\nPost Office - Teji Bazar\nDistrict - Jaunpur, Uttar Pradesh\nPIN Code - 222141",
      addressHi: "ग्राम - अल्हदिया\nडाकघर - तेजी बाज़ार\nजनपद - जौनपुर, उत्तर प्रदेश\nपिन कोड - 222141",
      mapQ: "Alhadia, Uttar Pradesh 222141" }
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
    bride: "निलाम", groom: "शुभम",
    tagline: "दोनों परिवार आपको सादर आमंत्रित करते हैं, इनके विवाह उत्सव में पधारें",
    dateLabel: "बुधवार, 2 दिसंबर 2026",
    venueShort: "अल्हदिया, जौनपुर, उत्तर प्रदेश", venueName: "ग्राम - अल्हदिया",
    venueAddress: "डाकघर - तेजी बाज़ार\nजनपद - जौनपुर, उत्तर प्रदेश\nपिन कोड - 222141",
    dressCode: "भारतीय पारंपरिक परिधान। गहरे रंग और सुनहरी आभा।",
    hosts: "निलाम और शुभम के परिवारजन",
    story: [
      { title: "हम कैसे मिले",     text: "यहाँ कुछ पंक्तियाँ लिखें कि आपकी कहानी कहाँ और कैसे शुरू हुई।" },
      { title: "वह खास पल",       text: "उस पल के बारे में लिखें जब आप दोनों को पता चल गया।" },
      { title: "नई शुरुआत",       text: "दो परिवार, एक उत्सव। आपके साथ यह खुशी बाँटने का इंतज़ार है।" }
    ]
  },

  // Photo on the first page, inside the arch above the names (round frame). Remove the line to hide it.
  heroPhoto: { src: "images/hero.jpeg", pos: "50% 20%" },

  // Photo collage: up to 8 cards, placed in this order (file names must match exactly).
  //   1 = big centre   2 = top-right (landscape)   3 = bottom-left (tall)   4 = top-left (tall)
  //   5 = bottom-right (landscape)   6 = middle-left   7 = middle-right   8 = bottom centre
  // A card can be a photo { src, pos } or a blessing { blessing: {...} } (tap it to read the full message).
  // pos = part of a photo to keep ("x y", 0% = left/top, 100% = right/bottom).
  // theme for blessings = god | father | mother | wish.  (EDIT) the messages below are placeholders.
  photos: [
    { src: "images/photo5.jpeg", pos: "50% 0%" },
    { src: "images/photo1.jpeg", pos: "50% 30%" },
    { blessing: { theme: "god", title: "Blessing from God", titleHi: "ईश्वर का आशीर्वाद",
        text: "May the Almighty shower His grace on your journey together, filling every day with love, peace and joy.",
        textHi: "ईश्वर की कृपा आप दोनों के जीवन में प्रेम, शांति और खुशियाँ भर दे।" } },
    { src: "images/photo3.jpeg" },
    { src: "images/photo4.jpeg" },
    { blessing: { theme: "father", title: "Father's blessing", titleHi: "पिताजी का आशीर्वाद",
        text: "Walk hand in hand, my children. May your home always be full of respect, laughter and strength.",
        textHi: "हाथ थामकर साथ चलो, बच्चो। तुम्हारा घर सदा सम्मान, हँसी और शक्ति से भरा रहे।" } },
    { blessing: { theme: "mother", title: "Mother's blessing", titleHi: "माँ का आशीर्वाद",
        text: "My darlings, may your love grow deeper with every year. You will always be in my prayers.",
        textHi: "मेरे बच्चो, तुम्हारा प्रेम हर साल और गहरा हो। तुम सदा मेरी दुआओं में रहोगे।" } },
    { blessing: { theme: "wish", title: "Well-wishers", titleHi: "शुभचिंतकों की शुभकामनाएँ",
        text: "With love from all our family and friends: may your life together be beautiful and your joy unending.",
        textHi: "परिवार और मित्रों की ओर से प्रेम सहित: आपका जीवन सुंदर और खुशियाँ अनंत हों।" } }
  ],
  // Background music: put an mp3 in the audio/ folder and keep the name below (or change it).
  // It starts when guests click the button on the opening screen. Remove the line to have no music.
  music: "audio/music.mp3",

  dressCode: "Festive Indian attire. Think jewel tones and gold.",
  hosts: "The families of Nilam and Shubham"
};
