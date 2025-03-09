document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const qrTypeSelect = document.getElementById('qr-type');
    const qrInputFields = document.querySelectorAll('.qr-input-field');
    const generateBtn = document.getElementById('generate-btn');
    const qrCodeOutput = document.getElementById('qr-code-output');
    const downloadPngBtn = document.getElementById('download-png-btn');
    const downloadSvgBtn = document.getElementById('download-svg-btn');
    const qrSizeSelect = document.getElementById('qr-size');
    const qrColorInput = document.getElementById('qr-color');
    
    // QR code instance
    let qrCode = null;
    
    // Initialize QR code library
    function initQRCode() {
        qrCode = new QRCode(qrCodeOutput, {
            text: "https://neontools.io",
            width: parseInt(qrSizeSelect ? qrSizeSelect.value : 200),
            height: parseInt(qrSizeSelect ? qrSizeSelect.value : 200),
            colorDark: qrColorInput ? qrColorInput.value : "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
    
    // Show appropriate input fields based on QR type
    if (qrTypeSelect) {
        qrTypeSelect.addEventListener('change', function() {
            showRelevantInputFields(this.value);
        });
        
        // Initialize with the default selected type
        showRelevantInputFields(qrTypeSelect.value);
    }
    
    // Generate QR code button click handler
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            generateQRCode();
        });
    }
    
    // QR size change handler
    if (qrSizeSelect) {
        qrSizeSelect.addEventListener('change', function() {
            if (qrCode) {
                // Regenerate QR code with new size
                generateQRCode();
            }
        });
    }
    
    // QR color change handler
    if (qrColorInput) {
        qrColorInput.addEventListener('change', function() {
            if (qrCode) {
                // Regenerate QR code with new color
                generateQRCode();
            }
        });
    }
    
    // Download PNG button click handler
    if (downloadPngBtn) {
        downloadPngBtn.addEventListener('click', function() {
            downloadQRCode('png');
        });
    }
    
    // Download SVG button click handler
    if (downloadSvgBtn) {
        downloadSvgBtn.addEventListener('click', function() {
            downloadQRCode('svg');
        });
    }
    
    // Show relevant input fields based on QR type
    function showRelevantInputFields(type) {
        // Hide all input fields first
        qrInputFields.forEach(field => {
            field.style.display = 'none';
        });
        
        // Show relevant fields based on type
        const relevantField = document.getElementById(`${type}-input`);
        if (relevantField) {
            relevantField.style.display = 'block';
        }
    }
    
    // Generate QR code function
    function generateQRCode() {
        if (!qrTypeSelect || !qrCodeOutput) return;
        
        const type = qrTypeSelect.value;
        let qrData = '';
        
        // Get data based on QR type
        switch (type) {
            case 'url':
                const urlInput = document.getElementById('url-input-value');
                if (urlInput && urlInput.value) {
                    qrData = urlInput.value;
                } else {
                    alert('Please enter a URL.');
                    return;
                }
                break;
                
            case 'text':
                const textInput = document.getElementById('text-input-value');
                if (textInput && textInput.value) {
                    qrData = textInput.value;
                } else {
                    alert('Please enter some text.');
                    return;
                }
                break;
                
            case 'email':
                const emailAddress = document.getElementById('email-address').value;
                const emailSubject = document.getElementById('email-subject').value;
                const emailBody = document.getElementById('email-body').value;
                
                if (!emailAddress) {
                    alert('Please enter an email address.');
                    return;
                }
                
                qrData = `mailto:${emailAddress}`;
                if (emailSubject || emailBody) {
                    qrData += `?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                }
                break;
                
            case 'phone':
                const phoneNumber = document.getElementById('phone-number').value;
                
                if (!phoneNumber) {
                    alert('Please enter a phone number.');
                    return;
                }
                
                qrData = `tel:${phoneNumber}`;
                break;
                
            case 'sms':
                const smsNumber = document.getElementById('sms-number').value;
                const smsMessage = document.getElementById('sms-message').value;
                
                if (!smsNumber) {
                    alert('Please enter a phone number.');
                    return;
                }
                
                qrData = `sms:${smsNumber}`;
                if (smsMessage) {
                    qrData += `?body=${encodeURIComponent(smsMessage)}`;
                }
                break;
                
            case 'wifi':
                const wifiSsid = document.getElementById('wifi-ssid').value;
                const wifiPassword = document.getElementById('wifi-password').value;
                const wifiType = document.getElementById('wifi-type').value;
                const wifiHidden = document.getElementById('wifi-hidden').checked;
                
                if (!wifiSsid) {
                    alert('Please enter a WiFi SSID.');
                    return;
                }
                
                qrData = `WIFI:S:${wifiSsid};T:${wifiType};P:${wifiPassword};H:${wifiHidden ? 'true' : 'false'};;`;
                break;
                
            case 'vcard':
                const vcardFirstName = document.getElementById('vcard-first-name').value;
                const vcardLastName = document.getElementById('vcard-last-name').value;
                const vcardPhone = document.getElementById('vcard-phone').value;
                const vcardEmail = document.getElementById('vcard-email').value;
                const vcardOrg = document.getElementById('vcard-org').value;
                const vcardUrl = document.getElementById('vcard-url').value;
                
                if (!vcardFirstName && !vcardLastName) {
                    alert('Please enter at least a first or last name.');
                    return;
                }
                
                qrData = 'BEGIN:VCARD\nVERSION:3.0\n';
                qrData += `N:${vcardLastName};${vcardFirstName};;;\n`;
                qrData += `FN:${vcardFirstName} ${vcardLastName}\n`;
                if (vcardPhone) qrData += `TEL;TYPE=CELL:${vcardPhone}\n`;
                if (vcardEmail) qrData += `EMAIL:${vcardEmail}\n`;
                if (vcardOrg) qrData += `ORG:${vcardOrg}\n`;
                if (vcardUrl) qrData += `URL:${vcardUrl}\n`;
                qrData += 'END:VCARD';
                break;
                
            default:
                alert('Please select a valid QR code type.');
                return;
        }
        
        // Clear previous QR code
        qrCodeOutput.innerHTML = '';
        
        // Create new QR code
        qrCode = new QRCode(qrCodeOutput, {
            text: qrData,
            width: parseInt(qrSizeSelect ? qrSizeSelect.value : 200),
            height: parseInt(qrSizeSelect ? qrSizeSelect.value : 200),
            colorDark: qrColorInput ? qrColorInput.value : "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Show download buttons
        if (downloadPngBtn) downloadPngBtn.classList.remove('d-none');
        if (downloadSvgBtn) downloadSvgBtn.classList.remove('d-none');
    }
    
    // Download QR code function
    function downloadQRCode(format) {
        if (!qrCodeOutput) return;
        
        const qrImage = qrCodeOutput.querySelector('img');
        const qrCanvas = qrCodeOutput.querySelector('canvas');
        
        if (!qrImage || !qrCanvas) {
            alert('Please generate a QR code first.');
            return;
        }
        
        const type = qrTypeSelect ? qrTypeSelect.value : 'qrcode';
        let filename = `neontools-${type}-qrcode`;
        
        if (format === 'png') {
            // For PNG, use the canvas to create a download link
            const link = document.createElement('a');
            link.download = `${filename}.png`;
            link.href = qrCanvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (format === 'svg') {
            // For SVG, create an SVG from the canvas data
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const size = parseInt(qrSizeSelect ? qrSizeSelect.value : 200);
            svg.setAttribute('width', size);
            svg.setAttribute('height', size);
            svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
            
            // Get image data from canvas
            const ctx = qrCanvas.getContext('2d');
            const imageData = ctx.getImageData(0, 0, qrCanvas.width, qrCanvas.height);
            const data = imageData.data;
            
            // Create SVG elements for each pixel
            for (let y = 0; y < qrCanvas.height; y++) {
                for (let x = 0; x < qrCanvas.width; x++) {
                    const index = (y * qrCanvas.width + x) * 4;
                    const r = data[index];
                    const g = data[index + 1];
                    const b = data[index + 2];
                    const a = data[index + 3];
                    
                    // Only add rectangles for dark pixels
                    if (r === 0 && g === 0 && b === 0) {
                        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        rect.setAttribute('x', x);
                        rect.setAttribute('y', y);
                        rect.setAttribute('width', 1);
                        rect.setAttribute('height', 1);
                        rect.setAttribute('fill', qrColorInput ? qrColorInput.value : '#000000');
                        svg.appendChild(rect);
                    }
                }
            }
            
            // Convert SVG to string and create download link
            const svgData = new XMLSerializer().serializeToString(svg);
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const svgUrl = URL.createObjectURL(svgBlob);
            
            const link = document.createElement('a');
            link.download = `${filename}.svg`;
            link.href = svgUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(svgUrl);
        }
    }
    
    // Initialize QR code on page load
    initQRCode();
}); 