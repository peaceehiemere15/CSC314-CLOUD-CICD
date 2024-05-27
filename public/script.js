document.getElementById('dues-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const matricNumber = document.getElementById('matric-number').value;
    const studentName = document.getElementById('student-name').value;
    const duesAmount = document.getElementById('dues-amount').value;

    // Store data in sessionStorage
    sessionStorage.setItem('matricNumber', matricNumber);
    sessionStorage.setItem('studentName', studentName);
    sessionStorage.setItem('duesAmount', duesAmount);

    // Redirect to payment page
    window.location.href = 'payment.html';
});
