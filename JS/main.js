document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

const loanForm = document.getElementById('loanForm');
const resultDisplay = document.getElementById('result');

if (loanForm) {
    loanForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const principal = parseFloat(document.getElementById('amount').value);
        const interestRate = parseFloat(document.getElementById('interest').value);
        const months = parseInt(document.getElementById('months').value);

        if (principal <= 0 || interestRate <= 0 || months <= 0) {
            resultDisplay.textContent = "Please enter positive numbers only.";
            resultDisplay.style.color = "red";
            return;
        }

        const totalInterest = (principal * (interestRate / 100));
        const monthlyPayment = (principal + totalInterest) / months;

        resultDisplay.textContent = "Monthly Payment: " + monthlyPayment.toFixed(2) + " RWF";
        resultDisplay.style.color = "black";
    });
}

const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
            }
        });

        if (!valid) {
            e.preventDefault();
            alert("Please fill in all fields.");
        } else {
            alert("Thank you! Your message has been sent.");
        }
    });
}