<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SCRIPT KIDDIE ROAST | Cyber Reality Check</title>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #000;
        color: #00ff41;
        font-family: 'Courier New', monospace;
        overflow-x: hidden;
        min-height: 100vh;
        position: relative;
    }

    /* Matrix rain canvas */
    #matrix {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
        opacity: 0.15;
    }

    .container {
        position: relative;
        z-index: 1;
        max-width: 900px;
        margin: 0 auto;
        padding: 60px 20px 80px;
    }

    /* Top warning bar */
    .warning-bar {
        background: #00ff41;
        color: #000;
        text-align: center;
        padding: 8px;
        font-weight: bold;
        letter-spacing: 3px;
        animation: blink 1s infinite;
        font-size: 14px;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.3; }
    }

    /* Glitch title */
    h1 {
        font-size: 48px;
        text-align: center;
        margin: 40px 0;
        text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41;
        position: relative;
        animation: glitch 3s infinite;
        letter-spacing: 2px;
    }

    @keyframes glitch {
        0%, 90%, 100% { transform: translate(0); }
        92% { transform: translate(-2px, 1px); }
        94% { transform: translate(2px, -1px); }
        96% { transform: translate(-1px, -1px); }
        98% { transform: translate(1px, 1px); }
    }

    h1::before,
    h1::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    h1::before {
        color: #ff00c8;
        animation: glitch-1 2s infinite;
        clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        opacity: 0.7;
    }

    h1::after {
        color: #00ffff;
        animation: glitch-2 2.5s infinite;
        clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        opacity: 0.7;
    }

    @keyframes glitch-1 {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-3px); }
        40% { transform: translateX(3px); }
        60% { transform: translateX(-1px); }
        80% { transform: translateX(2px); }
    }

    @keyframes glitch-2 {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(3px); }
        40% { transform: translateX(-3px); }
        60% { transform: translateX(1px); }
        80% { transform: translateX(-2px); }
    }

    /* Terminal window */
    .terminal {
        background: rgba(0, 20, 0, 0.8);
        border: 1px solid #00ff41;
        border-radius: 5px;
        margin: 30px 0;
        box-shadow: 0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 60px rgba(0, 255, 65, 0.05);
        backdrop-filter: blur(3px);
    }

    .terminal-header {
        background: #00330a;
        padding: 10px 15px;
        border-bottom: 1px solid #00ff41;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .dot.red { background: #ff5f56; }
    .dot.yellow { background: #ffbd2e; }
    .dot.green { background: #27c93f; }

    .terminal-title {
        margin-left: 10px;
        font-size: 13px;
        opacity: 0.8;
    }

    .terminal-body {
        padding: 25px;
        line-height: 1.8;
        font-size: 15px;
    }

    .prompt {
        color: #00ff41;
    }

    .cursor {
        display: inline-block;
        width: 10px;
        height: 18px;
        background: #00ff41;
        animation: cursor-blink 0.8s infinite;
        vertical-align: middle;
        margin-left: 2px;
    }

    @keyframes cursor-blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }

    /* Image container */
    .image-container {
        text-align: center;
        margin: 40px 0;
    }

    .roast-image {
        width: 550px;
        height: 447px;
        border: 1px solid #00ff41;
        box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
        object-fit: cover;
        max-width: 100%;
    }

    /* Roast section */
    .roast-section {
        margin: 40px 0;
    }

    .roast-item {
        border-left: 3px solid #00ff41;
        padding: 15px 20px;
        margin: 20px 0;
        background: rgba(0, 255, 65, 0.05);
        transition: all 0.3s;
        position: relative;
    }

    .roast-item:hover {
        background: rgba(0, 255, 65, 0.1);
        box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        transform: translateX(5px);
    }

    .roast-item h3 {
        color: #00ffff;
        margin-bottom: 8px;
        font-size: 18px;
    }

    .roast-item p {
        opacity: 0.9;
        line-height: 1.7;
    }

    .highlight {
        color: #ff00c8;
        font-weight: bold;
        text-shadow: 0 0 5px #ff00c8;
    }

    /* CRT scanline */
    .scanline {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 0, 0, 0.3) 50%
        );
        background-size: 100% 4px;
        pointer-events: none;
        z-index: 10;
        opacity: 0.3;
    }

    /* Bottom status bar */
    .status-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #001a05;
        border-top: 1px solid #00ff41;
        padding: 8px 20px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        z-index: 5;
    }

    .status-item {
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #00ff41;
        animation: blink 2s infinite;
    }

    @media (max-width: 600px) {
        h1 { font-size: 28px; }
        .terminal-body { padding: 15px; font-size: 13px; }
        .roast-image { width: 100%; height: auto; }
    }
</style>
</head>
<body>

<canvas id="matrix"></canvas>
<div class="scanline"></div>

<div class="warning-bar">
    [ WARNING ] SCRIPT KIDDIE DETECTED IN PROGRESS [ WARNING ]
</div>

