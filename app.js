function upgradeToPremium() {
    if (isPremium) {
        alert("You are already a premium user!");
        return;
    }

    const confirmUpgrade = confirm("Do you want to upgrade to Premium for 1 Pi?");
    if (confirmUpgrade) {
        isPremium = true;
        document.getElementById("status").innerText = "Status: Premium User ✅";
        alert("Upgrade successful! You now earn double rewards.");
    }
}
