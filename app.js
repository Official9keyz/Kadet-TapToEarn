function startMining() {
    if (miningActive) {
        alert("Mining already active!");
        return;
    }

    miningActive = true;
    miningInterval = setInterval(() => {
        let reward = isPremium ? 10 : 5; // Premium = 10 $KADET/day, Regular = 5 $KADET/day
        balance += reward;
        updateBalance();
        console.log(`+${reward} $KADET mined`);
    }, 24 * 60 * 60 * 1000); // 24 hours

    alert(`Mining started! You're earning +${isPremium ? 10 : 5} $KADET daily.`);
}
