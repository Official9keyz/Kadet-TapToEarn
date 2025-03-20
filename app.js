function claimReferralBonus() {
    const referralBonus = 10; // 10 $KADET per referral
    balance += referralBonus;
    updateBalance();
    alert(`You earned +${referralBonus} $KADET from referral!`);
}
