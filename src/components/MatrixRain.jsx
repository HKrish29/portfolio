import { useEffect, useRef } from 'react';

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]<>/\\|=+-_*&^%$#@!';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.06)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                const char = charArray[Math.floor(Math.random() * charArray.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Varying green shades
                const brightness = Math.random();
                if (brightness > 0.95) {
                    ctx.fillStyle = '#ffffff';
                    ctx.shadowColor = '#00ff88';
                    ctx.shadowBlur = 15;
                } else if (brightness > 0.8) {
                    ctx.fillStyle = '#00ff88';
                    ctx.shadowColor = '#00ff88';
                    ctx.shadowBlur = 8;
                } else {
                    ctx.fillStyle = `rgba(0, 255, 136, ${0.1 + brightness * 0.3})`;
                    ctx.shadowBlur = 0;
                }

                ctx.font = `${fontSize}px "Fira Code", monospace`;
                ctx.fillText(char, x, y);
                ctx.shadowBlur = 0;

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 45);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.25,
                pointerEvents: 'none',
            }}
        />
    );
};

export default MatrixRain;
