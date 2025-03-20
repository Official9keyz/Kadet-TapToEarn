async function upgradeToPremium() {
    if (isPremium) {
        alert("You are already a premium user!");
        return;
    }

    document.getElementById('loading').style.display = 'block'; // Show loading animation

    try {
        const payment = await Pi.createPayment({
            amount: 1,
            memo: "Upgrade to Premium", 
            metadata: { type: "upgrade" },
            onReadyForServerApproval: async (paymentId) => {
                await fetch("https://your-backend-url/approve", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ paymentId })
                });
            },
            onReadyForServerCompletion: async (paymentId, txid) => {
                isPremium = true;
                document.getElementById("status").innerText = "Status: Premium User ✅";
                document.getElementById("loading").style.display = 'none'; // Hide loading animation
                alert("Upgrade successful! You now earn double rewards.");
            },
            onCancel: () => {
                document.getElementById("loading").style.display = 'none'; // Hide loading
                alert("Upgrade canceled");
            },
            onError: (error) => {
                document.getElementById("loading").style.display = 'none'; // Hide loading
                alert(`Payment failed: ${error.message}`);
            }
        });

    } catch (error) {
        document.getElementById("loading").style.display = 'none'; // Hide loading
        alert(`Failed to initiate payment: ${error.message}`);
    }
}

function startMining() {
    if (miningActive) {
        alert("Mining already active!");
        return;
    }

    miningActive = true;
    document.getElementById("mining-status").innerText = `Mining: Active (+${isPremium ? 10 : 5} $KADET/day)`;

    miningInterval = setInterval(() => {
        let reward = isPremium ? 10 : 5;
        balance += reward;
        updateBalance();
        console.log(`+${reward} $KADET mined`);
    }, 24 * 60 * 60 * 1000);

    alert(`Mining started! You're earning +${isPremium ? 10 : 5} $KADET daily.`);
}
