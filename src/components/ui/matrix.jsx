// src/components/ui/matrix.jsx
'use client';

import { useEffect, useRef } from 'react';

export default function MatrixBackground({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    updateDimensions();
    
    const fontSize = 20;
    // Increase columns to ensure full coverage (adding some extra columns)
    const columns = Math.ceil(canvas.width / fontSize) + 1;
    const drops = Array(columns).fill(0);
    // Add speed control (lower value = slower fall)
    const fallSpeed = 0.5; // Reduced from implicit 1 to 0.5

    let animationFrameId;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0aff0a';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * fontSize, Math.floor(drops[i]) * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        // Use fallSpeed to control descent rate
        drops[i] += fallSpeed;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateDimensions();
      const newColumns = Math.ceil(canvas.width / fontSize) + 1;
      drops.length = newColumns;
      // Fill any new columns with 0
      while (drops.length > columns) {
        drops.push(0);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}