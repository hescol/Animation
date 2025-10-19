// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const nextBirthday = new Date(now.getFullYear(), 3, 4); // Example: January 1st next year. Change to actual birthday date.
    const timeDiff = nextBirthday - now;
    
    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        document.getElementById('timer').innerHTML = '${days}d ${hours}h ${minutes}m ${seconds}s';
    } else {
        document.getElementById('timer').innerHTML = "It's your birthday!";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Wish Form
document.getElementById('wish-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const wish = document.getElementById('wish').value;
    const wishList = document.getElementById('wish-list');
    const wishItem = document.createElement('div');
    wishItem.className = 'wish-item';
    wishItem.innerHTML = '<strong>${name}:</strong> ${wish}';
    wishList.appendChild(wishItem);
    document.getElementById('name').value = '';
    document.getElementById('wish').value = '';
});

// Confetti Animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 1,
        color: 'hsl(${Math.random() * 360}, 100%, 50%)',
        size: Math.random() * 5 + 2
    };
}

for (let i = 0; i < 100; i++) {
    particles.push(createParticle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > canvas.height) p.y = 0;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();