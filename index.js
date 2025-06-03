<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Jalan Kakak Kelas | Perpisahan Sekolah</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary: #4a6fa5;
            --secondary: #ff6b6b;
            --accent: #ffd166;
            --dark: #2c3e50;
            --light: #f8f9fa;
            --transition: all 0.4s ease;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
            color: var(--light);
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
        }
        
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        /* Particle Background */
        #particles-js {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }
        
        header {
            text-align: center;
            padding: 60px 20px 40px;
            position: relative;
            overflow: hidden;
        }
        
        .header-content {
            background: rgba(44, 62, 80, 0.7);
            padding: 30px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            animation: fadeIn 1.5s ease;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            font-family: 'Dancing Script', cursive;
            color: var(--accent);
            text-shadow: 0 0 10px rgba(255, 209, 102, 0.5);
            position: relative;
            display: inline-block;
        }
        
        h1::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 10%;
            width: 80%;
            height: 3px;
            background: linear-gradient(to right, transparent, var(--accent), transparent);
            border-radius: 50%;
        }
        
        .subtitle {
            font-size: 1.5rem;
            margin-bottom: 30px;
            color: var(--accent);
            font-weight: 300;
        }
        
        .main-content {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin: 40px 0;
        }
        
        .section {
            flex: 1;
            min-width: 300px;
            background: rgba(44, 62, 80, 0.8);
            border-radius: 20px;
            padding: 30px;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: var(--transition);
            animation: slideUp 1s ease;
        }
        
        .section:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
        
        .section-title {
            font-size: 2rem;
            color: var(--secondary);
            margin-bottom: 25px;
            text-align: center;
            position: relative;
            font-family: 'Dancing Script', cursive;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 25%;
            width: 50%;
            height: 2px;
            background: linear-gradient(to right, transparent, var(--secondary), transparent);
        }
        
        .message-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
            transition: var(--transition);
            border-left: 4px solid var(--accent);
        }
        
        .message-card:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: scale(1.02);
        }
        
        .message-text {
            font-style: italic;
            margin-bottom: 15px;
            text-align: justify;
        }
        
        .author {
            text-align: right;
            font-weight: 600;
            color: var(--accent);
        }
        
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .gallery-item {
            border-radius: 10px;
            overflow: hidden;
            height: 180px;
            position: relative;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            transition: var(--transition);
        }
        
        .gallery-item:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }
        
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        
        .gallery-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7));
        }
        
        .timeline {
            margin-top: 30px;
        }
        
        .timeline-item {
            display: flex;
            margin-bottom: 40px;
            position: relative;
            padding-left: 30px;
        }
        
        .timeline-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: var(--secondary);
            z-index: 2;
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            left: 7px;
            top: 10px;
            width: 2px;
            height: 100%;
            background: var(--accent);
        }
        
        .timeline-content {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            width: 100%;
        }
        
        .timeline-year {
            color: var(--accent);
            font-weight: 700;
            margin-bottom: 10px;
            font-size: 1.2rem;
        }
        
        .wishes-section {
            text-align: center;
            margin-top: 50px;
            padding: 40px;
            background: rgba(44, 62, 80, 0.7);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .wishes-title {
            font-size: 2.5rem;
            color: var(--accent);
            margin-bottom: 30px;
            font-family: 'Dancing Script', cursive;
        }
        
        .wishes-text {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 30px;
            text-align: justify;
            line-height: 1.8;
        }
        
        .signature {
            font-family: 'Dancing Script', cursive;
            font-size: 2.5rem;
            color: var(--accent);
            margin-top: 20px;
            text-align: center;
        }
        
        .footer {
            text-align: center;
            padding: 30px 20px;
            margin-top: 50px;
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.7);
            position: relative;
        }
        
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }
        
        .social-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--accent);
            transition: var(--transition);
            text-decoration: none;
        }
        
        .social-icon:hover {
            background: var(--accent);
            color: var(--dark);
            transform: translateY(-5px);
        }
        
        .floating-icon {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: var(--secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            color: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            z-index: 100;
            animation: pulse 2s infinite;
            transition: var(--transition);
        }
        
        .floating-icon:hover {
            transform: scale(1.1) rotate(10deg);
            animation: none;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(255, 107, 107, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            h1 { font-size: 3rem; }
            .subtitle { font-size: 1.2rem; }
            .section { min-width: 100%; }
            .main-content { flex-direction: column; }
            .wishes-section { padding: 20px; }
        }
        
        @media (max-width: 480px) {
            h1 { font-size: 2.5rem; }
            .section-title { font-size: 1.8rem; }
            .gallery { grid-template-columns: repeat(2, 1fr); }
        }
    </style>
</head>
<body>
    <!-- Particles Background -->
    <div id="particles-js"></div>
    
    <div class="container">
        <header>
            <div class="header-content">
                <h1>HAPPY GRADUATION</h1>
               
            <div class="section">
                <h2 class="section-title">Galeri Kenangan</h2>
                <div class="gallery">
                    <div class="gallery-item">
                        <img src="https://files.catbox.moe/xo27r1.jpg" alt="Kenangan Sekolah">
                    </div>
                    <div class="gallery-item">
                        <img src="https://files.catbox.moe/stwhcm.jpg" alt="Kegiatan Sekolah">
                    </div>
                    <div class="gallery-item">
                        <img src="https://files.catbox.moe/przf7u.jpg" alt="Ekstrakurikuler">
                    </div>
                    <div class="gallery-item">
                        <img src="https://files.catbox.moe/stwhcm.jpg" alt="Persahabatan">
                    </div>
                    <div class="gallery-item">
                        <img src="https://files.catbox.moe/c3mfyy.jpg" alt="Perlombaan">
                    </div>
                    <div class="gallery-item">
                        <img src="https://files.catbox.moe/tz58cg.jpg" alt="Kebersamaan">
                    </div>
                </div>
            </div>
        </div>
        
            <h2 class="wishes-title">happy graduation</h2>
            <p class="wishes-text">
                 kakel' ku tercintaa congratulations on starting a new chapter in your new school, sukses selalu kak aku akan selalu melihat perjuanganmu dijarak yang paling jauh smoga tuhan slalu mempermudah hidupmu ya kak? jujur kita ga rela kakak lulus.... tapi itu sudah wktunya, kita akan selalu mengingatmu kaaa i will mis you i will mis you, selamat menjalani hidup mu yng baru ka jangan lupain kita yaa? see youu, im so proud of you🫂🫂🤍🤍🤍.
            </p>
        
        <div class="footer">
            <p>Website Kenangan Perpisahan Sekolah | Dibuat dengan ❤ oleh ilham official 8c</p>
            <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
            </div>
            <p>© 2023 | Kenangan Abadi Sekolah Kita</p>
        </div>
    </div>
    
    <div class="floating-icon">
        <i class="fas fa-heart"></i>
    </div>
    
    <!-- Particles JS -->
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script>
        // Initialize particles.js
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
        
        // Floating heart animation
        const floatingIcon = document.querySelector('.floating-icon');
        floatingIcon.addEventListener('click', () => {
            floatingIcon.innerHTML = '<i class="fas fa-check"></i>';
            floatingIcon.style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                floatingIcon.innerHTML = '<i class="fas fa-heart"></i>';
                floatingIcon.style.backgroundColor = 'var(--secondary)';
            }, 2000);
        });
    </script>
</body>
</html>
