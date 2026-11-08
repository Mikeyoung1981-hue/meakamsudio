/* ============================================================
   MEAKAM STUDIO — ALL YOUR GAMES AND APPS LIVE IN THIS ONE FILE
   ------------------------------------------------------------
   To add a new game or app: copy one { ... } block, paste it
   below the last one, and change the words.

   kind:    "game" or "app"
   status:  "released" or "coming-soon"
   Images:  put them in  assets/projects/<id>/
            icon.png  (square, 512x512 or bigger)
            shot-1.png, shot-2.png ... (screenshots)
   video:   a YouTube link, e.g. "https://youtu.be/abc123" (or "")
   ============================================================ */

window.PROJECTS = [
  {
    id: "short-circuit-diner",
    kind: "game",
    status: "coming-soon",
    name: "Short Circuit Diner",
    tagline: "Wire up a robot diner, one order at a time.",
    when: "Coming soon to iPad",
    platforms: ["iPad"],
    color: "#1f5f5b",
    icon: "assets/projects/short-circuit-diner/icon.png",
    screenshots: [
      // "assets/projects/short-circuit-diner/shot-1.png",
      // "assets/projects/short-circuit-diner/shot-2.png",
    ],
    video: "",
    about: [
      "You just inherited your grandparent's 1950s diner, run by tin robots. The owner is gone, the kitchen is a mess of wires, and the customers are still coming.",
      "Wire electronic parts together to cook up the right numbers for every order. Each station of the diner brings new parts and harder puzzles."
    ],
    features: [
      "Deep, hand-made wiring puzzles across 8 diner stations",
      "Daily Orders from the diner's regulars and a Weekly Special",
      "Earn tips to fix up the diner and unlock new things",
      "An old radio with three stations to play while you build",
      "Game Center leaderboards for every level"
    ],
    links: {
      appStore: "",
      facebook: "https://www.facebook.com/share/1F73ZLoiHU/"
    }
  },

  {
    id: "letter-day",
    kind: "game",
    status: "released",
    name: "Letter Day",
    tagline: "Your daily word search journey.",
    when: "Out now on iPad",
    platforms: ["iPad", "Mac (Apple chip)", "Apple Vision"],
    color: "#4a7cf3",
    icon: "assets/projects/letter-day/icon.png",
    screenshots: [
      "assets/projects/letter-day/shot-1.jpg",
      "assets/projects/letter-day/shot-2.jpg",
      "assets/projects/letter-day/shot-3.jpg",
      "assets/projects/letter-day/shot-4.jpg",
      "assets/projects/letter-day/shot-5.jpg"
    ],
    video: "",
    about: [
      "A calm word search for every day. Each morning brings a new themed puzzle — quick ones on weekdays, bigger ones on the weekend.",
      "Want more? Adventure Mode has over 500 levels across five books, with no timer. Pip the pencil will keep you company."
    ],
    features: [
      "A new themed word search every day",
      "Adventure Mode: 500+ levels in five books, no timer",
      "Full archive of past daily puzzles",
      "Badges, a bookshelf of collected books and a global leaderboard",
      "Pick your own accent colour",
      "No ads, no subscriptions — one small purchase unlocks everything"
    ],
    links: {
      appStore: "https://apps.apple.com/ca/app/letter-day/id6767080426",
      facebook: "https://www.facebook.com/share/1B8CyAYYkN/"
    }
  }

  // Apps go here too — just use kind: "app"
];

/* Studio details used across the site */
window.STUDIO = {
  name: "Meakam Studio",
  email: "support@meakamstudio.com",
  feedbackEmail: "feedback@meakamstudio.com",
  facebook: "",                        // optional
  discord: "https://discord.gg/af3x94nThv",
  developerName: "Mike Young"          // the name shown on the App Store
};
