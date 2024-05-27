document.addEventListener('DOMContentLoaded', function() {
    const studentName = sessionStorage.getItem('studentName');
    const duesAmount = sessionStorage.getItem('duesAmount');

    if (studentName && duesAmount) {
        document.getElementById('name').value = studentName;
    }
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cardName = document.getElementById('name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Here you would normally process the payment
    console.log(`Processing payment for ${cardName} with card number ${cardNumber}`);

    alert('Payment processed successfully!');
});
