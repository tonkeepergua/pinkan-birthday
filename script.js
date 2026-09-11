
/* =========================================
   PINKAN BIRTHDAY WEBSITE
   V3 - STAGE A
========================================= */


/* =========================================
   SCENE SYSTEM
========================================= */

const scenes = document.querySelectorAll(".scene");


function showScene(number) {

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    const target = document.getElementById(`scene${number}`);

    if (target) {
        target.classList.add("active");
    }

}


/* =========================================
   AGE QUESTION
========================================= */

const ageButtons = document.querySelectorAll(".age-btn");

const ageMessage = document.getElementById("ageMessage");


ageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedAge = Number(button.dataset.age);

        if (selectedAge === 7) {

            ageMessage.textContent =
                "Benarrr! Pinkan sekarang 7 tahun! 🎉💗";

            ageMessage.className =
                "age-message right";

            // Efek kecil
            button.style.transform =
                "scale(1.15) rotate(-5deg)";

            setTimeout(() => {

                button.style.transform = "";

                showScene(2);

            }, 1000);

        } else {

            ageMessage.textContent =
                "Hehe bukan itu 😆 coba lagi yaa!";

            ageMessage.className =
                "age-message wrong";

        }

    });

});


/* =========================================
   START ADVENTURE
========================================= */

const startAdventure =
    document.getElementById("startAdventure");


startAdventure.addEventListener("click", () => {

    // Untuk sementara kembali ke scene 1.
    // Nanti akan kita ganti menjadi Scene 3
    // ketika balloon game sudah dibuat.

    alert(
        "Petualangan Pinkan akan segera dimulai! 🌸🎈"
    );

});


/* =========================================
   BALLOON GAME
========================================= */

const balloons =
    document.querySelectorAll(".balloon");

const balloonCount =
    document.getElementById("balloonCount");

const balloonMessage =
    document.getElementById("balloonMessage");

const continueAfterBalloons =
    document.getElementById("continueAfterBalloons");

let poppedBalloons = 0;


/* =========================================
   START ADVENTURE
========================================= */

startAdventure.addEventListener("click", () => {

    showScene(3);

});


/* =========================================
   POP BALLOONS
========================================= */

balloons.forEach(balloon => {

    balloon.addEventListener("click", () => {

        if (balloon.classList.contains("popped")) {
            return;
        }

        balloon.classList.add("popped");

        poppedBalloons++;

        balloonCount.textContent =
            poppedBalloons;

        /* Little pop message */

        if (poppedBalloons < 7) {

            const messages = [
                "Poppp! 🎈",
                "Satu lagi! 😆",
                "Pinterrr! 💗",
                "Ayo lanjut! 🎈",
                "Hampir selesai! ✨",
                "Tinggal satuuu! 😍"
            ];

            balloonMessage.textContent =
                messages[poppedBalloons - 1];

        }


        /* =================================
           ALL BALLOONS POPPED
        ================================= */

        if (poppedBalloons === 7) {

            balloonMessage.textContent =
                "Yeayyy! Semua balonnya pecah! 🎉💗";

            continueAfterBalloons.classList.remove(
                "hidden"
            );

            createMiniConfetti();

        }

    });

});


/* =========================================
   CONTINUE
========================================= */

continueAfterBalloons.addEventListener("click", () => {

    showScene(4);

});


/* =========================================
   MINI CONFETTI
========================================= */

function createMiniConfetti() {

    for (let i = 0; i < 25; i++) {

        const confetti =
            document.createElement("div");

        confetti.textContent =
            ["✨", "🌸", "💗", "⭐", "🎉"][
                Math.floor(Math.random() * 5)
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
            (15 + Math.random() * 15) + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        const duration =
            1200 + Math.random() * 1500;

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            confetti.remove();

        }, duration + 100);

    }

}


/* =========================================
   BIRTHDAY WISH
========================================= */

const wishStars =
    document.querySelectorAll(".wish-star");

const wishMessage =
    document.getElementById("wishMessage");

const continueAfterWish =
    document.getElementById("continueAfterWish");

let selectedWish = false;


wishStars.forEach(star => {

    star.addEventListener("click", () => {

        /* Jangan pilih ulang setelah berhasil */

        if (selectedWish) {
            return;
        }

        selectedWish = true;

        /* Tandai bintang yang dipilih */

        star.classList.add("selected");


        /* Matikan bintang lain */

        wishStars.forEach(otherStar => {

            if (otherStar !== star) {

                otherStar.style.opacity = ".25";

                otherStar.style.pointerEvents = "none";

            }

        });


        /* Pesan */

        wishMessage.textContent =
            "✨ Semoga harapan Pinkan terkabul! 💗";

        wishMessage.classList.add("success");


        /* Efek cahaya */

        createWishSparkles();


        /* Munculkan tombol */

        setTimeout(() => {

            continueAfterWish.classList.remove(
                "hidden"
            );

        }, 800);

    });

});


/* =========================================
   WISH SPARKLES
========================================= */

