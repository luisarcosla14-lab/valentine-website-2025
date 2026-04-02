// ============================================
// 💝 CUSTOMIZE YOUR WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Liebe Amalia",
    pageTitle: "Für dich 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            title: "Liebe Amalia",
            text: "Hat dir unser Treffen gefallen?",
            yesBtn: "Ja",
            noBtn: "Nein",
            secretAnswer: "hier weiter"
        },
        second: {
            title: "Liebe Amalia",
            text: "Wie sehr liebst du Sushi? hahah",
            startText: "So sehr!",
            nextBtn: "Weiter ❤️"
        },
        third: {
            title: "Liebe Amalia",
            text: "Hast du Lust, mit ins Kino zu gehen?",
            yesBtn: "Ja",
            noBtn: "Nein",
            finalImage: "DEINE_BILD_URL_HIER"
        }
    },

    loveMessages: {
        extreme: "WOOOOW 🥰🚀💝",
        high: "Ganz ganz viel! 🚀💝",
        normal: "Und noch mehr! 🥰"
    },

    celebration: {
        yesTitle: "Danke für deine Zeit",
        noTitle: "Danke für deine Zeit",
        message: "",
        emojis: "💖💕❤️"
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
        volume: 0.75
    }
};

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

document.addEventListener("DOMContentLoaded", () => {
    initMusic();

    // Falls dein bestehendes Projekt diese Elemente schon hat,
    // werden die Texte direkt angepasst:
    const q1Title = document.querySelector("#question1-title, .question1-title, .title");
    const q1Text = document.querySelector("#question1-text, .question1-text");
    const q1Yes = document.querySelector("#question1-yes, .question1-yes, .yes-btn");
    const q1No = document.querySelector("#question1-no, .question1-no, .no-btn");
    const q1Secret = document.querySelector("#secret-answer, .secret-answer");

    if (q1Title) q1Title.textContent = CONFIG.questions.first.title;
    if (q1Text) q1Text.textContent = CONFIG.questions.first.text;
    if (q1Yes) q1Yes.textContent = CONFIG.questions.first.yesBtn;
    if (q1No) q1No.textContent = CONFIG.questions.first.noBtn;
    if (q1Secret) q1Secret.textContent = CONFIG.questions.first.secretAnswer;

    const q2Title = document.querySelector("#question2-title, .question2-title");
    const q2Text = document.querySelector("#question2-text, .question2-text");
    if (q2Title) q2Title.textContent = CONFIG.questions.second.title;
    if (q2Text) q2Text.textContent = CONFIG.questions.second.text;

    const q3Title = document.querySelector("#question3-title, .question3-title");
    const q3Text = document.querySelector("#question3-text, .question3-text");
    const q3Yes = document.querySelector("#question3-yes, .question3-yes");
    const q3No = document.querySelector("#question3-no, .question3-no");

    if (q3Title) q3Title.textContent = CONFIG.questions.third.title;
    if (q3Text) q3Text.textContent = CONFIG.questions.third.text;
    if (q3Yes) q3Yes.textContent = CONFIG.questions.third.yesBtn;
    if (q3No) q3No.textContent = CONFIG.questions.third.noBtn;

    // Kleines Bild im dritten Textfeld einfügen
    const q3Container = document.querySelector("#question3-card, .question3-card, #question3, .question3");
    if (q3Container && CONFIG.questions.third.finalImage !== "https://share.google/Y3iuLJkd2WZCpSLV2") {
        const img = document.createElement("img");
        img.src = CONFIG.questions.third.finalImage;
        img.alt = "Kino";
        img.style.maxWidth = "120px";
        img.style.maxHeight = "120px";
        img.style.display = "block";
        img.style.margin = "0 auto 10px auto";
        img.style.borderRadius = "12px";
        img.style.objectFit = "cover";

        if (!q3Container.querySelector("img")) {
            q3Container.prepend(img);
        }
    }

    // Antwort im letzten Feld abfangen
    const finalYesBtn = document.querySelector("#question3-yes, .question3-yes");
    const finalNoBtn = document.querySelector("#question3-no, .question3-no");
    const finalBox = document.querySelector("#final-message, .final-message, #question3-card, .question3-card, #question3, .question3");

    function showFinalThankYou() {
        if (!finalBox) return;
        finalBox.innerHTML = `
            <div style="text-align:center; padding:20px;">
                <h2 style="margin-bottom:10px;">Danke für deine Zeit</h2>
            </div>
        `;
    }

    if (finalYesBtn) {
        finalYesBtn.addEventListener("click", showFinalThankYou);
    }

    if (finalNoBtn) {
        finalNoBtn.addEventListener("click", showFinalThankYou);
    }
});


