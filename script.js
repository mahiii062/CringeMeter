const questions = [
    {
        question: "১. আপনি কি ফেসবুকে নিজের ক্রিঞ্জি ভিডিও শেয়ার করেন?",
        answers: [
            { text: "হ্যাঁ, নিয়মিত করি 😎", score: 3 },
            { text: "মাঝে মাঝেই করি 👀", score: 2 },
            { text: "খুব কম করি 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "২. আপনি কি পাবলিক পোস্টে 'ফার্স্ট' কমেন্ট করেন?",
        answers: [
            { text: "প্রায়ই 😎", score: 3 },
            { text: "মাঝে মাঝে 😆", score: 2 },
            { text: "এক-দুবার 😅", score: 1 },
            { text: "না 😂", score: 0 }
        ]
    },
    {
        question: "৩. আপনি কি পাবলিক জায়গায় অদ্ভুত টিকটক ভিডিও করেন?",
        answers: [
            { text: "সবসময় 💃", score: 3 },
            { text: "কখনো সখনো 😬", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "৪. ফেসবুক বা ইনস্টাগ্রামে অতিরিক্ত সেলফি পোস্ট করেন?",
        answers: [
            { text: "হ্যাঁ, প্রতিদিন 🤳", score: 3 },
            { text: "মাঝে মাঝে 😊", score: 2 },
            { text: "কখনো সখনো 😅", score: 1 },
            { text: "না 📵", score: 0 }
        ]
    },
    {
        question: "৫. আপনি কি অন্যের পোস্টে 'কিউট', 'ওওওউউউউ' টাইপ কমেন্ট করেন?",
        answers: [
            { text: "সব পোস্টে 😍", score: 3 },
            { text: "মাঝে মাঝে 🫣", score: 2 },
            { text: "কিছু কিছুতে 😅", score: 1 },
            { text: "না 🙃", score: 0 }
        ]
    },
    {
        question: "৬. আপনি কি ফুটবলদ সাজার চেষ্টা করেন?",
        answers: [
            { text: "হ্যাঁ, আমি ফুটবলদ 💪", score: 3 },
            { text: "ভান করি 😎", score: 2 },
            { text: "কখনো সখনো 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "৭. আপনি কি বুঝেও না বুঝার ভান করে থাকেন যাতে অন্যের ফিলিংস দেখে মনে মনে মজা নিতে পারেন?",
        answers: [
            { text: "হ্যাঁ, নিয়মিত করি 😈", score: 3 },
            { text: "মাঝে মাঝে 🤭", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "৮. আপনি কি মনে করেন যে ইউনিভার্সিটিতে উঠলেই কেউ ইমোশন শো করলে তাকে নিয়ে মজা করে অপমান করা কুল ব্যাপার?",
        answers: [
            { text: "হ্যাঁ, এটাই কুল 😎", score: 3 },
            { text: "কখনো এমন করেছি 🫣", score: 2 },
            { text: "মজার ছলে একবার 😅", score: 1 },
            { text: "না, কখনোই না 🙅", score: 0 }
        ]
    },
    {
        question: "৯. আপনি কী ইউনিভার্সিটি তে বন্ধুদের গালি দেয়াটাকে কুল মনে করেন?",
        answers: [
            { text: "হ্যাঁ, এটাই কুল 😎", score: 3 },
            { text: "মাঝে মধ্যে 🤭", score: 2 },
            { text: "নিউট্রাল 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "১০. আপনি কী সিজি নিয়ে বন্ধুরে মজার ছলে অপমান করাকে কুল মনে করেন?",
        answers: [
            { text: "হ্যাঁ, এটাই কুল 😎", score: 3 },
            { text: "করি মাঝে মধ্যে 🫣", score: 2 },
            { text: "নিউট্রাল 😅", score: 1 },
            { text: "না, কখনোই না 🙅", score: 0 }
        ]
    },
    {
        question: "১১. আপনি কী ফেসবুক বায়োতে ইউনিভার্সিটি বা কলেজ নিয়ে ফ্লেক্স করা কে সুন্দর মনে করেন?",
        answers: [
            { text: "হ্যাঁ, এগুলা নিয়ে না করলে কী হবে? 😎", score: 3 },
            { text: "মাঝে মধ্যে দেই, আবার পরে ডেল মারি 🤭", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "১২. আপনি কি ফেবু তে নিকনেম হিসেবে রাজকুমার বা রাজকুমারি ব্যবহার করা ভালো মনে করেন?",
        answers: [
            { text: "হ্যাঁ, কারণ আমি আমার রাজ্যের রাজা/রানি 👑", score: 3 },
            { text: "মাঝে মধ্যে দেই, আবার পরে ডেল মারি 🫣", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না, কখনোই না 🙅", score: 0 }
        ]
    },
    {
        question: "১৩. আপনি কি নিজের পুরনো পোস্টে নিজেই কমেন্ট করেন?",
        answers: [
            { text: "হ্যাঁ, নিয়মিত করি 😈", score: 3 },
            { text: "মাঝে মাঝে 🤔", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না, কখনোই না 🙅", score: 0 }
        ]
    },
    {
        question: "১৪. ব্রেকআপ হইলে ফেসবুকে সবাইকে জানানো কি সুন্দর মনে করেন?",
        answers: [
            { text: "হ্যাঁ 😎", score: 3 },
            { text: "আংশিক হ্যাঁ 🤭", score: 2 },
            { text: "মন্তব্য নাই 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "১৫. আপনি কি নিজের খোঁজ না নিলে অন্য কেউ খোঁজ নেয় না এসব পোস্ট করেন?",
        answers: [
            { text: "হ্যাঁ, সবসময় 😈", score: 3 },
            { text: "মাঝে মাঝে 🤔", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "১৬. এক রাত না ঘুমালে মেসেঞ্জারে নোট দিয়ে সবাইকে জানান কি?",
        answers: [
            { text: "হ্যাঁ, নিয়মিত করি 😎", score: 3 },
            { text: "মাঝে মাঝে 🤭", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "১৭. 'প্রেশার? হুয়াট প্রেসার', 'মেসি, আল্ভারেজ, বুজিজুগি', 'ভিনি, বেলিংহাম, রদ্রিগো' ইত্যাদি জিনিস নোটে দিয়ে নিজেকে ফুটবলদ প্রমাণ করার চেষ্টা করে থাকেন কি?",
        answers: [
            { text: "হ্যাঁ, সবসময় 😎", score: 3 },
            { text: "মাঝে মাঝেই দেই 🤭", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "১৮. আপনি কি 'গাছ-লতাপাতা তুমি আমার চাঁদের টুকরা' ইত্যাদি বাক্য ইউজ করে ফ্লার্ট করেন?",
        answers: [
            { text: "হ্যাঁ, সবসময় 😎", score: 3 },
            { text: "মাঝে মাঝেই মনে উতলা লাগে তাই করি 🤭", score: 2 },
            { text: "একবার করেছি 😅", score: 1 },
            { text: "না 🙅", score: 0 }
        ]
    },
    {
        question: "১৯. আপনি নিজেকে কী মনে করেন?",
        answers: [
            { text: "কুল গায় 😎", score: 3 },
            { text: "লিওনেল মেসি / ক্রিসটিয়ানো রোনালদো 🤭", score: 2 },
            { text: "শান্ত শিষ্ট লেজ যুক্ত 😅", score: 1 },
            { text: "কিছুই মনে করিনা 🙅", score: 0 }
        ]
    },
    {
        question: "২০. যদি কেউ আপনার ভুল ধরে ফেলে, তখন আপনি কী করেন?",
        answers: [
            { text: "পচা কিছু বলে অপমান করি 🙅", score: 3 },
            { text: "পাল্টা কিছু বলে নিজের কথা কে ঠিক দাবি করি 🤭", score: 2 },
            { text: "না শুনে উরিয়ে দেই 😅", score: 1 },
            { text: "শান্ত থেকে শুনে শুধরিয়ে নেই 😎🙅", score: 0 }
        ]
    }
];


let username = "";
let currentQuestionIndex = 0;
let totalScore = 0;
const maxScore = questions.length * 3;
let userAnswers = Array(questions.length).fill(null);

const loginScreen = document.getElementById('login-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultContainer = document.getElementById('result-container');

const usernameInput = document.getElementById('username');
const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const resultText = document.getElementById('result-text');
const resultEmoji = document.getElementById('result-emoji');
const shareBtn = document.getElementById('share-btn');
const restartBtn = document.getElementById('restart-btn');
const leaderboardList = document.getElementById('leaderboard-list');

// ----------------- Login -----------------
startBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username === "") {
        alert("বললাম যে নাম লিখেন, নাম না লিখলে খেলতে দিতাম না xD 😅");
        return;
    }
    loginScreen.style.display = "none"; // Login hide
    quizScreen.style.display = "block"; // Quiz show
    startQuiz();
});

// ----------------- Quiz -----------------
function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    userAnswers.fill(null);
    resultContainer.classList.add('hide');
    document.getElementById('quiz').classList.remove('hide');
    showQuestion();
    updatePrevButtonVisibility();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');

        if (userAnswers[currentQuestionIndex]?.index === index) {
            button.classList.add('selected');
        }

        button.addEventListener('click', () => selectAnswer(index, answer.score));
        answerButtonsElement.appendChild(button);
    });

    progressText.innerText = `প্রশ্ন ${currentQuestionIndex + 1} / ${questions.length}`;
    progressFill.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(index, score) {
    if (userAnswers[currentQuestionIndex] !== null) {
        totalScore -= userAnswers[currentQuestionIndex].score;
    }
    userAnswers[currentQuestionIndex] = { score, index };
    totalScore += score;

    answerButtonsElement.querySelectorAll('.btn').forEach(btn => btn.classList.remove('selected'));
    answerButtonsElement.children[index].classList.add('selected');

    nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        updatePrevButtonVisibility();
    } else {
        showResult();
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updatePrevButtonVisibility();
    }
});

function updatePrevButtonVisibility() {
    prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
}

// ----------------- Result -----------------
function showResult() {
    document.getElementById('quiz').classList.add('hide');
    resultContainer.style.display = "block";

    let levelText, emoji;

    if (totalScore <= 7) {
        levelText = "✨ Cringe Immunity ✨\nআপনি একদমই ক্রিঞ্জ না, Pure Soul 😌";
        emoji = "😇";
    } else if (totalScore <= 15) {
        levelText = "🫣 Cringe Beginner\nহালকা ক্রিঞ্জ, মাঝে মাঝে ফসকান 😅";
        emoji = "🙂";
    } else if (totalScore <= 25) {
        levelText = "😬 Cringe Intermediate\nআপনি মাঝারি লেভেলের ক্রিঞ্জ 😏";
        emoji = "😬";
    } else if (totalScore <= 35) {
        levelText = "🤡 Cringe Master\nআপনি ক্রিঞ্জে পারদর্শী, ভাইরাল টাইপ 😎";
        emoji = "🤡";
    } else {
        levelText = "💥 Cringe Legend 🔥\nআপনি আল্টিমেট ক্রিঞ্জ কিং/কুইন 👑🤯";
        emoji = "💀";
    }

    resultText.innerText = `${levelText}\n${username} এর স্কোর: ${totalScore}/${maxScore}`;
    resultEmoji.innerText = emoji;
    progressFill.style.width = `100%`;

    saveToLeaderboard(username, totalScore);
    showLeaderboard();

    const shareURL = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(`আমি "${levelText.split('\n')[0]}" লেভেলে পৌঁছেছি! 😅\nআপনি কতটা ক্রিঞ্জ? টেস্ট করুন 👉`);
    shareBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${shareURL}&quote=${shareText}`;
}

// ----------------- Restart -----------------
restartBtn.addEventListener('click', () => {
    resultContainer.style.display = "none";
    quizScreen.style.display = "block";
    startQuiz();
});

// ----------------- Leaderboard -----------------
function saveToLeaderboard(name, score) {
    let leaderboard = JSON.parse(localStorage.getItem("cringeLeaderboard")) || [];
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10); // top 10
    localStorage.setItem("cringeLeaderboard", JSON.stringify(leaderboard));
}

function showLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem("cringeLeaderboard")) || [];
    leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${entry.name} — ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}
