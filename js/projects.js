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
      facebook: ""
    }
  },

  {
    id: "my-released-game",            // TODO: change (lowercase, dashes, no spaces)
    kind: "game",
    status: "released",
    name: "My Released Game",          // TODO: real name
    tagline: "One short line about the game.",
    when: "Out now on iPad",
    platforms: ["iPad"],
    color: "#7a3fd1",
    icon: "assets/projects/my-released-game/icon.png",
    screenshots: [],
    video: "",
    about: [
      "A few sentences about what the game is and why it's fun."
    ],
    features: [
      "Feature one",
      "Feature two"
    ],
    links: {
      appStore: "https://apps.apple.com/",   // TODO: paste the real App Store link
      facebook: ""
    }
  }

  // Apps go here too — just use kind: "app"
];

/* Studio details used across the site */
window.STUDIO = {
  name: "Meakam Studio",
  email: "hello@meakamstudio.com",   // TODO: change to an email you actually check
  facebook: "",                        // optional
  developerName: "Mike Young"          // the name shown on the App Store
};