function createWishSparkles() {

    const symbols = [
        "✨",
        "⭐",
        "💗",
        "🌟"
    ];

    for (let i = 0; i < 22; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        sparkle.style.position = "fixed";

        sparkle.style.left =
            (35 + Math.random() * 30) + "vw";

        sparkle.style.top =
            (35 + Math.random() * 20) + "vh";

        sparkle.style.fontSize =
            (12 + Math.random() * 20) + "px";

        sparkle.style.zIndex = "9999";

        sparkle.style.pointerEvents = "none";

        document.body.appendChild(sparkle);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            60 + Math.random() * 140;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        const duration =
            800 + Math.random() * 900;


        sparkle.animate(
            [
                {
                    transform:
                        "translate(0,0) scale(.4)",
                    opacity: 0
                },
                {
                    transform:
                        "translate(0,0) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,${y}px) scale(.2)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            sparkle.remove();

        }, duration + 100);

    }

}


/* =========================================
   CONTINUE TO DREAM
========================================= */

continueAfterWish.addEventListener("click", () => {

    showScene(5);

});


/* =========================================
   DREAM / CITA-CITA
========================================= */

const dreamOptions =
    document.querySelectorAll(".dream-option");

const customDream =
    document.getElementById("customDream");

const customDreamButton =
    document.getElementById("customDreamButton");

const dreamMessage =
    document.getElementById("dreamMessage");

const continueAfterDream =
    document.getElementById("continueAfterDream");


let selectedDream = "";


/* =========================================
   SELECT PRESET DREAM
========================================= */

dreamOptions.forEach(option => {

    option.addEventListener("click", () => {

        const dream =
            option.dataset.dream;

        selectedDream = dream;


        /* Reset pilihan */

        dreamOptions.forEach(item => {

            item.classList.remove("selected");

        });


        /* Pilih */

        option.classList.add("selected");


        /* Kosongkan custom */

        customDream.value = "";


        showDreamMessage(dream);

    });

});


/* =========================================
   CUSTOM DREAM
========================================= */

customDreamButton.addEventListener("click", () => {

    const dream =
        customDream.value.trim();


    if (dream === "") {

        dreamMessage.textContent =
            "Tulis dulu cita-citanya yaa 💗";

        return;

    }


    selectedDream = dream;


    /* Hilangkan pilihan preset */

    dreamOptions.forEach(option => {

        option.classList.remove("selected");

    });


    showDreamMessage(dream);

});


/* =========================================
   ENTER KEY
========================================= */

customDream.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        customDreamButton.click();

    }

});


/* =========================================
   SHOW DREAM
========================================= */

function showDreamMessage(dream) {

    dreamMessage.textContent =
        `Wahhh! Pinkan mau jadi ${dream}! 😍✨`;

    continueAfterDream.classList.remove(
        "hidden"
    );

}


/* =========================================
   CONTINUE
========================================= */

continueAfterDream.addEventListener("click", () => {

    showScene(6);

    createDreamSparkles();

});


/* =========================================
   DREAM SPARKLES
========================================= */

