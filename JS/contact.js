document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Change button state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> &nbsp; Sending...';
    
    // Simulate form submission for now (email sending disabled)
    setTimeout(() => {
        form.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
    }, 1000); // 1-second delay for feedback
});
