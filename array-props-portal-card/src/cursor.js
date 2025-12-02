// cursor.js — V5 tiny, high-perf cursor engine
export default function initCursorTilt() {
    const root = document.documentElement;
    let w = window.innerWidth, h = window.innerHeight;
    window.addEventListener('resize', () => { w = window.innerWidth; h = window.innerHeight; });

    let raf = null;
    document.addEventListener('pointermove', (e) => {
        const x = e.clientX / w - 0.5;
        const y = e.clientY / h - 0.5;
        const mx = Math.max(-1, Math.min(1, x * 2));
        const my = Math.max(-1, Math.min(1, y * 2));

        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            document.querySelectorAll('.card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const scale = Math.min(1.25, Math.max(0.85, rect.width / 380));
                card.style.setProperty('--mx', (mx * scale).toFixed(3));
                card.style.setProperty('--my', (my * scale).toFixed(3));
                // Set computed rotation vars used in CSS (if used)
                const tiltX = (my * 10 * scale).toFixed(3);
                const tiltY = (mx * -14 * scale).toFixed(3);
                card.style.setProperty('--tilt-x', `${tiltX}deg`);
                card.style.setProperty('--tilt-y', `${tiltY}deg`);
            });

            root.style.setProperty('--cursor-x', (x + 0.5).toFixed(3));
            root.style.setProperty('--cursor-y', (y + 0.5).toFixed(3));
        });
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
        document.querySelectorAll('.card').forEach(card => {
            card.style.setProperty('--mx', '0');
            card.style.setProperty('--my', '0');
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
        });
        root.style.setProperty('--cursor-x', '0.5');
        root.style.setProperty('--cursor-y', '0.5');
    });
}