function createDreamSparkles() {

    const symbols = [
        "✨",
        "⭐",
        "🌟",
        "💗",
        "🌈"
    ];

    for (let i = 0; i < 30; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            "100vh";

        sparkle.style.fontSize =
            (14 + Math.random() * 18) + "px";

        sparkle.style.zIndex = "9999";

        sparkle.style.pointerEvents = "none";


        document.body.appendChild(sparkle);


        const duration =
            1200 + Math.random() * 1200;


        sparkle.animate(
            [
                {
                    transform:
                        "translateY(0) scale(.5)",
                    opacity: 0
                },
                {
                    transform:
                        "translateY(-45vh) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        "translateY(-105vh) scale(.2)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            sparkle.remove();

        }, duration + 100);

    }

}


/* =========================================
   SKY DREAM
========================================= */

const dreamResult =
    document.getElementById("dreamResult");

const sendDreamButton =
    document.getElementById("sendDreamButton");

const skyMessage =
    document.getElementById("skyMessage");

const continueAfterSky =
    document.getElementById("continueAfterSky");


/* =========================================
   WHEN SCENE 6 OPENS
========================================= */

const originalShowScene = showScene;

showScene = function(number) {

    originalShowScene(number);


    if (number === 6) {

        dreamResult.textContent =
            selectedDream || "cita-cita Pinkan";

    }

};


/* =========================================
   SEND DREAM
========================================= */

sendDreamButton.addEventListener("click", () => {

    sendDreamButton.disabled = true;

    sendDreamButton.style.opacity = ".5";

    skyMessage.textContent =
        "Cita-cita Pinkan terbang ke langit... ✨";


    createSkyLaunch();


    setTimeout(() => {

        skyMessage.textContent =
            `Semoga suatu hari Pinkan bisa menjadi ${selectedDream}! 💗🌈`;

        continueAfterSky.classList.remove(
            "hidden"
        );

    }, 1500);

});


/* =========================================
   SKY LAUNCH
========================================= */

function createSkyLaunch() {

    const rocket =
        document.createElement("div");

    rocket.textContent = "🚀";

    rocket.style.position = "fixed";

    rocket.style.left = "50%";

    rocket.style.bottom = "15%";

    rocket.style.transform =
        "translateX(-50%)";

    rocket.style.fontSize = "60px";

    rocket.style.zIndex = "9999";

    rocket.style.pointerEvents = "none";

    document.body.appendChild(rocket);


    rocket.animate(
        [
            {
                transform:
                    "translate(-50%, 0) scale(1)",
                opacity: 1
            },
            {
                transform:
                    "translate(-50%, -90vh) scale(.7)",
                opacity: 0
            }
        ],
        {
            duration: 1800,
            easing: "ease-in"
        }
    );


    setTimeout(() => {

        rocket.remove();

    }, 1900);

}


/* =========================================
   CONTINUE
========================================= */

continueAfterSky.addEventListener("click", () => {

    showScene(7);

});


/* =========================================
   MAGIC PLANT
========================================= */

const plantFlower =
    document.getElementById("plantFlower");

const waterButton =
    document.getElementById("waterButton");

const waterCount =
    document.getElementById("waterCount");

const plantMessage =
    document.getElementById("plantMessage");

const continueAfterPlant =
    document.getElementById("continueAfterPlant");


let waterTimes = 0;


/* =========================================
   WATER FLOWER
========================================= */

waterButton.addEventListener("click", () => {

    if (waterTimes >= 3) {
        return;
    }

    waterTimes++;

    waterCount.textContent =
        waterTimes;


    /* ================================
       FIRST WATER
    ================================= */

    if (waterTimes === 1) {

        plantFlower.textContent = "🌱";

        plantFlower.className =
            "plant-flower grow-1";

        plantMessage.textContent =
            "Yeay! Tunas kecilnya mulai tumbuh! 🌱💗";

    }


    /* ================================
       SECOND WATER
    ================================= */

    if (waterTimes === 2) {

        plantFlower.textContent = "🌿";

        plantFlower.className =
            "plant-flower grow-2";

        plantMessage.textContent =
            "Wahhh makin besar! Rajin dirawat yaa 🌿✨";

    }


    /* ================================
       THIRD WATER
    ================================= */

    if (waterTimes === 3) {

        plantFlower.textContent = "🌷";

        plantFlower.className =
            "plant-flower grow-3";

        plantMessage.textContent =
            "Bunganya mekarrr! Pinkan berhasil! 🌷💗";

        waterButton.disabled = true;

        waterButton.textContent =
            "Bunganya sudah mekar 🌸";


        createFlowerSparkles();


        setTimeout(() => {

            continueAfterPlant.classList.remove(
                "hidden"
            );

        }, 900);

    }

});


/* =========================================
   FLOWER SPARKLES
========================================= */

function createFlowerSparkles() {

    const symbols = [
        "✨",
        "🌸",
        "💗",
        "⭐",
        "🌿"
    ];

    for (let i = 0; i < 25; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        sparkle.style.position = "fixed";

        sparkle.style.left =
            (35 + Math.random() * 30) + "vw";

        sparkle.style.top =
            (35 + Math.random() * 30) + "vh";

        sparkle.style.fontSize =
            (12 + Math.random() * 18) + "px";

        sparkle.style.zIndex = "9999";

        sparkle.style.pointerEvents = "none";

        document.body.appendChild(sparkle);


        const x =
            (Math.random() - .5) * 250;

        const y =
            (Math.random() - .5) * 250;


        const duration =
            900 + Math.random() * 900;


        sparkle.animate(
            [
                {
                    transform:
                        "translate(0,0) scale(.3)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(0,0) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px,${y}px) scale(.2)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            sparkle.remove();

        }, duration + 100);

    }

}


/* =========================================
   CONTINUE
========================================= */

continueAfterPlant.addEventListener("click", () => {

    showScene(8);

});


/* =========================================
   MAGIC FLOWER
========================================= */

const magicFlower =
    document.getElementById("magicFlower");

const magicFlowerMessage =
    document.getElementById("magicFlowerMessage");

const enterGarden =
    document.getElementById("enterGarden");

let magicFlowerOpened = false;


magicFlower.addEventListener("click", () => {

    if (magicFlowerOpened) {
        return;
    }

    magicFlowerOpened = true;

    magicFlower.classList.add("bloom");

    magicFlowerMessage.textContent =
        "✨ Waaaaah! Bunganya punya cahaya ajaib! ✨";


    createMagicExplosion();


    setTimeout(() => {

        magicFlower.textContent = "🌸";

        magicFlowerMessage.textContent =
            "Pinkan menemukan taman rahasia! 🌳🦋";

        enterGarden.classList.remove(
            "hidden"
        );

    }, 900);

});


/* =========================================
   MAGIC EXPLOSION
========================================= */

function createMagicExplosion() {

    const symbols = [
        "✨",
        "⭐",
        "🌸",
        "💗",
        "🦋"
    ];

    for (let i = 0; i < 35; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        sparkle.style.position = "fixed";

        sparkle.style.left = "50%";

        sparkle.style.top = "50%";

        sparkle.style.fontSize =
            (14 + Math.random() * 24) + "px";

        sparkle.style.zIndex = "9999";

        sparkle.style.pointerEvents = "none";


        document.body.appendChild(sparkle);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            80 + Math.random() * 220;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        const duration =
            800 + Math.random() * 800;


        sparkle.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(.2)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(.1)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            sparkle.remove();

        }, duration + 100);

    }

}


