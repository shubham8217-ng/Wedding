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
  events: [                                     // (EDIT) times and places
    { name: "Tilak",   date: "30 Nov 2026", time: "11:00 AM", place: "Jaunpur" },
    { name: "Haldi",   date: "1 Dec 2026", time: "11:00 AM", place: "Jaunpur" },
    { name: "Mehndi",  date: "1 Dec 2026", time: "4:00 PM",  place: "Jaunpur" },
    { name: "Wedding", date: "2 Dec 2026", time: "7:00 PM",  place: "Jaunpur" }
  ],
  story: [                                      // (EDIT) write your own story
    { title: "How we met",      text: "Write a few lines about where and how your story began." },
    { title: "The proposal",    text: "Write about the moment you both knew." },
    { title: "Forever begins",  text: "Two families, one celebration. We can't wait to share it with you." }
  ],
  // Photo on the first page, inside the arch above the names (round frame). Remove the line to hide it.
  heroPhoto: { src: "images/photo5.jpeg", pos: "50% 20%" },

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
  music: "audio/music.mpeg",

  dressCode: "Festive Indian attire. Think jewel tones and gold.",
  rsvpWhatsApp: "919999999999",   // (EDIT) country code + number, no + or spaces
  rsvpDeadline: "15 November 2026",
  hosts: "The families of Nilam and Shubham"
};
