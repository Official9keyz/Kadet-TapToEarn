function claimReferralBonus() {
    let referralBonus = isPremium ? 20 : 10; // Premium = 20 $KADET, Regular = 10 $KADET
    balance += referralBonus;
    updateBalance();
    alert(`You earned +${referralBonus} $KADET from referral!`);
}
