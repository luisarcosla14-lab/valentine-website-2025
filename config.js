// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Jade",
    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
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

    // Start nach erstem Klick (Browser-Regel)
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

    // 🎵 Button zum Steuern
    const btn = document.createElement("button");
    btn.innerText = music.startText;

    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 15px";
    btn.style.border = "none";
    btn.style.borderRadius = "12px";
    btn.style.background = CONFIG.colors.buttonBackground;
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "9999";

    btn.onclick = () => {
        if (!bgMusic) return;

        if (bgMusic.paused) {
            bgMusic.play();
            btn.innerText = music.stopText;
        } else {
            bgMusic.pause();
            btn.innerText = music.startText;
        }
    };

    document.body.appendChild(btn);
}

// Start
document.addEventListener("DOMContentLoaded", initMusic);


