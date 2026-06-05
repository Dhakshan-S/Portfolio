import React, { useEffect, useRef } from 'react';

export default function CanvasBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        if (mouse.x !== null && mouse.y !== null) {
          let diffX = this.x - mouse.x;
          let diffY = this.y - mouse.y;
          let distance = Math.sqrt(diffX * diffX + diffY * diffY);

          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            let angle = Math.atan2(diffY, diffX);
            this.x += Math.cos(angle) * force * 2;
            this.y += Math.sin(angle) * force * 2;
          }
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    function initParticles() {
      particles = [];
      const density = Math.floor((canvas.width * canvas.height) / 25000);
      const particleCount = Math.min(density, 60);

      const particleColor = theme === 'dark'
        ? 'rgba(99, 102, 241, 0.25)'
        : 'rgba(79, 70, 229, 0.12)';

      for (let i = 0; i < particleCount; i++) {
        let size = Math.random() * 2 + 1.5;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let dx = (Math.random() - 0.5) * 0.6;
        let dy = (Math.random() - 0.5) * 0.6;

        particles.push(new Particle(x, y, dx, dy, size, particleColor));
      }
    }

    function connectParticles() {
      const linkColorRgb = theme === 'dark' ? '99, 102, 241' : '79, 70, 229';
      const maxDistance = 140;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let diffX = particles[a].x - particles[b].x;
          let diffY = particles[a].y - particles[b].y;
          let distance = Math.sqrt(diffX * diffX + diffY * diffY);

          if (distance < maxDistance) {
            let alpha = (1 - (distance / maxDistance)) * 0.15;
            ctx.strokeStyle = `rgba(${linkColorRgb}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    let frameId;
    function animateCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw mouse spotlight glow
      if (mouse.x !== null && mouse.y !== null) {
        ctx.save();
        let glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 1.5);
        const glowColor = theme === 'dark' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.04)';
        glowGrad.addColorStop(0, glowColor);
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connectParticles();
      frameId = requestAnimationFrame(animateCanvas);
    }

    initParticles();
    animateCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(frameId);
    };
  }, [theme]);

  return <canvas id="hero-canvas" ref={canvasRef} />;
}
