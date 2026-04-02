// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Liebe Amalia",
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
            yesBtn: "Ja",
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

// ============================================
// ✨ EXTRA: TEXT FIX + BILD
// ============================================

function removeMyLove() {
    const elements = document.querySelectorAll("h1, h2, h3, p, div, span, button");

    elements.forEach(el => {
        if (!el.textContent) return;

        if (el.textContent.toLowerCase().includes("my love")) {
            el.textContent = el.textContent
                .replace(/my love/gi, "")
                .replace(/,\s*,/g, ",")
                .trim();
        }
    });
}

function insertCinemaImage() {
    const allElements = Array.from(document.querySelectorAll("h1, h2, h3, p, div, span"));

    const kinoText = allElements.find(el =>
        el.textContent && el.textContent.includes("Hast du Lust, mit ins Kino zu gehen")
    );

    if (!kinoText) return;

    const parent = kinoText.parentElement;
    if (!parent || parent.querySelector(".kino-img")) return;

    const img = document.createElement("img");

    // 👉 HIER DEIN BILD EINSETZEN
    img.src = "https://share.google/M96RRs3q6s3s2Cuij";

    img.className = "kino-img";
    img.style.width = "80px";
    img.style.height = "80px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.display = "block";
    img.style.margin = "10px auto";

    parent.insertBefore(img, kinoText);
}

// ============================================
// 🚀 START
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    initMusic();

    setTimeout(removeMyLove, 500);
    setTimeout(removeMyLove, 1500);

    setTimeout(insertCinemaImage, 500);
    setTimeout(insertCinemaImage, 1500);
});

