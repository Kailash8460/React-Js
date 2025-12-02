// cursor.js — GOD-LIMIT V4 cursor-driven tilt engine
export default function initCursorTilt() {
    const root = document.documentElement;

    let w = window.innerWidth;
    let h = window.innerHeight;
    window.addEventListener("resize", () => {
        w = window.innerWidth;
        h = window.innerHeight;
    });

    let raf = null;

    document.addEventListener(
        "pointermove",
        (e) => {
            const x = e.clientX / w - 0.5; // -0.5 → 0.5
            const y = e.clientY / h - 0.5;

            const mx = Math.max(-1, Math.min(1, x * 2));
            const my = Math.max(-1, Math.min(1, y * 2));

            if (raf) cancelAnimationFrame(raf);

            raf = requestAnimationFrame(() => {
                document.querySelectorAll(".card").forEach((card) => {
                    const rect = card.getBoundingClientRect();
                    const scale = Math.min(1.2, Math.max(0.8, rect.width / 380));

                    card.style.setProperty("--mx", (mx * scale).toFixed(3));
                    card.style.setProperty("--my", (my * scale).toFixed(3));
                });

                root.style.setProperty("--cursor-x", (x + 0.5).toFixed(3));
                root.style.setProperty("--cursor-y", (y + 0.5).toFixed(3));
            });
        },
        { passive: true }
    );

    document.addEventListener("pointerleave", () => {
        document.querySelectorAll(".card").forEach((card) => {
            card.style.setProperty("--mx", "0");
            card.style.setProperty("--my", "0");
        });

        root.style.setProperty("--cursor-x", "0.5");
        root.style.setProperty("--cursor-y", "0.5");
    });
}