/* =========================================
   ENTER SECRET GARDEN
========================================= */

enterGarden.addEventListener("click", () => {

    showScene(9);

});



/* =========================================
   SECRET GARDEN / BUTTERFLY HUNT
========================================= */

const butterflies =
    document.querySelectorAll(".butterfly");

const butterflyCount =
    document.getElementById("butterflyCount");

const butterflyMessage =
    document.getElementById("butterflyMessage");

const continueAfterButterflies =
    document.getElementById("continueAfterButterflies");


let foundButterflies = 0;


/* =========================================
   FIND BUTTERFLY
========================================= */

butterflies.forEach(butterfly => {

    butterfly.addEventListener("click", () => {

        if (butterfly.classList.contains("found")) {
            return;
        }


        butterfly.classList.add("found");

        foundButterflies++;

        butterflyCount.textContent =
            foundButterflies;


        if (foundButterflies === 1) {

            butterflyMessage.textContent =
                "Dapat satu! 🦋💗";

        }

        if (foundButterflies === 2) {

            butterflyMessage.textContent =
                "Dapat dua! Tinggal satu lagi! 🦋✨";

        }


        if (foundButterflies === 3) {

            butterflyMessage.textContent =
                "Yeayyy! Semua kupu-kupunya ditemukan! 🎉🦋";

            createButterflySparkles();


            setTimeout(() => {

                continueAfterButterflies.classList.remove(
                    "hidden"
                );

            }, 700);

        }

    });

});


/* =========================================
   SPARKLES
========================================= */

