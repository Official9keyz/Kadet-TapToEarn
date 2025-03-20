async function upgradeToPremium() {
    if (isPremium) {
        alert("You are already a premium user!");
        return;
    }

    try {
        const payment = await Pi.createPayment({
            amount: 1, // Payment in Pi
            memo: "Upgrade to Premium", 
            metadata: { type: "upgrade" },
            onReadyForServerApproval: async (paymentId) => {
                // Send to backend for approval
                await fetch("https://your-backend-url/approve", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ paymentId })
                });
                console.log(`Payment ready for approval: ${paymentId}`);
            },
            onReadyForServerCompletion: async (paymentId, txid) => {
                // Send to backend for completion
                await fetch("https://your-backend-url/complete", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ paymentId, txid })
                });
                isPremium = true;
                document.getElementById("status").innerText = "Status: Premium User ✅";
                alert("Upgrade successful! You now earn double rewards.");
            },
            onCancel: () => {
                alert("Upgrade canceled");
            },
            onError: (error) => {
                console.error(`Error: ${error.message}`);
                alert(`Payment failed: ${error.message}`);
            }
        });

    } catch (error) {
        console.error(`Error initiating payment: ${error.message}`);
        alert(`Failed to initiate payment: ${error.message}`);
    }
}
