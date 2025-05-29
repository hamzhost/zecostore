<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HostingPay - Modern Payment Gateway</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --primary-light: #3b82f6;
            --secondary: #1e40af;
            --dark: #111827;
            --darker: #0f172a;
            --light: #f8fafc;
            --gray: #94a3b8;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
        }

        body {
            background-color: var(--dark);
            color: var(--light);
            min-height: 100vh;
            background-image: 
                radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 0.1) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 0.1) 0px, transparent 50%);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--light);
            text-decoration: none;
        }

        .logo-icon {
            color: var(--primary);
            font-size: 2rem;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-link {
            color: var(--gray);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-link:hover {
            color: var(--primary);
        }

        .hero {
            text-align: center;
            margin-bottom: 4rem;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(to right, var(--primary), var(--primary-light));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.2;
        }

        .hero p {
            font-size: 1.25rem;
            color: var(--gray);
            max-width: 700px;
            margin: 0 auto 2rem;
            line-height: 1.6;
        }

        .payment-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }

        .payment-method {
            background: linear-gradient(to bottom, var(--darker), var(--dark));
            border-radius: 12px;
            padding: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
            overflow: hidden;
        }

        .payment-method::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--primary-light));
        }

        .payment-method:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .payment-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            gap: 1rem;
        }

        .payment-icon {
            width: 48px;
            height: 48px;
            object-fit: contain;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.05);
            padding: 0.5rem;
        }

        .payment-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--light);
        }

        .payment-details {
            margin-bottom: 1.5rem;
        }

        .payment-number {
            font-size: 1.1rem;
            background-color: rgba(255, 255, 255, 0.05);
            padding: 0.75rem 1rem;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            font-family: 'Courier New', monospace;
        }

        .copy-btn {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 0.35rem 0.75rem;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.35rem;
            font-size: 0.85rem;
            font-weight: 500;
        }

        .copy-btn:hover {
            background-color: var(--secondary);
            transform: translateY(-2px);
        }

        .copy-btn i {
            font-size: 0.9rem;
        }

        .payment-instruction {
            font-size: 0.95rem;
            color: var(--gray);
            line-height: 1.6;
            margin-bottom: 1.25rem;
        }

        .payment-instruction li {
            margin-bottom: 0.5rem;
            position: relative;
            padding-left: 1.5rem;
        }

        .payment-instruction li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: var(--primary);
        }

        .qris-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 1.5rem;
        }

        .qris-image {
            width: 180px;
            height: 180px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 1rem;
            object-fit: cover;
            background-color: white;
            padding: 0.5rem;
        }

        .qris-text {
            font-size: 0.9rem;
            color: var(--gray);
            text-align: center;
        }

        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--success);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transform: translateX(150%);
            transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .notification.show {
            transform: translateX(0);
        }

        .notification i {
            font-size: 1.1rem;
        }

        footer {
            text-align: center;
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1.5rem;
        }

        .footer-link {
            color: var(--gray);
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-link:hover {
            color: var(--primary);
        }

        .copyright {
            font-size: 0.9rem;
            color: var(--gray);
        }

        @media (max-width: 768px) {
            header {
                flex-direction: column;
                gap: 1.5rem;
            }

            .nav-links {
                gap: 1.5rem;
            }

            .hero h1 {
                font-size: 2.25rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .payment-container {
                grid-template-columns: 1fr;
            }
        }

        /* Animation */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .payment-method {
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
        }

        .payment-method:nth-child(1) {
            animation-delay: 0.1s;
        }
        .payment-method:nth-child(2) {
            animation-delay: 0.2s;
        }
        .payment-method:nth-child(3) {
            animation-delay: 0.3s;
        }
        .payment-method:nth-child(4) {
            animation-delay: 0.4s;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <a href="#" class="logo">
                <i class="fas fa-server logo-icon"></i>
                <span>IZZ BWI</span>
            </a>
            <nav class="nav-links">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">Services</a>
                <a href="#" class="nav-link">Pricing</a>
                <a href="#" class="nav-link">Contact</a>
            </nav>
        </header>

        <section class="hero">
            <h1>ZECOO STORE</h1>
            <p>Choose your preferred payment method to complete your hosting purchase or subscription renewal.</p>
        </section>

        <div class="payment-container">
            <!-- Dana -->
            <div class="payment-method">
                <div class="payment-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_DANA.svg" alt="DANA" class="payment-icon">
                    <h2 class="payment-title">DANA</h2>
                </div>
                <div class="payment-details">
                    <div class="payment-number">
                        <span id="dana-number">085733610983</span>
                        <button class="copy-btn" onclick="copyToClipboard('dana-number', 'DANA')">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                    <ul class="payment-instruction">
                        <li>Open DANA app on your phone</li>
                        <li>Go to "Send Money" section</li>
                        <li>Paste the number above</li>
                        <li>Enter the amount and confirm payment</li>
                    </ul>
                </div>
            </div>

            <!-- OVO -->
            <div class="payment-method">
                <div class="payment-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg" alt="OVO" class="payment-icon">
                    <h2 class="payment-title">OVO</h2>
                </div>
                <div class="payment-details">
                    <div class="payment-number">
                        <span id="ovo-number">ZECOO</span>
                        <button class="copy-btn" onclick="copyToClipboard('ovo-number', 'OVO')">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                    <ul class="payment-instruction">
                        <li>Launch OVO application</li>
                        <li>Select "Transfer" option</li>
                        <li>Paste the recipient number</li>
                        <li>Input amount and complete payment</li>
                    </ul>
                </div>
            </div>

            <!-- GoPay -->
            <div class="payment-method">
                <div class="payment-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/GoPay_logo.svg" alt="GoPay" class="payment-icon">
                    <h2 class="payment-title">GoPay</h2>
                </div>
                <div class="payment-details">
                    <div class="payment-number">
                        <span id="gopay-number">ZECOO</span>
                        <button class="copy-btn" onclick="copyToClipboard('gopay-number', 'GoPay')">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                    <ul class="payment-instruction">
                        <li>Open Gojek application</li>
                        <li>Navigate to "Pay" section</li>
                        <li>Choose GoPay payment method</li>
                        <li>Paste number and confirm transaction</li>
                    </ul>
                </div>
            </div>

            <!-- QRIS -->
            <div class="payment-method">
                <div class="payment-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QRIS_logo.svg" alt="QRIS" class="payment-icon">
                    <h2 class="payment-title">QRIS</h2>
                </div>
                <div class="payment-details">
                    <ul class="payment-instruction">
                        <li>Open your mobile banking/e-wallet app</li>
                        <li>Select QRIS payment option</li>
                        <li>Scan the QR code below</li>
                        <li>Enter amount and complete payment</li>
                        <li>Save payment confirmation as proof</li>
                    </ul>
                    <div class="qris-container">
                        <img src="https://files.catbox.moe/1kwy1l.jpg" alt="QR Code Payment" class="qris-image">
                        <p class="qris-text">Scan this QR code to pay</p>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <div class="footer-links">
                <a href="#" class="footer-link">Terms of Service</a>
                <a href="#" class="footer-link">Privacy Policy</a>
                <a href="#" class="footer-link">Support</a>
                <a href="#" class="footer-link">API Documentation</a>
            </div>
            <p class="copyright">© 2023 HostingPay. All rights reserved. PCI DSS Compliant Payment Gateway</p>
        </footer>
    </div>

    <div class="notification" id="notification">
        <i class="fas fa-check-circle"></i>
        <span id="notification-text">Number copied to clipboard!</span>
    </div>

    <script>
        function copyToClipboard(elementId, paymentMethod) {
            const element = document.getElementById(elementId);
            const text = element.innerText;
            
            navigator.clipboard.writeText(text).then(() => {
                showNotification(`${paymentMethod} number copied to clipboard!`);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                showNotification('Failed to copy, please try again', 'error');
            });
        }

        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notification-text');
            
            // Set notification color based on type
            if (type === 'error') {
                notification.style.backgroundColor = (--danger);
            } else if (type === 'warning') {
                notification.style.backgroundColor = (--warning);
            } else {
                notification.style.backgroundColor = (--success);
            }
            
            notificationText.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Add animation to payment methods on scroll
        document.addEventListener('DOMContentLoaded', () => {
            const paymentMethods = document.querySelectorAll('.payment-method');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, { threshold: 0.1 });
            
            paymentMethods.forEach(method => {
                observer.observe(method);
            });
        });
    </script>
</body>
</html>
