document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('typingArea');
    if (!textarea) return; // safety check

    let timeoutId;

    function clearInput() {
        textarea.value = '';
        console.log("Inputs deleted due to inactivity.");
    }

    // Reset timer on every keystroke
    textarea.addEventListener('input', () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(clearInput, 10000); // 10 seconds
    });
});
