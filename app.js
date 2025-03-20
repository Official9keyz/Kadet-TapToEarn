let balance = 0;
let dailyEarnings = 0;
const DAILY_LIMIT = 500;
const TAP_REWARD = 5;
const REFERRAL_REWARD = 10;

// Function to tap and earn KADET
function tapToEarn() {
    if (dailyEarnings + TAP_REWARD <= DAILY_LIMIT) {
        balance += TAP_REWARD;
        dailyEarnings += TAP_REWARD;
        updateBalance();
    } else {
        alert("Daily limit reached. Come back tomorrow!");
    }
}

// Function to update balance on screen
function updateBalance() {
    document.getElementById("balance").innerText = `Balance: ${balance} $KADET`;
}

// Function to handle referral bonuses
function claimReferralBonus() {
    balance += REFERRAL_REWARD;
    updateBalance();
    alert(`You earned ${REFERRAL_REWARD} $KADET for a referral!`);
}

// Reset daily earnings at midnight
function resetDailyEarnings() {
    dailyEarnings = 0;
}

// Reset daily earnings at midnight (local time)
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        resetDailyEarnings();
    }
}, 60000); // Check every minute
