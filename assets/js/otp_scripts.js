// OTP Verification Scripts
document.addEventListener('DOMContentLoaded', () => {
    const otpForm = document.getElementById('otpForm');
    if (otpForm) {
        otpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const otpInput = document.getElementById('otpInput').value;
            console.log("Entered OTP: ", otpInput);
            // Add AJAX call to verify OTP
        });
    }
});
 
