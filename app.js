let miningInterval;
let miningActive = false;

function startMining() {
    if (miningActive) {
        alert("Mining already active!");
        return;
    }

    miningActive = true;
    miningInterval = setInterval(() => {
        balance += 5; // Earn 5 $KADET every 24 hours
        updateBalance();
        console.log(`+5 $KADET mined`);
    }, 24 * 60 * 60 * 1000); // 24 hours

    alert("Mining started! Come back in 24 hours to see your rewards.");
}

function stopMining() {
    clearInterval(miningInterval);
    miningActive = false;
    alert("Mining stopped");
}