function createButterflySparkles() {

    const symbols = [
        "🦋",
        "✨",
        "🌸",
        "⭐",
        "💗"
    ];

    for (let i = 0; i < 25; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 70 + "vh";

        sparkle.style.fontSize =
            (13 + Math.random() * 18) + "px";

        sparkle.style.zIndex = "9999";

        sparkle.style.pointerEvents = "none";


        document.body.appendChild(sparkle);


        const duration =
            900 + Math.random() * 1100;


        sparkle.animate(
            [
                {
                    transform:
                        "translateY(0) scale(.4)",
                    opacity: 0
                },

                {
                    transform:
                        "translateY(-30px) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(-120px) scale(.2)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            sparkle.remove();

        }, duration + 100);

    }

}


/* =========================================
   CONTINUE
========================================= */

continueAfterButterflies.addEventListener(
    "click",
    () => {

        showScene(10);

    }
);



/* =========================================
   SECRET ENVELOPE
========================================= */

const secretEnvelope =
    document.getElementById("secretEnvelope");

const envelopeMessage =
    document.getElementById("envelopeMessage");

const continueAfterLetter =
    document.getElementById("continueAfterLetter");


let envelopeOpened = false;


secretEnvelope.addEventListener("click", () => {

    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    secretEnvelope.classList.add("open");


    envelopeMessage.textContent =
        "💗 Surat khusus untuk Pinkan! 💗";


    createLetterSparkles();


    setTimeout(() => {

        continueAfterLetter.classList.remove(
            "hidden"
        );

    }, 1000);

});


/* =========================================
   LETTER SPARKLES
========================================= */

function createLetterSparkles() {

    const symbols = [
        "💗",
        "✨",
        "🌸",
        "⭐",
        "💌"
    ];

    for (let i = 0; i < 24; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        sparkle.style.position = "fixed";

        sparkle.style.left =
            (40 + Math.random() * 20) + "vw";

        sparkle.style.top =
            (35 + Math.random() * 25) + "vh";

        sparkle.style.fontSize =
            (13 + Math.random() * 20) + "px";

        sparkle.style.zIndex = "9999";

        sparkle.style.pointerEvents = "none";


        document.body.appendChild(sparkle);


        const x =
            (Math.random() - .5) * 220;

        const y =
            (Math.random() - .5) * 220;


        const duration =
            900 + Math.random() * 900;


        sparkle.animate(
            [
                {
                    transform:
                        "translate(0,0) scale(.3)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(0,0) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px,${y}px) scale(.2)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            sparkle.remove();

        }, duration + 100);

    }

}


/* =========================================
   READ LETTER
========================================= */

continueAfterLetter.addEventListener(
    "click",
    () => {

        showScene(11);

        startLetterTyping();

    }
);



/* =========================================
   BIRTHDAY LETTER TYPING
========================================= */

const typedLetter =
    document.getElementById("typedLetter");

const letterCursor =
    document.getElementById("letterCursor");

const letterSignature =
    document.getElementById("letterSignature");

const continueAfterReading =
    document.getElementById("continueAfterReading");


const birthdayLetterText =
`Selamat ulang tahun, Pinkan anak cantik anak baik! 💗

Semoga Pinkan selalu jadi anak sholeh, berbakti kepada orang tua, rajin belajar, sayang keluarga, dan baik ke banyak orang. 🌸

Semoga Pinkan selalu dikelilingi hal-hal baik di sekitar Pinkan, punya banyak teman yang baik, dan selalu membawa kebaikan untuk orang-orang di sekitar Pinkan. ✨

Panjang umur dan bahagia selalu yaa cantik! 🎂💗

Semoga semua cita-cita Pinkan nanti bisa tercapai. Jangan pernah berhenti bermimpi dan terus jadi anak baik yaa! 🌈`;


let letterTypingStarted = false;


function startLetterTyping() {

    if (letterTypingStarted) {
        return;
    }

    letterTypingStarted = true;

    typedLetter.textContent = "";

    let index = 0;


    function typeCharacter() {

        if (index < birthdayLetterText.length) {

            typedLetter.textContent +=
                birthdayLetterText[index];

            index++;


            /* Typing speed */

            let speed = 28;

            if (
                birthdayLetterText[index - 1] === "." ||
                birthdayLetterText[index - 1] === "!"
            ) {

                speed = 150;

            }

            if (
                birthdayLetterText[index - 1] === "\n"
            ) {

                speed = 180;

            }


            setTimeout(
                typeCharacter,
                speed
            );

        } else {

            /* selesai mengetik */

            letterCursor.style.display =
                "none";


            letterSignature.classList.remove(
                "hidden"
            );

            letterSignature.classList.add(
                "show"
            );


            createLetterFinishEffect();


            setTimeout(() => {

                continueAfterReading.classList.remove(
                    "hidden"
                );

            }, 1000);

        }

    }


    typeCharacter();

}


/* =========================================
   FINISH EFFECT
========================================= */

function createLetterFinishEffect() {

    const symbols = [
        "💗",
        "🌸",
        "✨",
        "🌷"
    ];

    for (let i = 0; i < 18; i++) {

        const item =
            document.createElement("div");

        item.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        item.style.position = "fixed";

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.top =
            "100vh";

        item.style.fontSize =
            (13 + Math.random() * 16) + "px";

        item.style.zIndex = "9999";

        item.style.pointerEvents = "none";


        document.body.appendChild(item);


        const duration =
            1400 + Math.random() * 1200;


        item.animate(
            [
                {
                    transform:
                        "translateY(0)",
                    opacity: 0
                },

                {
                    transform:
                        "translateY(-110vh)",
                    opacity: .9
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            item.remove();

        }, duration + 100);

    }

}


/* =========================================
   CONTINUE TO CAKE
========================================= */

continueAfterReading.addEventListener("click", () => {

    showScene(12);

});







/* ============================= */
/* SCENE 12 — BIRTHDAY CAKE */
/* ============================= */

const bigCandleSlots =
    document.querySelectorAll(".big-candle-slot");

const newAddCandle =
    document.getElementById("addCandle");

const newBlowCandles =
    document.getElementById("blowCandles");

const newCakeProgress =
    document.getElementById("cakeProgress");

const newCakeProgressFill =
    document.getElementById("cakeProgressFill");

const newCakeMessage =
    document.getElementById("cakeMessage");

let newCandlesAdded = 0;


/* ============================= */
/* TAMBAH 7 LILIN */
/* ============================= */

newAddCandle.addEventListener("click", () => {

    if (newCandlesAdded >= 7) return;

    const slot = bigCandleSlots[newCandlesAdded];

    newCandlesAdded++;

    slot.innerHTML = `
        <div class="big-candle">
            <div class="big-flame"></div>
        </div>
    `;

    newCakeProgress.textContent =
        `${newCandlesAdded} / 7 lilin 🕯️`;

    newCakeProgressFill.style.width =
        `${(newCandlesAdded / 7) * 100}%`;


    if (newCandlesAdded < 7) {

        newCakeMessage.textContent =
            `Yeyyy! Tinggal ${7 - newCandlesAdded} lilin lagi! 💗`;

    } else {

        newCakeMessage.innerHTML =
            "🎂 <strong>7 lilin sudah lengkap!</strong> ✨<br>" +
            "Sekarang waktunya meniup lilinnya!";

        newAddCandle.classList.add("hidden");

        setTimeout(() => {
            newBlowCandles.classList.remove("hidden");
        }, 300);
    }

});


/* ============================= */
/* TIUP LILIN */
/* ============================= */

newBlowCandles.addEventListener("click", () => {

    /* Padamkan semua api */
    document.querySelectorAll(".big-flame").forEach(flame => {
        flame.classList.add("off");
    });

    /* Hilangkan tombol */
    newBlowCandles.classList.add("hidden");

    /* Pesan singkat */
    newCakeMessage.innerHTML =
        "WUSSSSHHHH! 💨✨";

    /*
       TIDAK ADA:
       - kue bergoyang
       - createSparkles
       - efek angin
       - animasi tambahan
    */

    /* Langsung pindah ke Scene 13 */
    setTimeout(() => {

        showScene(13);

        console.log("🎉 Scene 13 berhasil dibuka!");

    }, 800);

});


/* ============================= */


/* ============================================================
   MAGIC GARDEN — CLEAN FLOWER VERSION
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* Cari scene Magic Garden secara otomatis */
    const allScenes = [...document.querySelectorAll(".scene")];

    const magicScene = allScenes.find(scene =>
        scene.innerText.includes("Yuk tanam bunga ajaib!")
    );

    if (!magicScene) {
        console.log("❌ Magic Garden tidak ditemukan.");
        return;
    }

    console.log("🌱 Magic Garden ditemukan.");


    /* ========================================================
       GANTI TAMPILAN TANAMAN
       ======================================================== */

    const possiblePlantSelectors = [
        ".magic-flower",
        ".flower",
        ".plant",
        ".flower-container",
        ".plant-container",
        ".garden-flower",
        ".flower-stage"
    ];

    let oldPlant = null;

    for (const selector of possiblePlantSelectors) {

        const found = magicScene.querySelector(selector);

        if (found) {
            oldPlant = found;
            break;
        }

    }


    /* ========================================================
       BUAT AREA BUNGA BARU
       ======================================================== */

    const newFlower = document.createElement("div");

    newFlower.className = "clean-magic-flower";

    newFlower.innerHTML = `
        
        <div class="clean-flower-area">

            <div class="clean-leaves">
                <div class="clean-leaf leaf-left"></div>
                <div class="clean-leaf leaf-right"></div>
            </div>

            <div class="clean-stem"></div>

            <div class="clean-pot">
                <div class="clean-pot-top"></div>
                <div class="clean-pot-body"></div>
            </div>

            <div class="clean-bloom">

                <div class="tulip-petal petal-left"></div>
                <div class="tulip-petal petal-center"></div>
                <div class="tulip-petal petal-right"></div>

            </div>

        </div>
    `;


    /* ========================================================
       TARUH DI POSISI BUNGA LAMA
       ======================================================== */

    if (oldPlant) {

        oldPlant.style.display = "none";

        oldPlant.parentElement.insertBefore(
            newFlower,
            oldPlant
        );

    } else {

        /*
        Kalau class bunga lama tidak ditemukan,
        masukkan bunga baru ke tengah scene.
        */

        const title = [...magicScene.querySelectorAll("*")]
            .find(el =>
                el.textContent.trim() ===
                "Bunga ini akan tumbuh kalau Pinkan merawatnya dengan baik 💗"
            );

        if (title && title.parentElement) {

            title.parentElement.appendChild(newFlower);

        } else {

            magicScene.appendChild(newFlower);

        }

    }


    /* ========================================================
       STYLE BUNGA
       ======================================================== */

    const style = document.createElement("style");

    style.textContent = `

    /* AREA BUNGA */

    .clean-magic-flower {

        width: 240px;
        height: 230px;

        margin: 18px auto;

        display: flex;
        justify-content: center;
        align-items: center;

    }


    .clean-flower-area {

        position: relative;

        width: 180px;
        height: 220px;

    }


    /* BATANG */

    .clean-stem {

        position: absolute;

        width: 12px;
        height: 105px;

        left: 84px;
        bottom: 57px;

        background: #69b86b;

        border-radius: 10px;

        z-index: 2;

    }


    /* DAUN */

    .clean-leaves {

        position: absolute;

        left: 0;
        bottom: 92px;

        width: 180px;
        height: 90px;

        z-index: 3;

    }


    .clean-leaf {

        position: absolute;

        width: 58px;
        height: 30px;

        background: #7dcc4c;

        border-radius: 100% 10% 100% 10%;

    }


    .leaf-left {

        left: 28px;
        top: 30px;

        transform: rotate(-28deg);

    }


    .leaf-right {

        right: 28px;
        top: 15px;

        transform: rotate(28deg) scaleX(-1);

    }


    /* BUNGA TULIP */

    .clean-bloom {

        position: absolute;

        width: 100px;
        height: 82px;

        left: 40px;
        top: 25px;

        z-index: 5;

    }


    .tulip-petal {

        position: absolute;

        bottom: 0;

        background: linear-gradient(
            135deg,
            #ff78aa,
            #e84282
        );

    }


    .petal-left {

        width: 55px;
        height: 70px;

        left: 4px;

        border-radius:
            80% 20% 35% 65%;

        transform:
            rotate(-18deg);

    }


    .petal-center {

        width: 58px;
        height: 78px;

        left: 21px;

        border-radius:
            50% 50% 35% 35%;

        z-index: 3;

    }


    .petal-right {

        width: 55px;
        height: 70px;

        right: 4px;

        border-radius:
            20% 80% 65% 35%;

        transform:
            rotate(18deg);

    }


    /* POT */

    .clean-pot {

        position: absolute;

        width: 80px;
        height: 55px;

        left: 50px;
        bottom: 8px;

        z-index: 6;

    }


    .clean-pot-top {

        position: absolute;

        width: 90px;
        height: 15px;

        left: -5px;
        top: 0;

        background: #a96957;

        border-radius: 50%;

    }


    .clean-pot-body {

        position: absolute;

        width: 70px;
        height: 48px;

        left: 5px;
        top: 5px;

        background: linear-gradient(
            to bottom,
            #c37b68,
            #a95d50
        );

        clip-path: polygon(
            5% 0,
            95% 0,
            82% 100%,
            18% 100%
        );

    }


    /* ========================================================
       KETIKA MASIH KECIL
       ======================================================== */

    .clean-magic-flower {

        transform: scale(0.72);

        transition: transform 0.5s ease;

    }


    /* ========================================================
       KETIKA SUDAH MEKAR
       ======================================================== */

    .clean-magic-flower.bloomed {

        transform: scale(1);

    }


    .clean-magic-flower.bloomed .clean-bloom {

        animation: cleanFlowerPop 0.7s ease;

    }


    @keyframes cleanFlowerPop {

        0% {
            transform: scale(0.5);
            opacity: 0;
        }

        70% {
            transform: scale(1.08);
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }

    }


    /* MOBILE */

    @media (max-width: 600px) {

        .clean-magic-flower {

            transform: scale(0.72);

            margin: 8px auto;

        }

        .clean-magic-flower.bloomed {

            transform: scale(0.88);

        }

    }

    `;

    document.head.appendChild(style);


    /* ========================================================
       DETEKSI TOMBOL SIRAM
       ======================================================== */

    const waterButton = [...magicScene.querySelectorAll("button")]
        .find(button =>
            button.textContent.includes("Siram bunga")
        );


    if (!waterButton) {
        console.log("❌ Tombol Siram bunga tidak ditemukan.");
        return;
    }


    /* Hapus listener lama dengan clone */
    const cleanButton = waterButton.cloneNode(true);

    waterButton.replaceWith(cleanButton);


    let waterCount = 0;


    /* ========================================================
       SIRAM BUNGA
       ======================================================== */

    cleanButton.addEventListener("click", () => {

        if (waterCount >= 3) return;

        waterCount++;


        /* Perubahan ukuran bunga */

        const scale =
            0.72 + (waterCount * 0.09);

        newFlower.style.transform =
            `scale(${scale})`;


        /* Pesan */

        const messages = [

            "🌱 Bunganya mulai tumbuh... 💗",

            "🌿 Wahhh makin besar! Rajin dirawat yaa ✨",

            "🌷 Bunganya mekarrr! Pinkan berhasil! 💗"

        ];


        const messageElement =
            [...magicScene.querySelectorAll("*")]
            .find(el =>
                el.textContent.includes("Bunganya masih kecil") ||
                el.textContent.includes("Tunas kecilnya") ||
                el.textContent.includes("makin besar") ||
                el.textContent.includes("mekar")
            );


        if (messageElement) {
            messageElement.textContent =
                messages[waterCount - 1];
        }


        /* Counter */

        const counterElement =
            [...magicScene.querySelectorAll("*")]
            .find(el =>
                el.textContent.includes("/ 3 kali disiram")
            );


        if (counterElement) {

            counterElement.textContent =
                `${waterCount} / 3 kali disiram 💧`;

        }


        /* ====================================================
           SELESAI 3 KALI
           ==================================================== */

        if (waterCount === 3) {

            newFlower.classList.add("bloomed");

            cleanButton.style.display = "none";


            setTimeout(() => {

                /*
                Cari scene berikutnya secara otomatis
                */

                const index =
                    allScenes.indexOf(magicScene);

                const nextScene =
                    allScenes[index + 1];


                if (nextScene) {

                    magicScene.classList.remove("active");

                    nextScene.classList.add("active");

                    console.log(
                        "🌷 Magic Garden selesai!"
                    );

                }

            }, 1200);

        }

    });


});



/* ============================================================
   MAGIC GARDEN — SIMPLE MOBILE INTERACTION
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const magicButton =
        document.getElementById("magicWaterButton");

    const magicCounter =
        document.getElementById("magicCounter");

    const magicMessage =
        document.getElementById("magicMessage");

    const magicSuccess =
        document.getElementById("magicSuccess");

    const magicCard =
        document.querySelector(".magic-mobile-card");

    if (
        !magicButton ||
        !magicCounter ||
        !magicMessage ||
        !magicCard
    ) {
        return;
    }


    let magicWaterCount = 0;


    magicButton.addEventListener("click", () => {

        if (magicWaterCount >= 3) return;


        magicWaterCount++;


        magicCounter.textContent =
            magicWaterCount +
            " / 3 kali disiram 💧";


        if (magicWaterCount === 1) {

            magicMessage.textContent =
                "🌱 Tunas kecilnya mulai tumbuh! 💗";

        }


        if (magicWaterCount === 2) {

            magicMessage.textContent =
                "🌿 Wahhh makin besar! ✨";

        }


        if (magicWaterCount === 3) {

            magicMessage.textContent =
                "🌷 Bunganya mekarrr! Pinkan berhasil! 💗";

            magicButton.style.display = "none";

            magicCard.classList.add("magic-done");

            if (magicSuccess) {
                magicSuccess.style.display = "block";
            }


            /*
             * Setelah selesai,
             * lanjut ke scene berikutnya.
             */

            setTimeout(() => {

                const scenes =
                    [...document.querySelectorAll(".scene")];

                const current =
                    magicCard.closest(".scene");

                const index =
                    scenes.indexOf(current);

                const next =
                    scenes[index + 1];

                if (next) {

                    scenes.forEach(scene => {
                        scene.classList.remove("active");
                    });

                    next.classList.add("active");

                }

            }, 1400);

        }

    });

});


