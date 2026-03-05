class Blob {
    constructor(canvas, color) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 80 + 40;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.color = color;
        
        // Generate the shape once and store it
        this.shapePoints = [];
        const numPoints = 12;
        const angleStep = (Math.PI * 2) / numPoints;
        for (let i = 0; i < numPoints; i++) {
            const angle = i * angleStep;
            const radius = this.radius + (Math.random() - 0.5) * this.radius * 0.5;
            this.shapePoints.push({
                angle: angle,
                radius: radius
            });
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;

        // Use the pre-generated shape points
        const points = this.shapePoints.map(p => {
            return {
                x: this.x + Math.cos(p.angle) * p.radius,
                y: this.y + Math.sin(p.angle) * p.radius,
            };
        });

        if (points.length < 2) return;

        this.ctx.moveTo(points[0].x, points[0].y);

        for (let i = 0; i < points.length; i++) {
            const p1 = points[i];
            const p2 = points[(i + 1) % points.length];
            const midPoint = {
                x: (p1.x + p2.x) / 2,
                y: (p1.y + p2.y) / 2,
            };
            this.ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
        }
        
        this.ctx.closePath();
        this.ctx.fill();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off the edges
        if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
            this.vx *= -1;
        }
        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
            this.vy *= -1;
        }
    }
}

function initLavaLamp() {
    const canvas = document.getElementById('lava-lamp-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
        'rgba(255, 105, 180, 0.9)', // Pink
        'rgba(0, 191, 255, 0.9)',   // Deep Sky Blue
        'rgba(255, 215, 0, 0.9)',    // Gold
        'rgba(147, 112, 219, 0.9)', // Medium Purple
        'rgba(50, 205, 50, 0.9)'     // Lime Green
    ];

    const blobs = [];
    for (let i = 0; i < 5; i++) {
        blobs.push(new Blob(canvas, colors[i % colors.length]));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        blobs.forEach(blob => {
            blob.draw();
            blob.update();
        });
        requestAnimationFrame(animate);
    }

    animate();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) return;
        resizeTimeout = requestAnimationFrame(() => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            resizeTimeout = null;
        });
    });
}

// Iniciar la animación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLavaLamp);
} else {
    initLavaLamp();
}
