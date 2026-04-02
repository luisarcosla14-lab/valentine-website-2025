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
            text: "Hast du Lust, mit ins Kino zu gehen?",
            yesBtn: "Ja",
            noBtn: "Nein",
            cinemaImageUrl: "DEINE_BILD_URL_HIER"
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
        firstMusicUrl: "https://res.cloudinary.com/dnqvn4zfq/video/upload/v1774898015/T%C3%BA_Con_%C3%89l_ri7uta.mp3",
        secondMusicUrl: "https://res.cloudinary.com/dnqvn4zfq/video/upload/v1774898013/Romeo_Santos_Prince_Royce_-_Dardos_Lyric_Video_huxbef.mp3",
        volume: 0.75
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;

// ============================================
// 🎵 BACKGROUND MUSIC
// ============================================

let bgMusic = null;
let secondMusic = null;
let musicStarted = false;

function initMusic() {
    const music = window.VALENTINE_CONFIG.music;

    if (!music || !music.enabled) return;

    bgMusic = new Audio(music.firstMusicUrl);
    secondMusic = new Audio(music.secondMusicUrl);

    bgMusic.loop = false;
    secondMusic.loop = false;

    bgMusic.volume = music.volume;
    secondMusic.volume = music.volume;

    bgMusic.preload = "auto";
    secondMusic.preload = "auto";

    // Song 1 -> Song 2
    bgMusic.addEventListener("ended", () => {
        secondMusic.currentTime = 0;
        secondMusic.play().catch(err => console.log("Song 2 konnte nicht starten:", err));
    });

    // Song 2 -> Song 1
    secondMusic.addEventListener("ended", () => {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(err => console.log("Song 1 konnte nicht starten:", err));
    });

    // Start nach erstem Klick
    if (music.autoplay) {
        const startOnClick = () => {
            if (musicStarted) return;

            bgMusic.currentTime = 0;
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
// 🖼️ KLEINES BILD BEI DER DRITTEN FRAGE
// ============================================

function insertCinemaImage() {
    const imageUrl = window.VALENTINE_CONFIG.questions.third.cinemaImageUrl;

    if (!imageUrl || imageUrl === "https://share.google/i0Q3WwLvQGAZOEx8h") return;

    // Versuche die dritte Frage zu finden
    const thirdQuestionTextCandidates = Array.from(document.querySelectorAll("h1, h2, h3, p, div, span"));

    const thirdQuestionElement = thirdQuestionTextCandidates.find(el =>
        el.textContent &&
        el.textContent.includes("Hast du Lust, mit ins Kino zu gehen?")
    );

    if (!thirdQuestionElement) return;

    const parent = thirdQuestionElement.parentElement;
    if (!parent) return;

    // Nicht doppelt einfügen
    if (parent.querySelector(".cinema-small-image")) return;

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Kino Bild";
    img.className = "cinema-small-image";
    img.style.width = "90px";
    img.style.height = "90px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "12px";
    img.style.display = "block";
    img.style.margin = "0 auto 10px auto";

    parent.insertBefore(img, thirdQuestionElement);
}

// ============================================
// 📝 "my love" entfernen
// ============================================

function replaceMyLoveText() {
    const elements = document.querySelectorAll("h1, h2, h3, p, div, span, button");

    elements.forEach(el => {
        if (!el.textContent) return;

        if (el.textContent.includes("Jade, My Love") || el.textContent.includes("Jade, my love")) {
            el.textContent = "Liebe Amalia";
        }

        if (el.textContent.includes("My Love") || el.textContent.includes("my love")) {
            el.textContent = el.textContent
                .replace(/Jade,\s*My Love/gi, "Liebe Amalia")
                .replace(/Jade,\s*my love/gi, "Liebe Amalia")
                .replace(/My Love/gi, "")
                .replace(/my love/gi, "")
                .trim();
        }
    });
}

// ============================================
// 🚀 START
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    initMusic();
    replaceMyLoveText();

    // Mehrfach versuchen, falls die Inhalte dynamisch geladen werden
    setTimeout(replaceMyLoveText, 500);
    setTimeout(replaceMyLoveText, 1500);

    setTimeout(insertCinemaImage, 500);
    setTimeout(insertCinemaImage, 1500);
});

