// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Liebe Amalia".......
    pageTitle: "Hat dir unser Treffen gefallen? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Hat dir unser Treffen gefallen?",
            yesBtn: "Ja",
            noBtn: "Nein",
            secretAnswer: "Weiter.....! ❤️"
        },
        second: {
            text: "Wie sehr liebst du Suhi ? hahah",
            startText: "So sehr!",
            nextBtn: "Weiter ❤️"
        },
        third: {
            text: "Hast du Lust, mit ins Kino zu gehen? 🌹",
            yesBtn: "Ja!",
            noBtn: "Nein"
        }
    },

    loveMessages: {
        extreme: "WOOOOW Du liebst mich sooo sehr?? 🥰🚀💝",
        high: "Bis zur Unendlichkeit und noch viel weiter! 🚀💝",
        normal: "Und noch mehr! 🥰"
    },

    celebration: {
        title: "Danke für deine Zeit, egal ob du Ja oder Nein gesagt hast! 🎉💝💖💝💓",
        message: "Ich hoffe, es hat dir gefallen. Danke für all die Sachen, die ich dank dir gelernt habe <3",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dnqvn4zfq/video/upload/v1774898015/T%C3%BA_Con_%C3%89l_ri7uta.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.75
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;

// ============================================
// 🎵 BACKGROUND MUSIC
// ============================================

let bgMusic = null;
let musicStarted = false;

function initMusic() {
    const music = window.VALENTINE_CONFIG.music;

    if (!music || !music.enabled) return;

    bgMusic = new Audio(music.musicUrl);
    bgMusic.loop = true;
    bgMusic.volume = music.volume;
    bgMusic.preload = "auto";

    // Start nach dem ersten Klick irgendwo auf der Seite
    if (music.autoplay) {
        const startOnClick = () => {
            if (musicStarted) return;

            bgMusic.play()
                .then(() => {
                    musicStarted = true;
                })
                .catch(err => console.log("Autoplay blockiert:", err));

            document.removeEventListener("click", startOnClick);
        };

        document.addEventListener("click", startOnClick);
    }
}

// Start
document.addEventListener("DOMContentLoaded", initMusic);


