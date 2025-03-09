document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const jsonInput = document.getElementById('json-input');
    const jsonOutput = document.getElementById('json-output');
    const formatBtn = document.getElementById('format-btn');
    const minifyBtn = document.getElementById('minify-btn');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    const downloadBtn = document.getElementById('download-btn');
    const errorMsg = document.getElementById('error-message');
    
    // Initialize with example JSON if input is empty
    if (jsonInput && jsonInput.value.trim() === '') {
        jsonInput.value = `{
  "name": "NeonTools",
  "version": "1.0.0",
  "description": "Free online tools",
  "features": [
    "JSON Formatter",
    "Password Generator",
    "QR Code Generator"
  ],
  "isAwesome": true,
  "stats": {
    "tools": 100,
    "users": 10000
  }
}`;
    }
    
    // Format JSON button click handler
    if (formatBtn) {
        formatBtn.addEventListener('click', function() {
            formatJSON();
        });
    }
    
    // Minify JSON button click handler
    if (minifyBtn) {
        minifyBtn.addEventListener('click', function() {
            minifyJSON();
        });
    }
    
    // Clear button click handler
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (jsonInput) jsonInput.value = '';
            if (jsonOutput) jsonOutput.innerHTML = '';
            if (errorMsg) errorMsg.textContent = '';
            if (errorMsg) errorMsg.classList.add('d-none');
        });
    }
    
    // Copy button click handler
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            if (jsonOutput && jsonOutput.textContent) {
                navigator.clipboard.writeText(jsonOutput.textContent)
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
    
    // Download button click handler
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            if (jsonOutput && jsonOutput.textContent) {
                const blob = new Blob([jsonOutput.textContent], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'formatted-json.json';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        });
    }
    
    // Format JSON function
    function formatJSON() {
        if (!jsonInput || !jsonOutput) return;
        
        const inputValue = jsonInput.value.trim();
        if (!inputValue) {
            showError('Please enter JSON data.');
            return;
        }
        
        try {
            // Parse and format the JSON
            const parsedJSON = JSON.parse(inputValue);
            const formattedJSON = JSON.stringify(parsedJSON, null, 2);
            
            // Display the formatted JSON with syntax highlighting
            displayFormattedJSON(formattedJSON);
            
            // Hide any previous error
            if (errorMsg) {
                errorMsg.textContent = '';
                errorMsg.classList.add('d-none');
            }
        } catch (error) {
            showError(`Invalid JSON: ${error.message}`);
            jsonOutput.innerHTML = '';
        }
    }
    
    // Minify JSON function
    function minifyJSON() {
        if (!jsonInput || !jsonOutput) return;
        
        const inputValue = jsonInput.value.trim();
        if (!inputValue) {
            showError('Please enter JSON data.');
            return;
        }
        
        try {
            // Parse and minify the JSON
            const parsedJSON = JSON.parse(inputValue);
            const minifiedJSON = JSON.stringify(parsedJSON);
            
            // Display the minified JSON
            displayFormattedJSON(minifiedJSON);
            
            // Hide any previous error
            if (errorMsg) {
                errorMsg.textContent = '';
                errorMsg.classList.add('d-none');
            }
        } catch (error) {
            showError(`Invalid JSON: ${error.message}`);
            jsonOutput.innerHTML = '';
        }
    }
    
    // Display formatted JSON with syntax highlighting
    function displayFormattedJSON(json) {
        if (!jsonOutput) return;
        
        // Simple syntax highlighting
        const highlighted = json
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"([^"]+)":/g, '<span class="json-key">"$1":</span>')
            .replace(/"([^"]+)"/g, '<span class="json-string">"$1"</span>')
            .replace(/\b(true|false|null)\b/g, '<span class="json-boolean">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="json-number">$1</span>');
        
        jsonOutput.innerHTML = `<pre>${highlighted}</pre>`;
    }
    
    // Show error message
    function showError(message) {
        if (errorMsg) {
            errorMsg.textContent = message;
            errorMsg.classList.remove('d-none');
        }
    }
    
    // Format JSON on page load if there's input
    if (jsonInput && jsonInput.value.trim() !== '') {
        formatJSON();
    }
}); 