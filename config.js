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
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.75
    }
};

// Don't modify anything below this line unless you know what you're doing
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
        const startOnFirstClick = () => {
            if (musicStarted) return;

            bgMusic.play()
                .then(() => {
                    musicStarted = true;
                    console.log("Background music started");
                })
                .catch((err) => {
                    console.log("Music could not start automatically:", err);
                });

            document.removeEventListener("click", startOnFirstClick);
        };

        document.addEventListener("click", startOnFirstClick);
    }

    // Optional music toggle button
    const musicButton = document.createElement("button");
    musicButton.innerText = music.startText;
    musicButton.style.position = "fixed";
    musicButton.style.bottom = "20px";
    musicButton.style.right = "20px";
    musicButton.style.padding = "10px 15px";
    musicButton.style.border = "none";
    musicButton.style.borderRadius = "12px";
    musicButton.style.background = CONFIG.colors.buttonBackground;
    musicButton.style.color = "white";
    musicButton.style.cursor = "pointer";
    musicButton.style.zIndex = "9999";
    musicButton.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

    musicButton.addEventListener("click", () => {
        if (!bgMusic) return;

        if (bgMusic.paused) {
            bgMusic.play()
                .then(() => {
                    musicStarted = true;
                    musicButton.innerText = music.stopText;
                })
                .catch((err) => {
                    console.log("Play failed:", err);
                });
        } else {
            bgMusic.pause();
            musicButton.innerText = music.startText;
        }
    });

    document.body.appendChild(musicButton);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMusic);
} else {
    initMusic();
}


