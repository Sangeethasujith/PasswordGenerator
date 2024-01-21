function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
  
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/';
  
    let validChars = lowercaseChars;
  
    if (uppercaseCheckbox.checked) {
      validChars += uppercaseChars;
    }
  
    if (numbersCheckbox.checked) {
      validChars += numberChars;
    }
  
    if (symbolsCheckbox.checked) {
      validChars += symbolChars;
    }
  
    let password = '';
  
    // Ensure at least one character from each selected set
    password += uppercaseCheckbox.checked ? uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)) : '';
    password += numbersCheckbox.checked ? numberChars.charAt(Math.floor(Math.random() * numberChars.length)) : '';
    password += symbolsCheckbox.checked ? symbolChars.charAt(Math.floor(Math.random() * symbolChars.length)) : '';
  
    // Generate the remaining characters
    for (let i = password.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }
  
    document.getElementById('password').value = password;
  
    // Show success alert
    document.getElementById('success-alert').style.display = 'block';
    // Hide the alert after 3 seconds
    setTimeout(() => {
      document.getElementById('success-alert').style.display = 'none';
    }, 3000);
  }
  