let balance = 0;

function tapToEarn() {
    balance += 5; // Earn 5 $KADET per tap
    document.getElementById("balance").innerText = `Balance: ${balance} $KADET`;
}

Pi.init({ version: "2.0", sandbox: true });

function upgradeToPremium() {
    const paymentData = {
        amount: 1, // 1 Pi for premium
        memo: "Upgrade to Premium",
        metadata: { action: "upgrade_to_premium" }
    };

    const paymentCallbacks = {
        onReadyForServerApproval: (paymentId) => {
            console.log("Payment ID:", paymentId);
            approvePayment(paymentId);
        },
        onReadyForServerCompletion: (paymentId, txid) => {
            console.log("Payment completed:", paymentId, txid);
            balance *= 2; // Double earnings for premium users
            document.getElementById("balance").innerText = `Balance: ${balance} $KADET`;
            alert("Upgrade to Premium successful! Earnings doubled.");
        },
        onCancel: () => {
            alert("Payment cancelled. Try again!");
        },
        onError: (error) => {
            console.error("Payment error:", error);
            alert("Payment failed. Try again!");
        }
    };

    Pi.createPayment(paymentData, paymentCallbacks);
}

function approvePayment(paymentId) {
    console.log(`Approving payment: ${paymentId}`);
}

function completePayment(paymentId, txid) {
    console.log(`Payment approved: ${paymentId}, Transaction ID: ${txid}`);
}
