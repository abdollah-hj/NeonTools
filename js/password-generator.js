document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const passwordOutput = document.getElementById('password-output');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const lengthSlider = document.getElementById('password-length');
    const lengthValue = document.getElementById('length-value');
    const uppercaseCheck = document.getElementById('include-uppercase');
    const lowercaseCheck = document.getElementById('include-lowercase');
    const numbersCheck = document.getElementById('include-numbers');
    const symbolsCheck = document.getElementById('include-symbols');
    const excludeSimilarCheck = document.getElementById('exclude-similar');
    const excludeAmbiguousCheck = document.getElementById('exclude-ambiguous');
    const strengthMeter = document.getElementById('strength-meter');
    const strengthText = document.getElementById('strength-text');
    const passwordHistory = document.getElementById('password-history');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    
    // Character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const similarChars = 'il1Lo0O';
    const ambiguousChars = '{}[]()/\\\'"`~,;:.<>';
    
    // Password history array
    let history = [];
    
    // Initialize with default values
    if (lengthSlider) {
        lengthSlider.addEventListener('input', function() {
            if (lengthValue) lengthValue.textContent = this.value;
        });
        // Trigger the event to set initial value
        lengthValue.textContent = lengthSlider.value;
    }
    
    // Generate password button click handler
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            generatePassword();
        });
    }
    
    // Copy button click handler
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            if (passwordOutput && passwordOutput.value) {
                navigator.clipboard.writeText(passwordOutput.value)
                    .then(() => {
                        // Show temporary success message
                        const originalText = copyBtn.innerHTML;
                        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        setTimeout(() => {
                            copyBtn.innerHTML = originalText;
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
            }
        });
    }
    
    // Clear history button click handler
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', function() {
            history = [];
            updatePasswordHistory();
        });
    }
    
    // Generate password function
    function generatePassword() {
        if (!passwordOutput) return;
        
        // Get options
        const length = lengthSlider ? parseInt(lengthSlider.value) : 12;
        const useUppercase = uppercaseCheck ? uppercaseCheck.checked : true;
        const useLowercase = lowercaseCheck ? lowercaseCheck.checked : true;
        const useNumbers = numbersCheck ? numbersCheck.checked : true;
        const useSymbols = symbolsCheck ? symbolsCheck.checked : true;
        const excludeSimilar = excludeSimilarCheck ? excludeSimilarCheck.checked : false;
        const excludeAmbiguous = excludeAmbiguousCheck ? excludeAmbiguousCheck.checked : false;
        
        // Validate at least one character set is selected
        if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
            alert('Please select at least one character set.');
            return;
        }
        
        // Build character pool
        let charPool = '';
        if (useUppercase) charPool += uppercaseChars;
        if (useLowercase) charPool += lowercaseChars;
        if (useNumbers) charPool += numberChars;
        if (useSymbols) charPool += symbolChars;
        
        // Remove similar characters if option is selected
        if (excludeSimilar) {
            for (let i = 0; i < similarChars.length; i++) {
                charPool = charPool.replace(new RegExp(similarChars[i], 'g'), '');
            }
        }
        
        // Remove ambiguous characters if option is selected
        if (excludeAmbiguous) {
            for (let i = 0; i < ambiguousChars.length; i++) {
                charPool = charPool.replace(new RegExp('\\' + ambiguousChars[i], 'g'), '');
            }
        }
        
        // Generate password
        let password = '';
        let hasUppercase = false;
        let hasLowercase = false;
        let hasNumber = false;
        let hasSymbol = false;
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            const char = charPool[randomIndex];
            password += char;
            
            // Check character types for strength calculation
            if (uppercaseChars.includes(char)) hasUppercase = true;
            if (lowercaseChars.includes(char)) hasLowercase = true;
            if (numberChars.includes(char)) hasNumber = true;
            if (symbolChars.includes(char)) hasSymbol = true;
        }
        
        // Set the generated password
        passwordOutput.value = password;
        
        // Calculate and update password strength
        updatePasswordStrength(password, hasUppercase, hasLowercase, hasNumber, hasSymbol);
        
        // Add to history
        addToHistory(password);
    }
    
    // Update password strength meter
    function updatePasswordStrength(password, hasUppercase, hasLowercase, hasNumber, hasSymbol) {
        if (!strengthMeter || !strengthText) return;
        
        const length = password.length;
        let strength = 0;
        let strengthLabel = '';
        
        // Calculate strength based on length and character types
        if (length >= 8) strength += 1;
        if (length >= 12) strength += 1;
        if (length >= 16) strength += 1;
        if (hasUppercase) strength += 1;
        if (hasLowercase) strength += 1;
        if (hasNumber) strength += 1;
        if (hasSymbol) strength += 1;
        
        // Set strength meter value and label
        switch (true) {
            case (strength <= 2):
                strengthLabel = 'Weak';
                strengthMeter.value = 25;
                strengthMeter.className = 'progress-bar bg-danger';
                break;
            case (strength <= 4):
                strengthLabel = 'Moderate';
                strengthMeter.value = 50;
                strengthMeter.className = 'progress-bar bg-warning';
                break;
            case (strength <= 6):
                strengthLabel = 'Strong';
                strengthMeter.value = 75;
                strengthMeter.className = 'progress-bar bg-info';
                break;
            default:
                strengthLabel = 'Very Strong';
                strengthMeter.value = 100;
                strengthMeter.className = 'progress-bar bg-success';
        }
        
        strengthText.textContent = strengthLabel;
    }
    
    // Add password to history
    function addToHistory(password) {
        // Add to beginning of array
        history.unshift(password);
        
        // Keep only the last 5 passwords
        if (history.length > 5) {
            history = history.slice(0, 5);
        }
        
        // Update history display
        updatePasswordHistory();
    }
    
    // Update password history display
    function updatePasswordHistory() {
        if (!passwordHistory) return;
        
        if (history.length === 0) {
            passwordHistory.innerHTML = '<p class="text-muted">No passwords generated yet.</p>';
            return;
        }
        
        let historyHTML = '<ul class="list-group">';
        history.forEach((pass, index) => {
            historyHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center neon-card">
                    <span class="password-history-item">${maskPassword(pass)}</span>
                    <button class="btn btn-sm btn-outline-primary copy-history-btn" data-password="${pass}">
                        <i class="fas fa-copy"></i>
                    </button>
                </li>
            `;
        });
        historyHTML += '</ul>';
        
        passwordHistory.innerHTML = historyHTML;
        
        // Add event listeners to copy buttons
        document.querySelectorAll('.copy-history-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const password = this.getAttribute('data-password');
                navigator.clipboard.writeText(password)
                    .then(() => {
                        // Show temporary success message
                        const originalText = this.innerHTML;
                        this.innerHTML = '<i class="fas fa-check"></i>';
                        setTimeout(() => {
                            this.innerHTML = originalText;
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
            });
        });
    }
    
    // Mask password for display in history
    function maskPassword(password) {
        if (password.length <= 8) {
            return '•'.repeat(password.length);
        } else {
            return password.substring(0, 3) + '•'.repeat(password.length - 6) + password.substring(password.length - 3);
        }
    }
    
    // Generate a password on page load
    generatePassword();
}); 