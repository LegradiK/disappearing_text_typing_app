document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('typingArea');
    const timerDisplay = document.getElementById('timer');

    if (!textarea || !timerDisplay) return;

    const MAX_TIME = 10;
    let remainingTime = MAX_TIME;
    let timeoutId = null;
    let intervalId = null;

    function updateDisplay() {
        timerDisplay.textContent = remainingTime;
    }

    function resetTimer() {
        // Clear existing timers
        clearTimeout(timeoutId);
        clearInterval(intervalId);

        // Reset time
        remainingTime = MAX_TIME;
        updateDisplay();

        // Start countdown
        intervalId = setInterval(() => {
            remainingTime--;
            updateDisplay();

            if (remainingTime <= 0) {
                clearInterval(intervalId);
            }
        }, 1000);

        // Trigger inactivity action
        timeoutId = setTimeout(() => {
            textarea.value = '';
            remainingTime = MAX_TIME;
            updateDisplay();
            clearInterval(intervalId);
            console.log('Inputs deleted due to inactivity.');
        }, MAX_TIME * 1000);
    }

    // Start timer on first input
    textarea.addEventListener('input', resetTimer);

    // Initialise display
    updateDisplay();
});