/* ============================================================
   MAGIC GARDEN FINAL
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* Cari scene berdasarkan isi teks */
    const scenes = [
        ...document.querySelectorAll(".scene")
    ];

    const magicScene = scenes.find(scene =>
        scene.textContent.includes("Yuk tanam bunga ajaib")
    ) || scenes.find(scene =>
        scene.textContent.includes("MAGIC GARDEN")
    );

    if (!magicScene) {
        console.log("❌ Magic Garden tidak ditemukan.");
        return;
    }

    console.log("🌱 Magic Garden ditemukan!");

    /* Tandai scene */
    magicScene.classList.add("magic-mobile-scene");


    /* ========================================================
       GANTI ISI MAGIC GARDEN
       ======================================================== */

    magicScene.innerHTML = `

        <div class="magic-final-card">

            <div class="magic-final-label">
                🌱 MAGIC GARDEN 🌱
            </div>

            <h1 class="magic-final-title">
                Yuk tanam bunga ajaib! 🌸
            </h1>

            <p class="magic-final-subtitle">
                Bunga ini akan tumbuh kalau Pinkan<br>
                merawatnya dengan baik 💗
            </p>


            <div class="magic-final-flower-area">

                <div class="magic-final-plant">

                    <div class="magic-final-bloom">

                        <div class="magic-final-petal one"></div>
                        <div class="magic-final-petal two"></div>
                        <div class="magic-final-petal three"></div>

                        <div class="magic-final-center"></div>

                    </div>

                    <div class="magic-final-stem"></div>

                    <div class="magic-final-leaf left"></div>
                    <div class="magic-final-leaf right"></div>

                    <div class="magic-final-pot">
                        <div class="magic-final-soil"></div>
                    </div>

                </div>

            </div>


            <div
                class="magic-final-counter"
                id="magicFinalCounter">

                0 / 3 kali disiram 💧

            </div>


            <div
                class="magic-final-message"
                id="magicFinalMessage">

                🌱 Bunganya masih kecil...

            </div>


            <button
                class="magic-final-button"
                id="magicFinalButton"
                type="button">

                Siram bunga 💧

            </button>

        </div>
    `;


    /* ========================================================
       INTERAKSI
       ======================================================== */

    const button =
        document.getElementById("magicFinalButton");

    const counter =
        document.getElementById("magicFinalCounter");

    const message =
        document.getElementById("magicFinalMessage");

    const plant =
        magicScene.querySelector(".magic-final-plant");

    const bloom =
        magicScene.querySelector(".magic-final-bloom");


    let count = 0;


    button.addEventListener("click", () => {

        if (count >= 3) return;

        count++;


        /* Ukuran tanaman bertambah */
        plant.style.transform =
            `scale(${0.78 + count * 0.08})`;


        /* Counter */
        counter.textContent =
            `${count} / 3 kali disiram 💧`;


        /* Pesan */
        if (count === 1) {

            message.textContent =
                "🌱 Tunas kecilnya mulai tumbuh! 💗";

        }

        else if (count === 2) {

            message.textContent =
                "🌿 Wahhh makin besar! ✨";

        }

        else if (count === 3) {

            message.textContent =
                "🌷 Bunganya mekarrr! Pinkan berhasil! 💗";

            bloom.classList.add("show");

            button.style.display = "none";


            /* Lanjut ke scene berikutnya */
            setTimeout(() => {

                const currentIndex =
                    scenes.indexOf(magicScene);

                const nextScene =
                    scenes[currentIndex + 1];


                if (nextScene) {

                    scenes.forEach(scene => {
                        scene.classList.remove("active");
                    });

                    nextScene.classList.add("active");

                    console.log(
                        "🌷 Magic Garden selesai!"
                    );

                }

            }, 1200);

        }

    });

});