<div class="container">
    <h1 data-text="SCRIPT KIDDIE ROAST">SCRIPT KIDDIE ROAST</h1>

    <div class="terminal">
        <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="terminal-title">root@reality:~# system_analysis.sh</span>
        </div>
        <div class="terminal-body">
            <div><span class="prompt">root@reality:~#</span> Scanning target system...</div>
            <div>> Detected tools: SQLmap, Nmap, cracked Burp Suite, dirb knockoffs</div>
            <div>> Detected behavior: copy-paste payloads, one-click spray-and-pray, hit-and-run scanning</div>
            <div>> Skill assessment: <span class="highlight">below entry level</span></div>
            <div>> Verdict: textbook script kiddie. Case closed.</div>
            <div><span class="prompt">root@reality:~#</span> <span class="cursor"></span></div>
        </div>
    </div>

    <!-- 550*447 图片区域 -->
    <div class="image-container">
        <img 
            src="/images/fuck.jpg" 
            alt="Script Kiddie Meme"
            class="roast-image"
        >
    </div>

    <div class="roast-section">
        <div class="roast-item">
            <h3>▸ The Tool Hoarder</h3>
            <p>You’ve got terabytes of "hacking tools" rotting on your hard drive that you’ve never even unzipped. You brag about your "elite toolkit" but can’t remember more than 3 command-line flags. You run scripts other people wrote, have zero clue what the output means, and still think you’re a cyber god.</p>
        </div>

        <div class="roast-item">
            <h3>▸ Copy-Paste SQL Injector</h3>
            <p>Fire up SQLmap, slap on a -u, and let it rip. If it works, you’re a legend. If it doesn’t, the site is "unhackable". Manual injection? Never heard of her. You can’t even count columns without ORDER BY, but you swear you’ve mastered database exploitation.</p>
        </div>

        <div class="roast-item">
            <h3>▸ "Elite" Social Engineer</h3>
            <p>Your so-called "doxxing skills" are just scrolling Instagram and looking up numbers on Whitepages. You flex public info on noobs and claim you can pull anyone’s records. In reality, you couldn’t find a real database if it was handed to you on a silver platter.</p>
        </div>

        <div class="roast-item">
            <h3>▸ DDoS Keyboard Warrior</h3>
            <p>You drop $2 on a booter service, hit a site for 10 seconds, and post the screenshot in your Discord server. You brag about "taking sites offline" but your traffic is less than a normal Tuesday. The second a CDN shows up, you’re completely useless.</p>
        </div>

        <div class="roast-item">
            <h3>▸ Account Theft Grifter</h3>
            <p>You spam phishing links everywhere and brag for 6 months when one idiot falls for it. You brute-force weak passwords and act like you cracked Fort Knox. Throw a half-decent password at you, and you fold faster than a cheap lawn chair.</p>
        </div>

        <div class="roast-item">
            <h3>▸ Hacker Quote Salesman</h3>
            <p>You spout lines like "there’s no such thing as 100% security" and "real hackers stay in the shadows". You’ve memorized every edgy quote from 2000s forums, but can’t write a single line of code. Your profile pic is a Guy Fawkes mask and your bio is straight out of a 4chan copypasta.</p>
        </div>
    </div>

    <div class="terminal">
        <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="terminal-title">root@reality:~# final_verdict</span>
        </div>
        <div class="terminal-body">
            <div>> Pro tip: Learn Python for 3 months, then study networking for another 6.</div>
            <div>> Reminder: <span class="highlight">No matter how good you are at running tools, you didn’t build them.</span></div>
            <div>> Truth: Your "hacking skills" are just scraps left by actual hackers.</div>
            <div>> Final word: Cut the act, kid. Real hackers are busy writing code. Only script kiddies run around flexing.</div>
            <div style="margin-top: 15px; color: #00ffff;">
                — From someone who can’t be bothered to call you out
            </div>
            <div><span class="prompt">root@reality:~#</span> <span class="cursor"></span></div>
        </div>
    </div>
</div>

<div class="status-bar">
    <div class="status-item">
        <span class="status-dot"></span>
        SYSTEM SECURE
    </div>
    <div class="status-item">
        THREAT LEVEL: MEME
    </div>
    <div class="status-item">
        SCRIPT KIDDIES BLOCKED: ∞
    </div>
</div>

<script>
    // Matrix rain effect
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Random glitch effect
    function randomGlitch() {
        const elements = document.querySelectorAll('.roast-item h3');
        const randomEl = elements[Math.floor(Math.random() * elements.length)];
        randomEl.style.transform = 'translateX(2px)';
        randomEl.style.color = '#ff00c8';
        setTimeout(() => {
            randomEl.style.transform = '';
            randomEl.style.color = '';
        }, 100);
    }

    setInterval(randomGlitch, 3000);
</script>
<script>
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"LFRd8JuqrLILglAq",ck:"LFRd8JuqrLILglAq"});
</script>
</body>
</html>
