import {confetti} from "tsparticles-confetti";

export const animate = async () => {
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    let randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    await (async function frame(): Promise<void> {
        const timeLeft = animationEnd - Date.now();
        const ticks = Math.max(200, 500 * (timeLeft / duration));

        skew = Math.max(0.8, skew - 0.001);

        await confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                y: Math.random() * skew - 0.2,
            },
            colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
            shapes: ["heart"],
            gravity: randomInRange(0.5, 1),
            scalar: randomInRange(1, 2),
            drift: randomInRange(-0.5, 0.5),
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    })();
}

export  const Opacity = (name: string) => {
    let nm = document.getElementById(name);
    let op = parseInt(nm!.style.opacity);
    let clear: any = null;

    clear = setInterval(() => {
        if (op >= 0) {
            nm!.style.opacity = op.toString();
            op -= 0.025;
        } else {
            clearInterval(clear);
            clear = null;
            nm!.remove();
            return;
        }
    }, 10);
}