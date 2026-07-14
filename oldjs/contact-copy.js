// Contact Copy Functionality
function copyToClipboard(text, label) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);

    // Select and copy
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');

        // Show success message
        showMessage('✅ ' + label + ' copied to clipboard: ' + text);
    } catch (err) {
        showMessage('❌ Copy failed, please copy manually: ' + text);
    }

    // Remove temporary element
    document.body.removeChild(textarea);
}

function showMessage(text) {
    // Remove existing message if any
    const existing = document.querySelector('.copy-message');
    if (existing) {
        existing.remove();
    }

    // Create message element
    const message = document.createElement('div');
    message.className = 'copy-message';
    message.textContent = text;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 20px 40px;
        border-radius: 8px;
        font-size: 16px;
        z-index: 10000;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        animation: fadeIn 0.3s ease;
    `;

    document.body.appendChild(message);

    // Auto remove after 3 seconds
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
    }
`;
document.head.appendChild(style);
