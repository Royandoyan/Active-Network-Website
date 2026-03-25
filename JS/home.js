document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    // Target date: April 1, 2027
    const targetDate = new Date('April 1, 2027 00:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            countdownElement.innerText = `${days} days until opening`;
        } else {
            countdownElement.innerText = "We are now open!";
        }
    };

    // Initial update
    updateCountdown();

    // Update every 24 hours (or more frequently if needed, but days only change daily)
    setInterval(updateCountdown, 1000 * 60 * 60); 
});
