let balance = 0;
let dailyEarnings = 0;
const DAILY_LIMIT = 500;
const TAP_REWARD = 5;
const REFERRAL_REWARD = 10;
let isPremium = false;

// Function to tap and earn KADET
function tapToEarn() {
    let reward = isPremium ? TAP_REWARD * 2 : TAP_REWARD;

    if (dailyEarnings + reward <= DAILY_LIMIT) {
        balance += reward;
        dailyEarnings += reward;
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

// Function to upgrade to premium (simulate Pi payment)
function upgradeToPremium() {
    if (isPremium) {
        alert("You are already a premium user!");
        return;
    }

    const confirmUpgrade = confirm("Do you want to upgrade to Premium for 1 Pi?");
    if (confirmUpgrade) {
        isPremium = true;
        alert("Upgrade successful! You now earn double rewards.");
    }
}

// Reset daily earnings at midnight (local time)
function resetDailyEarnings() {
    dailyEarnings = 0;
}

setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        resetDailyEarnings();
    }
}, 60000); // Check every minute
